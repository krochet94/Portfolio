import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { IoMdRefreshCircle } from "react-icons/io";
import { usePortfolioContent } from "../../content/PortfolioContentContext";

interface Quote {
  quote: string;
  author: string;
  id: number;
  length: number;
  tags: string[];
}

const FALLBACK_QUOTES: Quote[] = [
  {
    quote: "Strive to build things that make a difference!",
    author: "Anonymous",
    id: 1,
    length: 45,
    tags: ["motivation", "inspiration"],
  },
  {
    quote: "Consistency compounds faster than motivation.",
    author: "Anonymous",
    id: 2,
    length: 47,
    tags: ["consistency", "motivation"],
  },
]; 

const getRandomQuote = (items: Quote[]) =>
  items[Math.floor(Math.random() * items.length)] ?? FALLBACK_QUOTES[0];

const toNonEmptyString = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

const toStringArray = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
};

const normalizeQuote = (item: unknown, fallbackId: number): Quote | null => {
  if (typeof item !== "object" || item === null) {
    return null;
  }

  const source = item as Record<string, unknown>;

  const quote =
    toNonEmptyString(source.quote) ||
    toNonEmptyString(source.text) ||
    toNonEmptyString(source.content) ||
    toNonEmptyString(source.q);

  if (!quote) {
    return null;
  }

  const author = toNonEmptyString(source.author) || toNonEmptyString(source.a) || "Anonymous";

  const rawId = source.id ?? source._id;
  const parsedId =
    typeof rawId === "number" && Number.isFinite(rawId)
      ? rawId
      : typeof rawId === "string" && Number.isFinite(Number(rawId))
      ? Number(rawId)
      : fallbackId;

  const rawLength = source.length;
  const parsedLength =
    typeof rawLength === "number" && Number.isFinite(rawLength) && rawLength > 0
      ? rawLength
      : typeof rawLength === "string" && Number.isFinite(Number(rawLength)) && Number(rawLength) > 0
      ? Number(rawLength)
      : quote.length;

  return {
    quote,
    author,
    id: parsedId,
    length: parsedLength,
    tags: toStringArray(source.tags),
  };
};

function AboutCard() {
  const [quotes, setQuotes] = useState<Quote[]>(FALLBACK_QUOTES);
  const [randomQuote, setRandomQuote] = useState<Quote>(FALLBACK_QUOTES[0]);
  const { content } = usePortfolioContent();

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      const quotesApiUrl = import.meta.env.VITE_QUOTES_API_URL?.trim();

      if (!quotesApiUrl) {
        if (!isCancelled) {
          setQuotes(FALLBACK_QUOTES);
          setRandomQuote(getRandomQuote(FALLBACK_QUOTES));
        }

        return;
      }

      try {
        const response = await fetch(quotesApiUrl);

        if (!response.ok) {
          throw new Error(`Failed to load quotes: ${response.status}`);
        }

        const data: unknown = await response.json();
        const parsedQuotes: Quote[] = Array.isArray(data)
          ? data
              .map((item, index) => normalizeQuote(item, index + 1))
              .filter((item): item is Quote => item !== null)
          : [];

        const safeQuotes = parsedQuotes.length ? parsedQuotes : FALLBACK_QUOTES;

        if (!isCancelled) {
          setQuotes(safeQuotes);
          setRandomQuote(getRandomQuote(safeQuotes));
        }
      } catch (error) {
        console.error(error);

        if (!isCancelled) {
          setQuotes(FALLBACK_QUOTES);
          setRandomQuote(getRandomQuote(FALLBACK_QUOTES));
        }
      }
    };

    void fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  const handleRefreshQuote = () => {
    if (!quotes.length) {
      return;
    }

    setRandomQuote(getRandomQuote(quotes));
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {content.about.bioParagraphs.map((paragraph, index) => (
              <span key={`${paragraph}-${index}`}>
                {paragraph}
                {index < content.about.bioParagraphs.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>
          <br />
          <p>"{randomQuote.quote || FALLBACK_QUOTES[0].quote}"</p>
          <footer>
            {randomQuote.author || "Anonymous"}{" "}
            {quotes.length > 0 && (
              <IoMdRefreshCircle
                onClick={handleRefreshQuote}
                className="ms-2 quote-btn"
                title="Show another quote"
              />
            )}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
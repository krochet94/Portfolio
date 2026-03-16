import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { defaultPortfolioContent } from "./defaultContent";
import type { PortfolioContent, ProjectItem, SocialLinkItem, TechItem } from "../types/portfolioContent";

interface PortfolioContentContextValue {
  content: PortfolioContent;
  loading: boolean;
  error: string | null;
}

const PortfolioContentContext = createContext<PortfolioContentContextValue>({
  content: defaultPortfolioContent,
  loading: true,
  error: null,
});

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const normalizeProjects = (value: unknown): ProjectItem[] | null => {
  if (!Array.isArray(value)) {
    return null;
  }

  const projects = value
    .filter(isRecord)
    .map((item) => ({
      imgPath: isNonEmptyString(item.imgPath) ? item.imgPath : "",
      title: isNonEmptyString(item.title) ? item.title : "",
      description: isNonEmptyString(item.description) ? item.description : "",
      ghLink: isNonEmptyString(item.ghLink) ? item.ghLink : "",
      demoLink: isNonEmptyString(item.demoLink) ? item.demoLink : undefined,
      isBlog: typeof item.isBlog === "boolean" ? item.isBlog : false,
    }))
    .filter((item) => item.imgPath && item.title && item.description && item.ghLink);

  return projects.length ? projects : null;
};

const normalizeTechItems = (value: unknown): TechItem[] | null => {
  if (!Array.isArray(value)) {
    return null;
  }

  const techItems = value
    .filter(isRecord)
    .map((item) => ({
      icon: isNonEmptyString(item.icon) ? item.icon : "",
      desc: isNonEmptyString(item.desc) ? item.desc : "",
    }))
    .filter((item) => item.icon && item.desc);

  return techItems.length ? techItems : null;
};

const normalizeSocialLinks = (value: unknown): SocialLinkItem[] | null => {
  if (!Array.isArray(value)) {
    return null;
  }

  const socialLinks = value
    .filter(isRecord)
    .map((item) => ({
      platform: isNonEmptyString(item.platform) ? item.platform : "",
      url: isNonEmptyString(item.url) ? item.url : "",
      icon: isNonEmptyString(item.icon) ? item.icon : "",
    }))
    .filter((item) => item.platform && item.url && item.icon);

  return socialLinks.length ? socialLinks : null;
};

const normalizeContent = (data: unknown): PortfolioContent => {
  if (!isRecord(data)) {
    return defaultPortfolioContent;
  }

  const typewriterStrings =
    Array.isArray(data.typewriterStrings) && data.typewriterStrings.length > 0
      ? data.typewriterStrings.filter(isNonEmptyString)
      : defaultPortfolioContent.typewriterStrings;

  const projects = normalizeProjects(data.projects) ?? defaultPortfolioContent.projects;
  const skillset = normalizeTechItems(data.skillset) ?? defaultPortfolioContent.skillset;
  const tools = normalizeTechItems(data.tools) ?? defaultPortfolioContent.tools;
  const socialLinks = normalizeSocialLinks(data.socialLinks) ?? defaultPortfolioContent.socialLinks;

  const contact = isRecord(data.contact)
    ? {
        cvUrl: isNonEmptyString(data.contact.cvUrl)
          ? data.contact.cvUrl
          : defaultPortfolioContent.contact.cvUrl,
      }
    : defaultPortfolioContent.contact;

  return {
    typewriterStrings: typewriterStrings.length
      ? typewriterStrings
      : defaultPortfolioContent.typewriterStrings,
    projects,
    skillset,
    tools,
    socialLinks,
    contact,
  };
};

interface PortfolioContentProviderProps {
  children: ReactNode;
}

export function PortfolioContentProvider({ children }: PortfolioContentProviderProps) {
  const [content, setContent] = useState<PortfolioContent>(defaultPortfolioContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const loadContent = async () => {
      const sourceUrl = import.meta.env.VITE_PORTFOLIO_CONTENT_URL?.trim();

      if (!sourceUrl) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(sourceUrl, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Failed to load portfolio content: ${response.status}`);
        }

        const data: unknown = await response.json();

        if (!isCancelled) {
          setContent(normalizeContent(data));
          setError(null);
        }
      } catch (fetchError) {
        if (!isCancelled) {
          console.error(fetchError);
          setContent(defaultPortfolioContent);
          setError("Unable to load external portfolio content. Using default content.");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    void loadContent();

    return () => {
      isCancelled = true;
    };
  }, []);

  const value = useMemo(
    () => ({
      content,
      loading,
      error,
    }),
    [content, loading, error]
  );

  return <PortfolioContentContext.Provider value={value}>{children}</PortfolioContentContext.Provider>;
}

export function usePortfolioContent() {
  return useContext(PortfolioContentContext);
}

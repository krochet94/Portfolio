import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { IoMdRefreshCircle } from "react-icons/io";

function AboutCard() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);
      setRandomQuote(data[Math.floor(Math.random() * data.length)]);
    }
    fetchData();
  }, []);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <strong className="empasis">Full Stack Web Developer</strong> with
            proficiency in{" "}
            <strong className="empasis">MERN Stack Technology.</strong>
            <br />
            Hard-working developer with a flair for creating elegant solution in
            the least amount of time. Critical-thinker, superior learner,
            communicates full professional English, customer oriented and
            prioritizes work excellence.
            <br />
            Developed a full E-commerce website, travel agency website and
            company website for local businesses. Involved in many social media
            groups in web development.
          </p>
          <br />
          <p>
            "
            {randomQuote.text ||
              "Strive to build things that make a difference!"}
            "
          </p>
          <footer>
            {randomQuote.author || "Anonymous"}{" "}
            {randomQuote && <IoMdRefreshCircle
              onClick={() =>
                setRandomQuote(
                  quotes[Math.floor(Math.random() * quotes.length)]
                )
              }
              className="ms-2 quote-btn"
            />}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

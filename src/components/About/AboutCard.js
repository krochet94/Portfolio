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
            Motivated and detail-oriented 
            <strong className="empasis"> Full Stack Web Developer </strong>
            specialized in
            <strong className="empasis"> MERN Stack Technology</strong>,
            with a passion for building modern, scalable web applications.
            <br /><br />
            Proficient in React.js, HTML, CSS, and JavaScript, with a strong understanding of object-oriented programming principles.
            Skilled in working with the MERN stack (MongoDB, Express, React, Node.js) and building full-stack web applications.
            Proficient in integrating Firebase for real-time database and authentication.
            <br /><br />
            Experienced in agile development
            methodologies and working collaboratively in a team environment. Seeking a challenging and dynamic role where I can
            utilize my skills and continue learning and growing as a developer
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

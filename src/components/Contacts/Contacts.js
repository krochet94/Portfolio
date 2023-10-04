import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Utils/Particle";
import ReactiveButton from "../Utils/ReactiveButton.js";
import { FaHome, FaArrowAltCircleLeft } from "react-icons/fa";
import {
  MdDownload,
  MdLocationOn,
  MdOutlineEmail,
  MdLocalPhone,
} from "react-icons/md";
import SocialIcons from "../Utils/SocialIcons.js";
import emailjs from "emailjs-com";

function Contacts() {
  var error = true;
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    error = true;
    if (e.target.customer_name.value === "") {
      error = false;
      e.target.customer_name.classList.add("error");
    }
    if (
      e.target.customer_email.value.indexOf("@", 0) < 0 ||
      e.target.customer_email.value.indexOf(".", 0) < 0
    ) {
      error = false;
      e.target.customer_email.classList.add("error");
    }
    if (e.target.customer_message.value === "") {
      error = false;
      e.target.customer_message.classList.add("error");
    }
    e.preventDefault();
    if (error) {
      setSent(true);
      error = true;
      emailjs
        .sendForm(
          'service_gbef17z',
          'template_34877wa',
          form.current,
          'DdDLxu60Bl4u9mxSr'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container fluid className="page-section">
      <Particle />
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <strong className="page-heading">CONTACTS</strong>
          <Col xs={12} className="reactive-btn-container">
            <ReactiveButton
              idleText={
                <>
                  <FaArrowAltCircleLeft /> About
                </>
              }
              to="/about"
              cName="btn btn-lg reactive-btn p-3"
            />
            <ReactiveButton
              idleText={
                <>
                  Homepage <FaHome />
                </>
              }
              to="/"
              cName="btn btn-lg reactive-btn p-3"
            />
          </Col>
          <Col xs="12" className="reach-me text-white">
            <Col md="6" xs="12" className="wrapper p-4">
              <h4 className="page-heading text-start">Reach me</h4>
              <ul className="list-unstyled my-3 p-2 text-start">
                <li className="mb-3">
                  <MdLocationOn /> Cotabato City, Philippines
                </li>
                <li className="mb-3 text-wrap">
                  <MdOutlineEmail />
                  &#10240;carljasoncainaragoncillo@gmail.com
                  <br />
                  &#10240;&#10240;&#10240;krochet94@protonmail.com
                </li>
                <li className="mb-3">
                  <MdLocalPhone /> +63 917 372 2337
                </li>
              </ul>
              <SocialIcons
                ulClassName="p-0 m-1 p-2"
                liClassName="p-3 d-inline h2"
              />
              <a href="https://krochet94.github.io/Portfolio/CarlAragoncillo-CV" target="_blank" rel="noopener noreferrer">
                <div className="btn w-100 project-btn m-2 p-2">
                  <MdDownload /> DOWNLOAD CV
                </div>
              </a>
            </Col>
            <Col md="6" xs="12" className="wrapper p-4">
              <h4 className="page-heading text-start">Email me</h4>
              <form ref={form} onSubmit={sendEmail} name="form">
                <input
                  type="text"
                  name="customer_name"
                  className="form-control"
                  placeholder="Name"
                  onFocus={(e) => e.target.classList.remove("error")}
                />
                <input
                  type="text"
                  name="customer_email"
                  className="form-control"
                  placeholder="Email"
                  onFocus={(e) => e.target.classList.remove("error")}
                />
                <textarea
                  name="customer_message"
                  className="form-control"
                  rows={8}
                  placeholder="Enter your message here"
                  onFocus={(e) => e.target.classList.remove("error")}
                />
                {sent ? (
                  <input
                    type="submit"
                    value="Message Sent! Will reply to you ASAP."
                    className="w-100 btn project-btn p-2 text-wrap"
                    disabled
                  />
                ) : (
                  <input
                    type="submit"
                    value="SEND"
                    className="w-100 btn project-btn p-2"
                  />
                )}
              </form>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contacts;

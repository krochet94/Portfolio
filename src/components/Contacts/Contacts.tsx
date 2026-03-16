import { FormEvent, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaHome } from "react-icons/fa";
import { MdDownload, MdLocalPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import Particle from "../Utils/Particle";
import ReactiveButton from "../Utils/ReactiveButton";
import SocialIcons from "../Utils/SocialIcons";

function Contacts() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValid = true;
    const target = e.currentTarget;
    const elements = target.elements as HTMLFormControlsCollection & {
      customer_name: HTMLInputElement;
      customer_email: HTMLInputElement;
      customer_message: HTMLTextAreaElement;
    };

    const nameInput = elements.customer_name;
    const emailInput = elements.customer_email;
    const messageInput = elements.customer_message;

    if (nameInput.value === "") {
      isValid = false;
      nameInput.classList.add("error");
    }

    if (emailInput.value.indexOf("@") < 0 || emailInput.value.indexOf(".") < 0) {
      isValid = false;
      emailInput.classList.add("error");
    }

    if (messageInput.value === "") {
      isValid = false;
      messageInput.classList.add("error");
    }

    if (isValid && form.current) {
      setSent(true);
      emailjs
        .sendForm("service_gbef17z", "template_34877wa", form.current, "DdDLxu60Bl4u9mxSr")
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
              <SocialIcons ulClassName="p-0 m-1 p-2" liClassName="p-3 d-inline h2" />
              <a
                href="https://krochet94.github.io/Portfolio/CarlAragoncillo-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
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
                  onFocus={(event) => event.currentTarget.classList.remove("error")}
                />
                <input
                  type="text"
                  name="customer_email"
                  className="form-control"
                  placeholder="Email"
                  onFocus={(event) => event.currentTarget.classList.remove("error")}
                />
                <textarea
                  name="customer_message"
                  className="form-control"
                  rows={8}
                  placeholder="Enter your message here"
                  onFocus={(event) => event.currentTarget.classList.remove("error")}
                />
                {sent ? (
                  <input
                    type="submit"
                    value="Message Sent! Will reply to you ASAP."
                    className="w-100 btn project-btn p-2 text-wrap"
                    disabled
                  />
                ) : (
                  <input type="submit" value="SEND" className="w-100 btn project-btn p-2" />
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
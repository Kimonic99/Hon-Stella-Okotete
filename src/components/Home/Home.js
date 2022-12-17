import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/stella4.jpg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Welcome to Hon Stella Evrhuoghene Okotete's Website</strong>
              </h1>

              <p className="heading-description blockquote">
                  Hon. Stella Erhuvwuoghene Okotete possesses significant experience in public policy design and implementation, 
                  international development and general administration, public-private partnership management, business development and export financing.
              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
            <h1> Mission Statement </h1>
            <p>{" "}
            Our mission is to create a world where every woman is respected and empowered, regardless of her race, religion, socio-economic background, or political views. We strive to create a society where women are no longer limited by gender-based social and economic constraints, but instead are equal partners in the political process, able to make their voices heard and their dreams realized. We believe that by creating an environment where women are respected and valued, we can create a society that is more just and equitable for all. We are dedicated to working together to ensure that women have the same opportunities and rights as men, and that they are able to lead fulfilling lives and contribute positively to their communities. We are committed to creating a world where every woman is seen, heard, and valued.
              </p>
              <h1>Get in Touch</h1>
              <p>
                {" "}
                I seek a nation founded on justice, peace, prosperity for all, regardless of religion, region, ethnicity and class. I seek a Nigeria that is for all Nigerians.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

const cardContent = [
  {
    title: "QA Engineer (Financial cutting edge technologies)",
    substitle: "Athens",
    text:
      "We are the 1st Hub for Developers! Our motto is From Developers to Developers! Our vision is to provide real"
  },
  {
    title: "Java Software Engineer",
    substitle: "Athens",
    text:
      "We are the 1st Hub for Developers! Our motto is “From Developers to Developers”! Our vision is to provide real career opportunities"
  },
  {
    title: ".NET Developer",
    substitle: "Athens",
    text:
      "We are the 1st Hub for Developers! Our motto is “From Developers to Developers”! Our vision is to provide real career opportunities"
  }
];
const About = () => {
  return (
    <div style={{ padding: "50px 0" }}>
      <h1>Code.Career</h1>
      <p>
        Code.Career service is here to support your next career move. Feel free
        to check the open positions of our clients or contact us if you are
        looking for your next step in the ICT world.
      </p>
      <hr />
      <Row>
        {cardContent.map(c => (
          <Col key={c.title}>
            <Card>
              <CardBody>
                <CardTitle>
                  <strong>{c.title}</strong>
                </CardTitle>
                <CardSubtitle>
                  <i>{c.substitle}</i>
                </CardSubtitle>
                <CardText>{c.text}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default About;

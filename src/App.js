// src/App.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import EventCard from "./EventCard";

function App() {
  const cardData = [
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 5",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 6",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 7",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 8",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 9",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 10",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 11",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 12",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      <Container className="mt-5 mb-5 flex-grow-1">
        <h1 className="text-center">Gift Wishlist</h1>
        <Row className="mt-4">
          {cardData.map((card, index) => (
            <Col md={4} key={index} className="mb-4">
              <EventCard
                image={card.image}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <FooterComponent />
    </div>
  );
}

export default App;

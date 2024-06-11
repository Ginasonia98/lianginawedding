import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import EventCard from "./EventCard";
import ReactPlayer from "react-player";
import Banner from "./Banner"; // Import Banner component

function App() {
  const playerRef = useRef(null);

  useEffect(() => {
    const startAudio = () => {
      const internalPlayer = playerRef.current?.getInternalPlayer();
      if (internalPlayer?.playVideo) {
        internalPlayer.playVideo();
      }
    };

    const handlePlayerReady = () => {
      if (playerRef.current) {
        playerRef.current.seekTo(14);
        startAudio();
      }
    };

    // Add a delay to ensure the player is ready
    const timeoutId = setTimeout(handlePlayerReady, 1000);

    // Add event listener to handle autoplay block
    window.addEventListener("click", startAudio);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("click", startAudio);
    };
  }, []);

  const cardData = [
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event Title 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: "#",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      <Banner /> {/* Place Banner component below NavbarComponent */}

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

      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=1WCIrw85zbQ"
        playing
        controls
        onReady={() => playerRef.current.seekTo(14)}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default App;

import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import EventCard from "./EventCard";
import ReactPlayer from "react-player";
import { db } from "./firebaseConfig";
import { cardData } from "./constants";
import { addDoc, collection, getDocs } from "firebase/firestore";

const App = () => {
  const productsRef = collection(db, "products");
  const playerRef = useRef(null);
  const [products, setProducts] = useState([]);

  /**@function addProduct manually add products to firebase*/
  const addProduct = async () => {
    await cardData.map(async (data, _) => {
      await addDoc(productsRef, data);
    });
  };

  const getProducts = async () => {
    const data = await getDocs(productsRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const startAudio = () => {
      const internalPlayer = playerRef.current?.getInternalPlayer();
      if (internalPlayer?.playVideo) {
        internalPlayer.playVideo();
      }
    };

    startAudio();

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

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />

      <Container className="mt-5 mb-5 flex-grow-1">
        <h1
          className="text-center"
          style={{ color: "#FF204E", textDecoration: "underline" }}
        >
          <a
            href="https://docs.google.com/spreadsheets/d/12etNzd3QGozjJpWvQnOEpJSyvRs_p6LMHt1b5-AwA_o/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF204E", textDecoration: "underline" }}
          >
            Gift Wishlist
          </a>
        </h1>
        {products.length !== 0 && (
          <Row className="mt-4">
            {products.map((card, index) => (
              <Col md={4} key={index} className="mb-4">
                <EventCard card={card} />
              </Col>
            ))}
          </Row>
        )}
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
};

export default App;

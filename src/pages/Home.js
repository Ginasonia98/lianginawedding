import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import EventCard from "../components/EventCard";
import ReactPlayer from "react-player";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const productsRef = collection(db, "products");
  const playerRef = useRef(null);
  const [products, setProducts] = useState([]);

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
        <h1 className="text-center" style={{ color: "#FF204E" }}>
          Gift Wishlist
        </h1>
        {products.length !== 0 && (
          <Row className="mt-4">
            {products.map((card, index) => (
              <Col md={4} lg={3} key={index} className="mb-4">
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
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/6281398498112"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default Home;

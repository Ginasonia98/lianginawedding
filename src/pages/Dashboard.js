import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import GiftModal from "../components/GiftModal";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "../components/EventCard";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
const Dashboard = () => {
  const giftsRef = collection(db, "products");
  const [showModal, setShowModal] = useState(false);
  const [gifts, setGifts] = useState([]);
  const [gift, setGift] = useState({
    image: "",
    title: "",
    text: "",
    link: "",
    clickCount: 0,
    confirmCount: 0,
  });

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const getProducts = async () => {
    const data = await getDocs(giftsRef);
    setGifts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleSave = async (newGift) => {
    await addDoc(giftsRef, newGift);
    await getProducts();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGift((prevGift) => ({ ...prevGift, [name]: value }));
  };

  const handleSubmit = () => {
    handleSave(gift);
    handleClose();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="mt-5 mb-5 flex-grow-1">
        <Button variant="primary" onClick={handleOpen}>
          Add New Gift
        </Button>
        {gifts.length !== 0 && (
          <Row className="mt-4">
            {gifts.map((card, index) => (
              <Col md={4} lg={3} key={index} className="mb-4">
                <EventCard card={card} location={"dashboard"} />
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <GiftModal
        show={showModal}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        gift={gift}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Dashboard;

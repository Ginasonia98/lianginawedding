import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import GiftModal from "../components/GiftModal";
import { Container, Row, Col } from "react-bootstrap";
import EventCard from "../components/EventCard";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
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
  const [updatedId, setUpdatedId] = useState("");

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const getProducts = useCallback(async () => {
    const data = await getDocs(giftsRef);
    setGifts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setGift({
      image: "",
      title: "",
      text: "",
      link: "",
      clickCount: 0,
      confirmCount: 0,
    });
  }, [giftsRef]);

  const updateGift = useCallback(async () => {
    await updateDoc(doc(db, "products", updatedId), gift).then(async () => {
      await getProducts();
    });
  }, [getProducts, gift, updatedId]);

  const handleSave = async (newGift) => {
    if (updatedId) {
      await updateGift();
    } else {
      await addDoc(giftsRef, newGift);
    }
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
  const deleteGift = async (id) => {
    await deleteDoc(doc(db, "products", id)).then(async () => {
      await getProducts();
    });
  };
  const showEditModal = (data) => {
    setUpdatedId(data.id);
    setGift(data);
    setTimeout(() => {
      handleOpen();
    }, 1000);
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
                <EventCard
                  card={card}
                  location={"dashboard"}
                  deleteData={deleteGift}
                  updateData={showEditModal}
                />
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

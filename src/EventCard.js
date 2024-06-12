import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import GiftConfirmation from "./GiftConfirmation";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const EventCard = ({ card }) => {
  const { image, title, text, link } = card;
  const [showModal, setShowModal] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [formData, setFormData] = useState({
    senderName: "",
    address: "",
    trackingNumber: "",
    giftMessage: "",
    product: card.title,
  });
  const [showAlert, setShowAlert] = useState(false);
  const docRef = doc(db, "receipts", card.id);

  const getDocById = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setReceipt(data.trackingNumber);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getDocById();
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "receipts", card.id), formData);
    setShowAlert(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  return (
    <>
      <Card className="h-100">
        <div style={{ height: "200px", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ overflowY: "auto" }}>{text}</Card.Text>
          {!receipt && (
            <div className="mt-auto">
              <Button variant="danger" href={link}>
                Hadiahkan ke Lian dan Gina
              </Button>
              <Button className="mt-2" variant="info" onClick={handleShow}>
                Konfirmasi Pengirim
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>

      <GiftConfirmation
        show={showModal}
        handleClose={handleClose}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showAlert={showAlert}
      />
    </>
  );
};

export default EventCard;

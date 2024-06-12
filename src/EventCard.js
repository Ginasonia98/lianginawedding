import React from "react";
import { Card, Button } from "react-bootstrap";

const EventCard = ({ image, title, text, link }) => {
  const handleButtonClick = () => {
    const userConfirmed = window.confirm("Silakan cek pada keterangan gift wishlist. Apakah Anda ingin melanjutkan?");
    if (userConfirmed) {
      window.open(link, "_blank");
    }
  };

  return (
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
        <div className="mt-auto">
          <Button variant="danger" onClick={handleButtonClick}>
            Hadiahkan ke Lian dan Gina
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;


import React from "react";
import {
  Modal,
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

const GiftConfirmationModal = ({
  show,
  handleClose,
  formData,
  handleChange,
  handleSubmit,
  showAlert,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Konfirmasi Pengiriman Hadiah</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="12">
              {showAlert && (
                <Alert variant="success">
                  Pengiriman dari <strong>{formData.senderName}</strong> dengan
                  No Resi: <strong>{formData.trackingNumber}</strong> telah
                  dikonfirmasi!
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formSenderName">
                  <Form.Label>Nama Pengirim</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Nama Pengirim"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-2" controlId="formAddress">
                  <Form.Label>Alamat Penerima</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Alamat Penerima"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-2" controlId="formTrackingNumber">
                  <Form.Label>No Resi Pengiriman</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan No Resi"
                    name="trackingNumber"
                    value={formData.trackingNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mt-2" controlId="formGiftMessage">
                  <Form.Label>Pesan Hadiah</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Masukkan Pesan Hadiah"
                    name="giftMessage"
                    value={formData.giftMessage}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button className="mt-2" variant="primary" type="submit">
                  Konfirmasi
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default GiftConfirmationModal;

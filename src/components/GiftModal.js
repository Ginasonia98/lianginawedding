// src/components/GiftModal.js
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const GiftModal = ({ show, handleClose, handleSubmit, gift, handleChange }) => {
  console.log({ gift });
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Gift</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={gift.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </Form.Group>
          <Form.Group className="mt-2" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={gift.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mt-2" controlId="formText">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="text"
              value={gift.text}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </Form.Group>
          <Form.Group className="mt-2" controlId="formLink">
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              name="link"
              value={gift.link}
              onChange={handleChange}
              placeholder="Enter link"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="mt-2">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GiftModal;

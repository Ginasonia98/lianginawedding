// src/components/ReceiptsTable.js
import React from "react";
import { Table, Button } from "react-bootstrap";

const ReceiptsTable = ({ receipts, handleDelete }) => {
  return (
    <div>
      <h2>Receipts</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sender Name</th>
            <th>Address</th>
            <th>Tracking Number</th>
            <th>Gift Message</th>
            <th>Product</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt, index) => (
            <tr key={index}>
              <td>{receipt.senderName}</td>
              <td>{receipt.address}</td>
              <td>{receipt.trackingNumber}</td>
              <td>{receipt.giftMessage}</td>
              <td>{receipt.product}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(receipt.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReceiptsTable;

// src/pages/Receipts.js
import React, { useState, useEffect } from "react";
import ReceiptsTable from "../components/ReceiptsTable";
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Container } from "react-bootstrap";

const Receipts = () => {
  const receiptsRef = collection(db, "receipts");
  const [receipts, setReceipts] = useState([]);
  const getReceipts = async () => {
    const data = await getDocs(receiptsRef);
    setReceipts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getReceipts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "receipts", id)).then(async () => {
      await getReceipts();
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="mt-5 mb-5 flex-grow-1">
        <ReceiptsTable receipts={receipts} handleDelete={handleDelete} />
      </Container>
    </div>
  );
};

export default Receipts;

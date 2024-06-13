import React from "react";
import { Container, Button } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="text-white text-center py-3 mt-5" style={{ backgroundColor: 'pink' }}>
      <Container>
        <p>&copy; 2024 Lian & Gina Wedding. All Rights Reserved.</p>
        <Button
          href="https://zeinvitation.com/w/lian-gina/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: '#FFAA80', borderColor: '#FFAA80' }}
        >
          Go To Invitation Wedding Card
        </Button>
      </Container>
    </footer>
  );
};

export default FooterComponent;




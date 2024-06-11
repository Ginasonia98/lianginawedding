import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/AKA02493.jpg"
          alt="First slide"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/AKA02516.jpg"
          alt="Second slide"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/AKA02749.jpg"
          alt="Third slide"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousels.css";
import Carousel1 from "../../Assets/Carousel1.jpg";
import Carousel2 from "../../Assets/Carousel2.jpg";
import Carousel3 from "../../Assets/Carousel3.jpg";
const Carousels = () => {
  return (
    <>
      <Carousel className="Carousel">
        <Carousel.Item>
          <img
            className="d-block w-10 Carousel__Image"
            src={Carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-10 Carousel__Image"
            src={Carousel2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-10 Carousel__Image"
            src={Carousel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;

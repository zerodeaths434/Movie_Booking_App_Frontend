import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./HomeBackgroundCarousel.css";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import phimg1 from "../../assets/images/phimg1.jpg";
import phimg2 from "../../assets/images/phimg2.jpg";
import phimg3 from "../../assets/images/phimg3.jpg";
import phimg4 from "../../assets/images/phimg4.jpg";
import phimg5 from "../../assets/images/phimg5.jpg";
import phimg6 from "../../assets/images/phimg6.jpg";

const images = [
  {
    id: 1,
    img: img1,
    alt: "A movie",
  },
  {
    id: 2,
    img: img2,
    alt: "A movie",
  },
  {
    id: 3,
    img: img3,
    alt: "A movie",
  },
  {
    id: 4,
    img: img4,
    alt: "A movie",
  },
  {
    id: 5,
    img: img5,
    alt: "A movie",
  },
];

const phone_images = [
  {
    id: 1,
    img: phimg1,
    alt: "A movie",
  },
  {
    id: 2,
    img: phimg2,
    alt: "A movie",
  },
  {
    id: 3,
    img: phimg3,
    alt: "A movie",
  },
  {
    id: 4,
    img: phimg4,
    alt: "A movie",
  },
  {
    id: 5,
    img: phimg5,
    alt: "A movie",
  },
  {
    id: 6,
    img: phimg6,
    alt: "A movie",
  },
];

function HomeBackgroundCarousel() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleScreenWidth = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth, false);
  }, [screenSize]);

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} className="slider">
      {screenSize > 800
        ? images.map((image) => {
            return (
              <div className="img-container" key={image.id}>
                <div className="overlay"></div>
                <img key={image.id} src={image.img} alt={image.alt} />
              </div>
            );
          })
        : phone_images.map((image) => {
            return (
              <div className="img-container" key={image.id}>
                <div className="overlay"></div>
                <img key={image.id} src={image.img} alt={image.alt} />
              </div>
            );
          })}
    </Slider>
  );
}

export default HomeBackgroundCarousel;

/* ; <div className="seediv"></div>*/

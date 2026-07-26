import { useState, useEffect } from "react";
import "./heroCarousel.css";
import heroImg1 from "../assets/image1.jpg";
import heroImg3 from "../assets/image3.jpg";
import heroImg2 from "../assets/image4.jpg";
import heroImg4 from "../assets/image2copy.jpg";

const images = [{ src: heroImg1 }, { src: heroImg3 }, { src: heroImg4 }];

function HeroCarousel({ interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="sticky-hero-photo" aria-hidden="true">
      {images.map((img, i) => (
        <div
          key={img.src}
          className={`hero-slide hero-slide-${i + 1}${i === index ? " hero-slide-active" : ""}`}
          style={{ backgroundImage: `url(${img.src})` }}
        />
      ))}
    </div>
  );
}

export default HeroCarousel;

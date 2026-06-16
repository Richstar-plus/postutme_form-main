import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.avif";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-slideshow">
        <img src={image1} alt="hero 1" className="hero-image slide slide-1" />
        <img src={image2} alt="hero 2" className="hero-image slide slide-2" />
        <img src={image3} alt="hero 3" className="hero-image slide slide-3" />
      </div>
    </div>
  );
}

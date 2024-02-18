import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
const SlickCarousel = () => {
  const [people, setPeople] = useState(list);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people.map((p) => {
          const { name, image, id, quote, title } = p;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
export default SlickCarousel;

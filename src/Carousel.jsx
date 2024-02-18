import { useState } from "react";
import { shortList, longList, list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {
    setCurrentPerson((c) => {
      const result = (c - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((c) => {
      const result = (c + 1) % people.length;
      return result;
    });
  };
  return (
    <section className="slider-container">
      {" "}
      {people.map((p, pIndex) => {
        const { name, image, id, quote, title } = p;
        return (
          <article
            className="slide next-slide"
            style={{
              transform: `translateX(${100 * (pIndex - currentPerson)}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronsLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronsRight />
      </button>
    </section>
  );
};

export default Carousel;

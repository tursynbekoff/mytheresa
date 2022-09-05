import React from "react";
import { useEffect, useState, } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "./Carousel.jsx";

import ErrorBoundary from "./ErrorBoundary.jsx";

const Laptop = () => {
  const [laptop, setLaptop] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    requestLaptop();
  }, [searchParams]);

  async function requestLaptop() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());

    setLaptop(json.laptops);
  }

  let data = laptop;

  let params = searchParams.get("id");
  const element = data[params];

  return (
    
      typeof element === 'object' && (
        <div className="laptop">
          <Carousel images={element.image}/>
          <article className="el">
            <h2 className="el__title title">
              {element.name}
            </h2>
            <p className="el__text text">
              {element.type},
              {element.cpuModel},
              {element.ramSize},
              {element.memorySize}
            </p>
    
            <p className="el__price price">
              {element.price} Euro
            </p>
            <button>
              add to basket
            </button>
          </article>
    
        </div>
      )
  );
}

const WrappedDetails = () => {
  // const params = useParams();

  return (
    <ErrorBoundary>
      <Laptop />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

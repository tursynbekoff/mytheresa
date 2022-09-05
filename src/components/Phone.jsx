import React from "react";
import { useEffect, useState, } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "./Carousel.jsx";

import ErrorBoundary from "./ErrorBoundary.jsx";

const Phone = () => {
  const [phone, setPhone] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    requestPhone();
  }, [searchParams]);

  async function requestPhone() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());

    setPhone(json.phones);
  }

  let data = phone;

  let params = searchParams.get("id");
  const element = data[params];

  return (
    
      typeof element === 'object' && (
        <div className="phone">
          <Carousel images={element.image}/>
          <article className="el">
            <h2 className="el__title title">
              {element.name}
            </h2>
            <p className="el__text text">
              {element.type},{" "}
              {element.OStype},{" "}
              {element.screenSize},{" "}
              {element.memorySize},{" "}
              {element.weight}
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
      <Phone />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

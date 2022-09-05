import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import React from "react";

import ErrorBoundary from "./ErrorBoundary.jsx";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    requestLaptops();
  }, []);

  async function requestLaptops() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());

    setLaptops(json.laptops);
  }

  const data = laptops;

  return (
    <>
    <div className="laptops">

      <div className="laptops__list list">
      
        {Object.keys(data).map((item, index) => (
          // <Link to={`/laptops/${data[item].id}`} key={`index-${index}`} className="list__el el">
            <Link to={`/laptop?id=${index}`} key={`index-${index}`} className="list__el el">
            <img
              data-testid={`thumbnail${index}`}
              key={data[item].image[0]}
              src={data[item].image[0]}
            />
            <article>
              <h2 className="el__title title">
                {data[item].name}
              </h2>
              <p className="el__text text">
                {data[item].type},{` `}
                {data[item].cpuModel},{` `}
                {data[item].ramSize},{` `}
                {data[item].memorySize}
              </p>

              <p className="el__price price">
                {data[item].price} Euro
              </p>
              <button>
                add to basket
              </button>
            </article>
          </Link>
        ))}

      </div>
    </div>
    <Outlet/>
    </>
  );
  
}

const WrappedDetails = () => {
  const params = useParams();

  return (
    <ErrorBoundary>
      <Laptops params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

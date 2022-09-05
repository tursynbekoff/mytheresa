import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import React from "react";

import ErrorBoundary from "./ErrorBoundary.jsx";

const Keyboards = () => {
  const [keyboards, setKeyboards] = useState([]);

  useEffect(() => {
    requestkeyboards();
  }, []);

  async function requestkeyboards() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());

    setKeyboards(json.keyboards);
  }

  const data = keyboards;

  return (
    <>
    <div className="keyboards">

      <div className="keyboards__list list">
      
        {Object.keys(data).map((item, index) => (
          <Link to={`/keyboard?id=${index}`} key={`index-${index}`} className="list__el el">
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
                {data[item].keyType},{` `}
                {data[item].connection},{` `}
                {data[item].weight}
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
      <Keyboards params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

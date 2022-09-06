import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary.jsx";

const Laptops = () => {
  const [cart, setCart] = useState([]);
  const [allProd, setProd] = useState([]);
  const [laptops, setLaptop]= useState([]);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    requestProds();
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart)
    };
  }, []);

  let localCart = localStorage.getItem("cart");

  const addItem = (item) => {
    let cartCopy = [...cart, item]
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  }

  async function requestProds() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());
    setLaptop(json.laptops);
    setProd(json.allProd);
  }

  const data = laptops;

  return (
    <div className="laptops">
      <div className="laptops__list list">
      
        {Object.keys(data).map((item, index) => (
            <Link to={`/laptop?id=${item}`} key={`index-${index}`} className="list__el el">
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
              <button onClick={(evt) => {
                evt.preventDefault()
                addItem(data[item].id)
                forceUpdate()
              }}>
                add to basket
              </button>
            </article>
          </Link>
        ))}

      </div>
    </div>
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

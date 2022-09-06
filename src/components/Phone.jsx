import React from "react";
import { useEffect, useState, } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "./Carousel.jsx";

import ErrorBoundary from "./ErrorBoundary.jsx";

const Phone = () => {
  const [phone, setPhone] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    requestPhone();
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart)
    };
  }, []);

  async function requestPhone() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());

    setPhone(json.phones);
  }

  let localCart = localStorage.getItem("cart");

  const addItem = (item) => {
    let cartCopy = [...cart, item]
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
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
            <button onClick={(evt) => {
              evt.preventDefault()
              addItem(element.id)
            }}>
              add to basket
              <img src="https://res.cloudinary.com/tursynbekoff/image/upload/v1662489793/phone-cart.svg"/>
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

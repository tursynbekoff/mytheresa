import React, { useEffect, useState, } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "./Carousel.jsx";

import ErrorBoundary from "./ErrorBoundary.jsx";

const Keyboard = () => {
  const [keyboard, setKeyboard] = useState([]);
  const [searchParams] = useSearchParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    requestKeyboard();
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

  async function requestKeyboard() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());

    setKeyboard(json.keyboards);
  }

  let data = keyboard;

  let params = searchParams.get("id");
  const element = data[params];

  return (
    typeof element === 'object' && (
      <div className="keyboard">
        <Carousel images={element.image}/>
        <article className="el">
          <h2 className="el__title title">
            {element.name}
          </h2>
          <p className="el__text text">
            {element.keyType},{" "}
            {element.keyTypeColor},{" "}
            {element.connection},{" "}
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
            {" "}
            <img src="https://res.cloudinary.com/tursynbekoff/image/upload/v1662489237/cart-add.svg"/>
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
      <Keyboard />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Context from "./Context.jsx";
import Img from "./Img.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

const Keyboards = () => {
  const message = useContext(Context);
  const [cart, setCart] = useState([]);
  const [keyboards, setKeyboards] = useState([]);

  useEffect(() => {
    requestkeyboards();
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart)
    };
  }, []);

  useEffect(() => {
    setCart(message);
  }, [message]);

  let localCart = localStorage.getItem("cart");

  const addItem = (item) => {
    let cartCopy = [...cart, item]
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  }

  async function requestkeyboards() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());

    setKeyboards(json.keyboards);
  }

  const data = keyboards;

  return (
    <div className="keyboards">
      <div className="keyboards__list list">
      
        {Object.keys(data).map((item, index) => (
          <Link to={`/keyboard?id=${index}`} key={`index-${index}`} className="list__el el">
            <Img
              alt={data[item].name}
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
              <button onClick={(evt) => {
                evt.preventDefault()
                addItem(data[item].id)
              }}>
                add to basket
                {" "}
                <img src="https://res.cloudinary.com/tursynbekoff/image/upload/v1662489237/cart-add.svg"/>
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
      <Keyboards params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";

const Laptops = () => {
  const [cart, setCart] = useState([]);
  const [shopCart, setshopCart] = useState([]);
  const [allProd, setProd] = useState([]);
  const [laptops, setLaptop]= useState([]);

  useEffect(() => {
    requestProds();
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart)
    };
  }, [shopCart]);

  let localCart = localStorage.getItem("cart");

  const addToCart = (item) => {
    addItem(item);
    setshopCart((currentCart) => [...currentCart, item]);
  };

  const addItem = (item) => {
    let cartCopy = [...cart, item]
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  }

  const removeFromCart = (item) => {
    removeFromItem(item);
    setshopCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => {
        return cartItem === item.id
      });

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const removeFromItem = (item) => {
    let cartCopy = [...cart];
    let newVal = () => {
      const indexOfItemToRemove = cartCopy.findIndex((cartItem) => {
        console.log(cartItem, item.id);
        return cartItem === item.id
      });
  
      if (indexOfItemToRemove === -1) {
        return cartCopy;
      }

      return [
        ...cartCopy.slice(0, indexOfItemToRemove),
        ...cartCopy.slice(indexOfItemToRemove + 1),
      ];
    }

    cartCopy = newVal();
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  }

  const clearAll = () => {
    let cartCopy = [];
    setCart(cartCopy);
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  } 
 
  const amountOfItems = (id) => cart.filter((item) => {
    return item === id 
  }).length;

  const crtTotal =  () => {
    let totalVal = 0;
    allProd.map((item) => (
        (amountOfItems(item.id) > 0) && (
          totalVal = totalVal + (amountOfItems(item.id) * item.price) 
        )
    ))
    return totalVal;
  };

  const listItemsInCart = () => allProd.map((item) => (
    <div key={item.id}>
      {
        (amountOfItems(item.id) > 0) && (
          <div>
            <span>({amountOfItems(item.id)} x ${item.price}) {`${item.name}`}</span>
          <button type="submit" onClick={() =>{ removeFromCart(item)}}>Remove</button>
          </div>
        )
      }
    </div>
  ));

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
      <div>CART</div>
      <div>{listItemsInCart() || incrementNum() }</div>
      <div>Total: ${crtTotal()}</div>
      <div>
        <button onClick={() => {
          setshopCart([])
          clearAll()
        }}>Clear</button>
      </div>
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
                addToCart(data[item].id)
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

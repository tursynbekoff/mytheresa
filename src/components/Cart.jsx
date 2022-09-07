import React, { useState, useEffect  } from "react";
import Modal from "./modal.jsx";

const Cart = ({ cartMessage }) => {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [allProd, setProd] = useState([]);

  useEffect(() => {
    requestProds();
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart)
    };
    cartMessage(cart)
  }, [modal]);

  let localCart = localStorage.getItem("cart");

  const removeFromItem = (item) => {
    let cartCopy = [...cart];
    let newVal = () => {
      const indexOfItemToRemove = cartCopy.findIndex((cartItem) => {
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
    return totalVal.toFixed(2);;
  };

  const listItemsInCart = () => allProd.map((item) => (
      
    (amountOfItems(item.id) > 0) && (
      <div>
        <span>({amountOfItems(item.id)} x {item.price} Euro ) {`${item.name}`}</span>
        <button className="remove" type="submit" onClick={() =>{ removeFromItem(item)}}>Remove item</button>
      </div>
    )
      
  ));

  async function requestProds() {
    const res = await fetch(
      `https://tursynbekoff.github.io/proj_api/src/db.json`
    );
    const json = (await res.json());
    setProd(json.allProd);
  }

  function toggle() {
    setModal(!modal);
  }

  return (
    <>
      <button className="nav__button button" onClick={() =>{toggle()}}>
          <img src="https://res.cloudinary.com/tursynbekoff/image/upload/v1662485572/cart.svg" />
      </button>

      {modal ? (
        <Modal>
          <div>CART</div>
          <div>{listItemsInCart() }</div>
          <div>Total: {crtTotal()} Euro</div>
          <div>
            <button className="clear" onClick={() => {
              clearAll()
            }}>Clear all</button>
          </div>
          <button onClick={toggle}>close</button>
        </Modal>
      ) : null}
    </>
  )
}

export default Cart;

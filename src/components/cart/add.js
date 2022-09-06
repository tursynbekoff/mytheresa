import { useEffect, useState, } from "react";

const addItem = (item) => {

  let [cart, setCart] = useState([]);
  let localCart = localStorage.getItem("cart");

  useEffect(() => {

    localCart = JSON.parse(localCart);

    if (localCart) setCart(localCart)
    
  }, [])

  console.log(item);

  let cartCopy = [...cart];

  let {ID} = item;
  
  let existingItem = cartCopy.find(cartItem => cartItem.ID == ID);
  
  if (existingItem) {
      existingItem.quantity += item.quantity 
  } else {
    cartCopy.push(item)
  }
  
  setCart(cartCopy)

  let stringCart = JSON.stringify(cartCopy);
  localStorage.setItem("cart", stringCart)
  
}

export default addItem;
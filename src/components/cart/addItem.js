import React from "react";
import { useEffect, useState, } from "react";

export const Cart = () => {
  let [cart, setCart] = useState([])
  
  let localCart = localStorage.getItem("cart");

  
  useEffect(() => {

    localCart = JSON.parse(localCart);

    if (localCart) setCart(localCart)
    
  }, [])

  
  return <div></div>
}

export const addItem = (item) => {
  let [cart, setCart] = useState([])
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

export const editItem = (itemID, amount) => {
  
  let cartCopy = [...cart]
  
  let existentItem = cartCopy.find(item => item.ID == itemID);
  
  if (!existentItem) return
  
  existentItem.quantity += amount;
  
  if (existentItem.quantity <= 0) {

    cartCopy = cartCopy.filter(item => item.ID != itemID)
  }
  
  setCart(cartCopy);
  
  let cartString = JSON.stringify(cartCopy);
  localStorage.setItem('cart', cartString);
}


export const removeItem = (itemID) => {
  let cartCopy = [...cart]
  
  cartCopy = cartCopy.filter(item => item.ID != itemID);

  setCart(cartCopy);
  
  let cartString = JSON.stringify(cartCopy)
  localStorage.setItem('cart', cartString)
}
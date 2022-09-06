export default removeItem = (itemID) => {
  //create cartCopy
  let cartCopy = [...cart]
  
  cartCopy = cartCopy.filter(item => item.ID != itemID);
  
  //update state and local
  setCart(cartCopy);
  
  let cartString = JSON.stringify(cartCopy)
  localStorage.setItem('cart', cartString)
}
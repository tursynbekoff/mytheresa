export default editItem = (itemID, amount) => {
  
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

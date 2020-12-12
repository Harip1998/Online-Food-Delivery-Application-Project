const initialState = {
    cart: []
  };
   
  const Cart_Reducer = (state = initialState, action) => {
   
      let cart = state.cart;
   
      switch(action.type) {
   
          case 'ADD_TO_CART':
   
              cart.push(action.payload);
   
              return {
                  ...state,
                  cart: cart
              };
          case 'UPDATE_CART_QUANTITY':
   
              let product = cart.find(product => product.item.id == action.payload.itemId);
   
              let newCart = cart.filter(product => product.item.id != action.payload.itemId);
   
              product.quantity = action.payload.quantity;
   
              newCart.push(product);
   
              return {
                  ...state,
                  cart: newCart
              };
   
          case 'REMOVE_FROM_CART':
              return {
                  ...state,
                  cart: cart.filter(product => product.item.id != action.payload.itemId)
              };
          default:
              return state;
      }
  };
   
  export default Cart_Reducer;
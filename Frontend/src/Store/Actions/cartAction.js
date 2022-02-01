export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      item,
      quantity: 1,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      itemId: itemId,
    },
  };
};

export const updateCartQuantity = (itemId, quantity) => {
  return {
    type: "UPDATE_CART_QUANTITY",
    payload: {
      itemId,
      quantity: quantity,
    },
  };
};

import { ADDPRODUCT, ADDTOCART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART, UPDATE_CART} from './actionType.js'

export const addproduct=(product)=>{
   return{
     type:ADDPRODUCT,
     payload:product
   }
}
// action.js
export const addToCart = (item) => ({
  type: ADDTOCART,
  payload:item// Initialize cart quantity separately
});


export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId 
    };
};

export const increaseQuantity = (productId) => ({
    type: INCREASE_QUANTITY,
    payload: productId,
  });

  export const decreaseQuantity = (productId) => ({
    type: DECREASE_QUANTITY,
    payload: productId,
  });

  export const updateCart = (cart) => ({
    type: UPDATE_CART,
    payload: cart,
  });
import { ADDPRODUCT, ADDTOCART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART, UPDATE_CART } from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };

      case ADDTOCART: {
        
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
  
        if (existingItem) {
          // If the item already exists, increase the cartQuantity by 1
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === action.payload.id
                ? { ...item, cartQuantity: item.cartQuantity + 1 }
                : item
            )
          };
        } else {
          // If item is new, add it to cartItems with an initial cartQuantity of 1
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, cartQuantity: 1 }]
          };
          
        }
       
      }
  
      case INCREASE_QUANTITY: {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload
              ? { ...item, cartQuantity: item.cartQuantity + 1 }
              : item
          )
        };
      }
  
      case DECREASE_QUANTITY: {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload && item.cartQuantity > 1
              ? { ...item, cartQuantity: item.cartQuantity - 1 }
              : item
          )
        };
      }
  
      case REMOVE_FROM_CART: {
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
      }

    case UPDATE_CART:
      return {
        ...state,
        cartItems: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

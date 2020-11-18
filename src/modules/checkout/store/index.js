import React, {
  useContext,
  createContext,
} from 'react';

// INICIAL_STATE
import { inicial_State_Product } from './products/productReducer';
import { inicial_State_Cart } from './cart/cartReducer';

// SAGA USE REDUCERS

// REDUCERS
import { productReducer } from './products';
import { cartReducer } from './cart/cartReducer';

// ACTIONS
import { useGetProduct } from './products';
import { addToCart, delToCart, sumAmount, updateCart } from './cart/actions';
import { createSharedState } from './sharedState';
import { useReducer } from 'react';

// STATE
const inicial_State = {
  stock: inicial_State_Product,
  cart: inicial_State_Cart
};

const reducers = {
  productReducer,
  cartReducer
}

const storeProduct = createContext(productReducer);
const storeCart = createContext(cartReducer);

const { Provider } = storeProduct;

export {
  addToCart,
  delToCart,
  updateCart,
  useGetProduct,
};

export const useCartState = () => {
  const contextValue = useContext(storeCart);

  return contextValue;
}

export const useProductState = () => {
  const contextValue = useContext(storeProduct);

  return contextValue;
}

const useCart = createSharedState(cartReducer, inicial_State_Cart);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, inicial_State_Product);
  const [state2, dispatch2] = useCart();

  const contextValue = [{stock: state, dispatch},{purchase: state2, dispatch2}]

  return (
  <Provider value={[
    contextValue, {
    addToCart,
    delToCart,
    updateCart,
    sumAmount
  }]}>
    {children}
  </Provider>);
};

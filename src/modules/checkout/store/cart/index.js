import React from 'react';
import useStoreReducer from '../../hooks/userStore';
import { cartReducer, inicial_State_Cart } from './cartReducer';

export const useCart = () => {
  const [state, dispatch] = useStoreReducer(cartReducer, inicial_State_Cart);

  return [state, dispatch];
}

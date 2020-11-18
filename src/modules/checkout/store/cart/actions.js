import {
  GET_CART_ADD ,
  GET_CART_DELETE,
  GET_CART_UPDATE,
  SET_CART_SUM_TOTAL
} from './cartReducer';

export const addToCart = (item, dispatch) => {
  dispatch({ type: GET_CART_ADD, payload: item })

  return;
};

export const sumAmount = (total, dispatch) => {
  if (total) {
  //  dispatch({type: SET_CART_SUM_TOTAL, payload: total })
  }
}

export const delToCart = (item, dispatch) => {
  dispatch({ type: GET_CART_DELETE, payload: item })

  return;
};

export const updateCart = (item, dispatch) => {
  dispatch({ type: GET_CART_UPDATE, payload: item })

  return;
};

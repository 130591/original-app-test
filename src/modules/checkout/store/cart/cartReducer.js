import React from 'react';

export const GET_CART_ADD = "GET_CART_ADD";
export const GET_CART_DELETE = "GET_CART_DELETE";
export const GET_CART_UPDATE = "GET_CART_UPDATE";
export const SET_CART_SUM_TOTAL = "SET_CART_SUM_TOTAL";

const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const LOADING = 'LOADING';


export const inicial_State_Cart = {
  order: [],
  total: 0,
  status: null,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case GET_CART_ADD: {
      return {
        ...state,
        order: state.order.concat(action.payload),
        status: LOADING
      };
    }
    case SET_CART_SUM_TOTAL: {
      return {
        ...state,
        total: action.payload
      }
    }
    case GET_CART_DELETE: {
      console.log(state, action)
      return {
        order: state.order.filter(product => product.id !== action.payload),
        status: FAILURE
      };
    }
    case GET_CART_UPDATE: {
      return {
        ...state,
        order: [...state.order, state.order.filter(product => {
          if (product.id === action.payload.id) {
            return action.payload;
          }
        }
        )],
        status: SUCCESS,
      };
    }
  }
}

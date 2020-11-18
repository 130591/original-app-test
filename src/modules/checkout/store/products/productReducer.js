import React from 'react';

export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const LOADING = 'LOADING';

export const inicial_State_Product = {
  products: [],
  status: null,
  message: null
};

export function productReducer(state = inicial_State_Product, action) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST: {
      return {
        ...state,
        status: LOADING
      };
    }
    case GET_PRODUCT_FAILURE: {
      console.log('failure', action, state)
      return {
        ...state,
        message: action.payload.error,
        products: action.payload.data,
        status: FAILURE,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        status: SUCCESS,
      };
    }
  }
}

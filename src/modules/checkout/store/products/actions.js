import React, { useEffect } from 'react';

import { useFetch } from '../../../../core/resources/http';
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE
} from './productReducer';

export const useGetProduct = (dispatch) => {
  const [response, error] = useFetch({url: 'products'});

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_REQUEST });

    if (response && response.statusCode === 200) {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.body });
      console.log('dentro', response, dispatch)
    } else  {
      dispatch({ type: GET_PRODUCT_FAILURE, payload: { data: [] , message: error || null } });
    }
  }, [response]);

  return;
};

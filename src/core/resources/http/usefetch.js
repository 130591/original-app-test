import React, { useEffect } from "react";
import { AxiosHttpClient } from "./axios-http-client";

export const useFetch = ({
  url,
  method = "get",
  data = {},
  headers = {}
}) => {
  const [state, setState] = React.useState({
    response: null,
    error: null
  });

  const { response, error } = state;

  useEffect(() => {
    (async function (){
      try {
        const resp = await handleAjax();

        setState({
          response: resp
        });
      } catch (error) {
        setState({
          error: error
        });
      }
    })()
  }, []);

  async function handleAjax() {
    const httpClient = new AxiosHttpClient();

    const result = await httpClient.request({
      url,
      method,
      data,
      headers: new Headers(headers)
    });

    return result;
  }

  return [response, error];
};

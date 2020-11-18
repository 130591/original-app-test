import React, { useReducer, useRef } from "react";

function useStoreReducer(reducer, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storeDispatchRef = useRef();

  const storeDispatch = action =>
    typeof action === "function"
      ? action(storeDispatchRef.current, state)
      : dispatch(action);

    storeDispatchRef.current = storeDispatch;

  return [state, storeDispatch];
}

export default useStoreReducer;

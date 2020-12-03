import React, { useEffect, useState } from 'react';

export const Input = ({
  type,
  autoFocus,
  onFocus,
  onBlur,
  name,
  placeholder
}) => {
  const [state, setState] = useState({
    onFocus: false,
    onBlur: false,
    autoFocus: false,
  });

  useEffect(() => {
    setState({ 
      onFocus: onFocus, 
      onBlur: onBlur, 
      autoFocus: autoFocus 
    });

  }, [onFocus, onBlur, autoFocus]);

  return (
    <input
      type={type | 'text'}
      alt={name | 'unnamed'}
      {...state}
      className={`c-form__field`}
      placeholder={placeholder}
    />
  );
};


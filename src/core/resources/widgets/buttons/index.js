import React , {  useState  } from 'react';

export const Button = ({
  children,
  onPress,
  styled,
  className,
  size,
  disabled
}) => {
  return (
    <button
      className={`c-btn ${className}`}
      style={{ maxWidth: size == 'large' ? '400px' : '200px' }}
      style={styled}
      onClick={(e) => onPress(e)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

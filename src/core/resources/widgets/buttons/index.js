import React , {  useState  } from 'react';

export const Button = ({
  children,
  onPress,
  styled,
  className,
  size,
}) => {
  return (
    <button
      className={`c-btn ${className}`}
      style={{ maxWidth: size == 'large' ? '400px' : '200px' }}
      style={styled}
      onClick={(e) => onPress(e)}
    >
      {children}
    </button>
  );
}

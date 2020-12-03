import React , {  useState  } from 'react';

export const Button = ({
  children,
  onPress,
  className,
  size,
  style,
  disabled
}) => {
  return (
    <button
      className={`c-btn ${className}`}
      style={{ maxWidth: size == 'large' ? '400px' : '200px' }}
      onClick={(e) => onPress(e)}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}

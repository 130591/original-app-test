import React from 'react';

export const Image = ({
  path,
  legend,
  bindRef,
  className,
  onPress,
  props
}) => {

  return (
    <img
      src={path}
      ref={bindRef}
      onClick={onPress ? (e) => onPress(e) : null}
      className={className}
      alt={legend}
      {...props}
    />
  );
}

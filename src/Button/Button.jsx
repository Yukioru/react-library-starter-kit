import React from 'react';

function Button({ children, ...props }) {
  console.log(children);
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default Button;

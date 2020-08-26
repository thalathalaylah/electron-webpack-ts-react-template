import React from 'react';

function clicked() {
  console.log('clicked');
}

export const Button = () => {
  return (
    <button className="Button" onClick={clicked}>
      Click me!
    </button>
  );
};

import React from "react";

const Cart = ({ product }) => {
  const { id, title, price, stock, image } = product;
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Cart;

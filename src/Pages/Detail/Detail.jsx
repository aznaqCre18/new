import React, { useState } from "react";
import Header from "./../../elements/Header/Header";
import { useParams } from "react-router-dom";
import products from "../../data/product.json";
import "./Detail.css";

function DetailProduct() {
  const [cartValue, setCartValue] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  const { id } = useParams();
  const product = products.find((data) => +data.id === +id);

  const handlePlusCart = () => {
    setCartValue(cartValue + 1);
  }

  const handleAddToCart = () => {
    localStorage.getItem("token")
    ? handlePlusCart()
    : setIsShowModal(!isShowModal);
  }

  return (
    <>
      <Header cartValue={cartValue} isLogin={isShowModal} />;
      <div className="page-detail" style={{marginTop: 80}} >
        <div className="form-detail">
          <div>
            <img src={product.img} alt={product.id} className="img" />
          </div>
          <p className="title">{product.title}</p>
          <p className="stock">Stock : {product.stock}</p>
          <p className="desc">{product.desc}</p>
          <p className="price">Rp. {product.Price}</p>
          <button className="add-cart" onClick={handleAddToCart} >Add Cart</button>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;

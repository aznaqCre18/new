import React from "react";
import { useState } from "react";
import { Form, Card, Modal, Button } from "react-bootstrap";
import "./AddProduct.css";
import Navbar from "../../elements/Header/Header";
import image from "../../assets/images/product-image/blue-beans.png";

function ModalAdd(props) {
  return (
    <Modal {...props} centered>
      <div className="modal-add">
        <p className="title">Success Add Product</p>
      </div>
    </Modal>
  );
}
function AddProduct() {
  const [modalShow, setModalShow] = React.useState(false);
  const [nameFile, setNameFile] = useState("Photo Product");
  const onUpload = (e) => {
    setNameFile(e.target.files[0].name);
  };
  return (
    <div className="page-add">
      <Navbar />
      <Card>
        <Form className="form-product">
          <p className="title-add">
            <b>Add Product</b>
          </p>
          <input type="text" className="add-name" placeholder="Name" />
          <input type="text" className="add-stock" placeholder="Stock" />
          <input type="text" className="add-price" placeholder="Price" />
          <textarea
            type="text"
            className="add-desc"
            placeholder="Description Produck"
          ></textarea>
          <label htmlFor="file" className="cursor add-file">
            <div className="space-between align-center">
              <p className="nf">{nameFile}</p>
              <i className="fas icon fa-paperclip"></i>
            </div>
            <input type="file" className="none" id="file" onChange={onUpload} />
          </label>
          <img className="img-add" src={image} alt="product" />
          <Button className="btn-add" onClick={() => setModalShow(true)}>
            <b style={{ fontFamily: "Poppins" }}>Add Product</b>
          </Button>
          <ModalAdd show={modalShow} onHide={() => setModalShow(false)} />
        </Form>
      </Card>
    </div>
  );
}

export default AddProduct;

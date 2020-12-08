import React from "react";
import { useState } from "react";
import { Form, Card, Button, Modal } from "react-bootstrap";
import "./Shipping.css";
import Navbar from "../../elements/Header/Header";
import ways from "../../assets/ways-sm.svg";
import image from "../../assets/images/product-image/blue-beans.png";

function ModalOrder(props) {
  return (
    <Modal {...props} centered>
      <div className="modal-ship">
        <p className="title">
          Thank you for ordering in us, please wait 1 x 24 hours to verify you
          order
        </p>
      </div>
    </Modal>
  );
}

function Shipping() {
  const [modalShow, setModalShow] = React.useState(false);
  const [nameFile, setNameFile] = useState("Attache of transaction");
  const onUpload = (e) => {
    setNameFile(e.target.files[0].name);
  };
  return (
    <div className="page-ship">
      <Navbar />
      <Card>
        <Form className="form">
          <p className="title-ship">Shipping</p>
          <input type="text" className="add-name" placeholder="Name" />
          <input type="text" className="add-email" placeholder="Stock" />
          <input type="text" className="add-phone" placeholder="Email" />
          <input type="text" className="add-pos" placeholder="Post Code" />
          <textarea
            type="text"
            className="add-address"
            placeholder="Address"
          ></textarea>
          <label htmlFor="file" className="cursor add-file">
            <div className="space-between align-center">
              <p className="ns">{nameFile}</p>
              <i className="fas icon2 fa-paperclip"></i>
            </div>
            <input type="file" className="none" id="file" onChange={onUpload} />
          </label>
          <div className="box-ship">
            <img className="img-ship" src={image} alt="img-ship" />
            <img className="logo" src={ways} alt="logo" />
            <p className="title">GUETEMALA Beans</p>
            <div className="date">
              <b>Saturday</b>, 5 March 2020
            </div>
            <p className="price">Price : Rp. 300.900</p>
            <p className="qty">Qty : 2</p>
            <p className="total">SubTotal : Rp. 601.800</p>
          </div>
          <Button className="btn-pay" onClick={() => setModalShow(true)}>
            <b style={{ fontFamily: "Poppins" }}>Pay</b>
          </Button>
          <ModalOrder show={modalShow} onHide={() => setModalShow(false)} />
        </Form>
      </Card>
    </div>
  );
}

export default Shipping;

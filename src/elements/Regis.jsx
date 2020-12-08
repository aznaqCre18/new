import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./Login.css";

export default class ModalRegister extends Component {
  render() {
    const { isShow, onHide, switchModal } = this.props;
    return (
      <Modal
        backdrop="static"
        centered
        onHide={() => onHide("register")}
        show={isShow}
        size="md"
        className="modal-regist-log "
      >
        <Modal.Body>
          <div className="wrapper-form">
            <h1 className="font"> Register </h1>
            <input type="text" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            <input type="text" className="input" placeholder="Full Name" />
            <button className="btn-login">REGISTER</button>
            <p className="switch">
              Already have an account ? Klik{" "}
              <b className="b" onClick={() => switchModal("register")}>
                Here
              </b>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

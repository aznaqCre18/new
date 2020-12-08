import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./Login.css";
import { connect } from 'react-redux';
import { handleLogin } from './../redux/action/Login/action.jsx';
 
const dummyLogin = {
  email: "vian",
  password: "1234",
};
export default class ModalLogin extends Component {
  state = {
    email: "",
    password: "",
    successLogin: false
  };

  _handlEmailInput = (e) => {
    const { errorLoginToFalse } = this.props;

    this.setState({ email: e.target.value });
    errorLoginToFalse();
  };

  _handlPassInput = (e) => {
    const { errorLoginToFalse } = this.props;

    this.setState({ password: e.target.value });
    errorLoginToFalse();
  };

  _handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { dummyLogin, onHide, onErrorLogin, setIsLogin } = this.props;

    if (email === dummyLogin.email && password === dummyLogin.password) {
      await setIsLogin();
      onHide("login");
    } else {
      onErrorLogin();
      console.log("error");
    }
  };

  render() {
    const { isShow, onHide, switchModal, errLogin, isLogin } = this.props;
    return (
      <Modal
        backdrop="static"
        centered
        onHide={() => onHide("login")}
        show={isShow || isLogin}
        size="md"
        className="modal-regist-log"
      >
        <Modal.Body>
          <div className="wrapper-form modal-bg">
            <h1 className="font">Login</h1>
            <input
              type="text"
              className="input"
              placeholder="Email"
              onChange={this._handlEmailInput}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              onChange={this._handlPassInput}
            />
            {errLogin && (
              <p style={{ color: "red" }}>Wrong username or password</p>
            )}
            <button className="btn-login" onClick={this._handleLogin}>
              LOGIN
            </button>
            <p className="switch">
              Don't have an account ? Klik{" "}
              <b className="b" onClick={() => switchModal("login")}>
                Here
              </b>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

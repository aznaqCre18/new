import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { connect } from 'react-redux';

import ModalLogin from "../Login";
import ModalRegister from "../Regis";
import "./Header.css";
import {
  LOGO,
  CART,
  PROFILE,
  PROFILE_DROPDOWN,
  LOGOUT,
} from "./../../configs/icons";
import { handleLogin } from './../../redux/action/Login/action';

class Header extends Component {
  state = {
    isShowLogin: false,
    isShowRegist: false,
    isLogin: false,
    dropdown: false,
    errorLogin: false,
  };

  _handleShowModal = (name) => {
    if (name === "login") {
      this.setState({ isShowLogin: !this.state.isShowLogin });
    } else if (name === "register") {
      this.setState({ isShowRegist: !this.state.isShowRegist });
    }
  };

  _handleSwitchModal = (name) => {
    if (name === "login") {
      this.setState({
        isShowLogin: !this.state.isShowLogin,
        isShowRegist: !this.state.isShowRegist,
      });
    } else if (name === "register") {
      this.setState({
        isShowRegist: !this.state.isShowRegist,
        isShowLogin: !this.state.isShowLogin,
      });
    }
  };

  _handleIsLogin = () => {
    this.setState({ isLogin: true, isShowLogin: false });
  };

  _handleErrorLogin = () => {
    this.setState({ errorLogin: true });
  };

  _handleErrorLoginToFalse = () => {
    this.setState({ errorLogin: false });
  };

  _handleLogout = async () => {
    await localStorage.removeItem("token");
    window.location.href = "http://localhost:3001/"
  }

  render() {
    const { errorLogin } = this.state;
    const { cartValue, handleLogin, isLogin } = this.props;

    const dummyLogin = {
      email: "vian",
      password: "1234",
    };
    return (
      <>
        <ModalLogin
          isShow={this.state.isShowLogin}
          onHide={this._handleShowModal}
          switchModal={this._handleSwitchModal}
          dummyLogin={dummyLogin}
          setIsLogin={handleLogin}
          onErrorLogin={this._handleErrorLogin}
          errorLoginToFalse={this._handleErrorLoginToFalse}
          errLogin={errorLogin}
          isLogin={isLogin}
        />
        <ModalRegister
          isShow={this.state.isShowRegist}
          onHide={this._handleShowModal}
          switchModal={this._handleSwitchModal}
        />
        <Navbar fixed="top" className="header-container">
          <Link to="/">
            <div className="logo">
              <img src={LOGO} alt="logo" />
            </div>
          </Link>
          {!window.localStorage.getItem("token") ? (
            <div className="login-register">
              <div className="login-btn">
                <button
                  className="login"
                  onClick={() => this._handleShowModal("login")}
                >
                  Login
                </button>
              </div>
              <div className="register-btn">
                <button
                  className="register"
                  onClick={() => this._handleShowModal("register")}
                >
                  Register
                </button>
              </div>
            </div>
          ) : (
            <div className="logged-in">
              <Link to="/cart">
                <div className="cart">
                  <div style={cartValue === 0 ? {display: 'none'} : {display: 'flex'}} className="pop-up">{cartValue}</div>
                  <img className="img-cart" src={CART} alt="cart" />
                </div>
              </Link>
              <div className="profile">
                <img
                  className="img-profile"
                  src={PROFILE}
                  alt="profile-pict"
                  onClick={() =>
                    this.setState({ dropdown: !this.state.dropdown })
                  }
                />
                <div
                  className={`dropdown ${this.state.dropdown ? "show" : ""} `}
                >
                  <ul>
                    <Link to="/profile">
                      <li className="profile-btn">
                        <img
                          className="img-btn-profile"
                          src={PROFILE_DROPDOWN}
                          alt="profile-dropdown"
                        />
                        <span className="span">Profile</span>
                      </li>
                    </Link>
                    <hr />
                    <Link to="/">
                      <li className="logout-btn">
                        <img
                          className="img-btn-logout"
                          src={LOGOUT}
                          alt="logout"
                        />
                        <span onClick={this._handleLogout} className="span" style={{ color: "red" }}>
                          Logout
                        </span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LoginReduce: state.LoginReduce,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => dispatch(handleLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from "react";
import "./Profile.css";
import Header from "../../elements/Header/Header";
import profile from "../../assets/profile.png";
import transaksi from "../../data/trans.json";
import Transaksi from "./Transaksi";

function Profile() {
  return (
    <div className="page-profile">
      <div>
        <Header />
      </div>
      <div className="box-profile">
        <p className="profile-title">My Profile</p>
        <img className="pict" src={profile} alt="profile" />
        <p className="full-name">Full Name</p>
        <p className="p-name">Radif Ganteng</p>
        <p className="full-mail">Email</p>
        <p className="p-mail">radifgans@gmail.com</p>
      </div>
      <div className="">
        <div className="" style={{ marginTop: 26 }}>
          {transaksi.map((trans, index) => {
            return <Transaksi trans={trans} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;

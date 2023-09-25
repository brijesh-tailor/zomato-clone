import React, { useState } from "react";
import { getCountryList } from "../services/common.service";

type Props = {
  closeLogin: (value: boolean) => void;
};

const LoginComponent: React.FC<Props> = ({ closeLogin }) => {
  // useEffect(() => {
  //   getCountryListData();
  // });

  // const getCountryListData = () => {
  //   getCountryList().then((response: any) => {
  //     debugger;
  //   });
  // };

  const closeLoginModal = (value: boolean) => {
    closeLogin(value);
  };

  return (
    <div id="myModal" className="modal">
      {/* Modal Content */}
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="header-title">Log in</h2>
          <button
            className="close-icon"
            onClick={() => closeLoginModal(false)}
          />
          {/* <span className="close" onClick={() => closeLoginModal(false)}>
          &times;
        </span> */}
        </div>
        <div className="form-section">
          <div className="phone-field">
            <select className="country-dropdown">
              <option value="Ford">India</option>
              <option value="Volvo">USA</option>
              <option value="Fiat">Canada</option>
            </select>
            <input type="text" placeholder="Phone" className="phone-number" />
          </div>
          <button className="otp-button">Send One Time Password</button>
          <hr className="hr" />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

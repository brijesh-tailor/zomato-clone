import React, { useEffect, useState } from "react";
/************************************************************************/
import { getCountryList } from "../services/common.service";
import SignupComponent from "./SignupComponent";

type Props = {
  closeLogin: (value: boolean) => void;
};

const LoginComponent: React.FC<Props> = ({ closeLogin }) => {
  const [countries, setCountries] = useState<any[]>();
  const [isSignupVisible, setSignupModalVisible] = useState(false);

  useEffect(() => {
    getCountryListData();
  }, []);

  const getCountryListData = () => {
    getCountryList().then((response: any) => {
      setCountries(response.data);
    });
  };

  const closeLoginModal = (value: boolean) => {
    closeLogin(value);
  };

  const backdropClick = (e: any) => {
    if (e?.target?.className === "modal") {
      closeLogin(false);
    }
  };

  const openSignupModal = (value: boolean) => {
    setSignupModalVisible(value);
  };

  return (
    <div id="myModal" className="modal" onClick={(e) => backdropClick(e)}>
      {/* Modal Content */}
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="header-title">Log in</h2>
          <button
            className="icon-close-icon"
            onClick={() => closeLoginModal(false)}
          />
          {/* <span className="close" onClick={() => closeLoginModal(false)}>
          &times;
        </span> */}
        </div>
        <div className="form-section">
          <div className="phone-field">
            <select className="country-dropdown">
              {countries?.map((data, key) => {
                return (
                  <option className="country-option" key={key}>
                    <span>{data?.country_name}</span>
                    {/* <span>|</span>
                    <span>+{data.isdCode}</span> */}
                  </option>
                );
              })}
            </select>
            <input type="text" placeholder="Phone" className="phone-number" />
          </div>
          <button className="otp-button">Send One Time Password</button>
          <div className="horizontal-line-text">
            <hr className="hr" />
            <span className="or">or</span>
          </div>
          <button className="mail-button">
            <span className="icon-mail-fill"></span>
            <span className="mail-text">Continue with Email</span>
          </button>
          <button className="google-button">
            <span className="icon-google-icon"></span>
            <span className="google-text">Continue with Google</span>
          </button>
          <div className="horizontal-line">
            <hr className="hr" />
          </div>
          <p className="sign-up-text">
            New to Zomato?
            <span
              className="create-account-link"
              onClick={() => openSignupModal(true)}
            >
              Create account
            </span>
          </p>
        </div>
      </div>
      {/* search Modal */}
      {/* {isSignupVisible ? <SignupComponent /> : null} */}
    </div>
  );
};

export default LoginComponent;

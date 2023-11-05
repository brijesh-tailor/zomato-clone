import React, { useEffect, useState } from "react";
/************************************************************************/
import { getCountryList } from "../services/common.service";
import SignupComponent from "./SignupComponent";
import EmailLoginComponent from "./EmailLoginComponent";

type Props = {
  closeLogin: (value: boolean) => void;
  openLoginModal: (value: boolean) => void;
};

const LoginComponent: React.FC<Props> = ({ closeLogin, openLoginModal }) => {
  const [countries, setCountries] = useState<any[]>();
  const [isSignupVisible, setSignupModalVisible] = useState(false);
  const [isEmailLoginVisible, setEmailLoginModalVisible] = useState(false);

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

  const toggleSignupModal = (value: boolean) => {
    setSignupModalVisible(value);
    closeLogin(value);
  };

  const toggleEmailLoginModal = (value: boolean) => {
    setEmailLoginModalVisible(value);
    // closeLogin(value);
  };

  return (
    <div>
      <div id="myModal" className="modal" onClick={(e) => backdropClick(e)}>
        {/* Modal Content */}
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="header-title">Login</h2>
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
            <span
              className="mail-button"
              onClick={() => toggleEmailLoginModal(true)}
            >
              <span className="icon-mail-fill"></span>
              <span className="mail-text">Continue with Email</span>
            </span>
            <button className="google-button">
              <span className="icon-google">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
              </span>
              <span className="google-text">Continue with Google</span>
            </button>
            <div className="horizontal-line">
              <hr className="hr" />
            </div>
            <p className="sign-up-text">
              New to Zomato?
              <span
                className="create-account-link"
                onClick={() => toggleSignupModal(true)}
              >
                Create account
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* search Modal */}
      {isSignupVisible ? (
        <SignupComponent
          closeSignup={toggleSignupModal}
          openLogin={openLoginModal}
        />
      ) : null}

      {/* Email Login Modal */}
      {isEmailLoginVisible ? (
        <EmailLoginComponent closeEmailLogin={toggleEmailLoginModal} />
      ) : null}
    </div>
  );
};

export default LoginComponent;

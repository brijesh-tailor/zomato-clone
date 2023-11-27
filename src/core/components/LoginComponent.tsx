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
    <>
      <div className="modal" onClick={(e) => backdropClick(e)}>
        {/* Modal Content */}
        <div className="modal-login-content">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="title-login">Login</h2>
            <button
              className="icon-close"
              onClick={() => closeLoginModal(false)}
            />
          </div>
          <div className="login-form-container">
            <form>
              <div className="d-flex input-phone-container">
                <select className="dropdown-country">
                  {countries?.map((data, key) => {
                    return (
                      <option className="" key={key}>
                        <span>{data?.country_name}</span>
                      </option>
                    );
                  })}
                </select>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input-phone"
                />
              </div>
              <button className="btn-otp">Send One Time Password</button>
            </form>
            <div className="d-flex align-items-center mt-6 mb-12">
              <div className="hr"></div>
              <span className="hr-text">or</span>
              <div className="hr"></div>
            </div>
            <button
              className="btn-login d-flex justify-content-center align-items-center mb-28"
              onClick={() => toggleEmailLoginModal(true)}
            >
              <span className="icon-mail-fill"></span>
              <span className="text">Continue with Email</span>
            </button>
            <button className="btn-login d-flex justify-content-center align-items-center mb-28">
              <span className="icon-google">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
                <span className="path4"></span>
                <span className="path5"></span>
              </span>
              <span className="text">Continue with Google</span>
            </button>
            <div className="hr mb-12"></div>
            <p className="text-signup mt-12">
              New to Zomato?
              <span
                className="link-signup"
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
    </>
  );
};

export default LoginComponent;

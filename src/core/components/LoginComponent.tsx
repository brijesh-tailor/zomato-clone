import React, { useEffect, useState } from "react";
import { getCountryList } from "../services/common.service";
import { Countries } from "../models/common.model";

type Props = {
  closeLogin: (value: boolean) => void;
};

const LoginComponent: React.FC<Props> = ({ closeLogin }) => {
  const [countries, setCountries] = useState<Countries[]>();

  useEffect(() => {
    getCountryListData();
  }, []);

  const getCountryListData = () => {
    // getCountryList().then((response: any) => {});
    const countries1 = getCountryList();
    setCountries(countries1);
    console.log(countries);
  };

  const closeLoginModal = (value: boolean) => {
    closeLogin(value);
  };

  const backdropClick = (e: any) => {
    if (e?.target?.className === "modal") {
      closeLogin(false);
    }
  };

  return (
    <div id="myModal" className="modal" onClick={(e) => backdropClick(e)}>
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
              {countries?.map((data, key) => {
                return (
                  <option className="country-option" key={key}>
                    <span>{data.name}</span>
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
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="mail-fill"
            >
              <path d="M22 8.608V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V8.608L11.652 13.6644C11.87 13.7785 12.13 13.7785 12.348 13.6644L22 8.608ZM5.25 4H18.75C20.4347 4 21.8201 5.28191 21.9838 6.92355L12 12.1533L2.01619 6.92355C2.17386 5.34271 3.46432 4.09545 5.06409 4.00523L5.25 4H18.75H5.25Z" />
            </svg>
            <span className="mail-text">Continue with Email</span>
          </button>
          <button className="google-button">
            <span className="google-text">Continue with Google</span>
          </button>
          <div className="horizontal-line">
            <hr className="hr" />
          </div>
          <p className="sign-up-text">
            New to Zomato?
            <span className="create-account-link">Create account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

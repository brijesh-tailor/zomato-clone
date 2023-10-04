import { log } from "console";
import React, { useEffect, useState } from "react";
import LoginComponent from "./LoginComponent";
import { getCountryList } from "../services/common.service";
import { Countries } from "../models/common.model";
import SearchComponent from "./SearchComponent";

const TopBarComponent = () => {
  /** toggle Login modal */
  const [isLoginVisible, setLoginModalVisible] = useState(false);
  /** toggle Search modal */
  const [isSearchVisible, setSearchModalVisible] = useState(false);

  const toggleLoginModal = (value: boolean) => {
    setLoginModalVisible(value);
  };
  const toggleSearchModal = (value: boolean) => {
    setSearchModalVisible(value);
  };

  return (
    <div>
      <header>
        <nav className="container">
          <div className="logo-section">
            <img
              className="logo"
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
              alt="logo"
            />
          </div>
          <div className="login-section">
            <button
              id="myBtn"
              type="button"
              onClick={() => toggleLoginModal(true)}
              className="person-fill"
            />
            {/* <button type="button" onClick={() => toggleLoginModal(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="rgb(239, 79, 95)"
                className="bi bi-person-fill person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </button> */}

            {/* Modal */}
            {isLoginVisible ? (
              <LoginComponent closeLogin={toggleLoginModal} />
            ) : null}
          </div>
        </nav>
        <div className="search-section">
          <div className="search-location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <h4 className="location-text">Valsad</h4>
          </div>
          <div className="search-bar" onClick={() => toggleSearchModal(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <div className="filter-section">
          <button type="button" className="filter-button">
            Filters
          </button>
          <button type="button" className="filter-button">
            Rating: 4.0+
          </button>
          <button type="button" className="filter-button">
            Pure Veg
          </button>
          <button type="button" className="filter-button">
            Cuisines
          </button>
        </div>
      </header>
      {/* search Modal */}
      {isSearchVisible ? (
        <SearchComponent closeSearch={toggleSearchModal} />
      ) : null}
    </div>
  );
};

export default TopBarComponent;

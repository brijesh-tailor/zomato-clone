import { useEffect, useState } from "react";
/*******************************************************************/
import LoginComponent from "./LoginComponent";
import SearchComponent from "./SearchComponent";
import { getAccessToken, setAuthData } from "../services/auth.service";
import SignupComponent from "./SignupComponent";

const TopBarComponent = () => {
  /** toggle Login modal */
  const [isLoginVisible, setLoginModalVisible] = useState(false);
  /** toggle Search modal */
  const [isSearchVisible, setSearchModalVisible] = useState(false);

  useEffect(() => {
    getAccessTokenData();
  }, []);

  const getAccessTokenData = () => {
    localStorage.clear();
    getAccessToken().then((response: any) => {
      setAuthData(response);
    });
  };

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
              className="icon-person-fill"
            />
            {/* Modal */}
            {isLoginVisible ? (
              <LoginComponent closeLogin={toggleLoginModal} />
            ) : null}
          </div>
        </nav>
        <div className="search-section">
          <div className="search-location">
            <span className="icon-geo-alt-fill"></span>
            <h4 className="location-text">Valsad</h4>
          </div>
          <div className="search-bar" onClick={() => toggleSearchModal(true)}>
            <span className="icon-search"></span>
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
      ) : // <SignupComponent />
      null}
    </div>
  );
};

export default TopBarComponent;

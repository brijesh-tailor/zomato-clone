import React from "react";

const TopBarComponent = () => {
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
            <h3>Login</h3>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default TopBarComponent;

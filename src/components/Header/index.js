import React from "react";
import "./Header.css";

export const Header = ({ blackHeader }) => {
  return (
    <header className={blackHeader ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1280px-Netflix_logo.svg.png"
            alt="Logo Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
            alt="User Icon Netflix"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;

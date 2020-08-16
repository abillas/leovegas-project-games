import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">
          <img
            className="image"
            src="//images.ctfassets.net/327a1qzqf7bd/62MItV2tfejkG4C77717cf/cc62656b7c9121ed97c644051f28bd11/leovegas_CA.png"
            alt="logo"
          />
        </Link>
      </div>
    </header>
  );
};

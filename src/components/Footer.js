import React from "react";
import { FaGithub } from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        © 2022 trroev
        <a href="https://github.com/trroev">
          <FaGithub
            style={{
              fill: "#42282e",
              verticalAlign: "bottom",
              fontSize: "1.5rem",
              marginLeft: "0.5rem",
            }}
          />
        </a>
      </p>
    </div>
  );
};

export default Footer;

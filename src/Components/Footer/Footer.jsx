import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="facebook" />
        <img src={instagram_icon} alt="instagram" />
        <img src={twitter_icon} alt="twiiter" />
        <img src={youtube_icon} alt="youtube" />
      </div>
      <ul>
        <li>Audio Description</li>
      </ul>
    </div>
  );
};

export default Footer;

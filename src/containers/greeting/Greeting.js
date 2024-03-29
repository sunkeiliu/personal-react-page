﻿import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <img className="greeting-emoji" alt="Steven sitting at a table" src={require("../../assets/images/check.png")}></img>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact" href="#contact" />
              <Button text="Resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="Steven working" src={require("../../assets/images/headshot2.jpeg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}

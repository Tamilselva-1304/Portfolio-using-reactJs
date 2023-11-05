
import React from "react";
import Navbar from "../componets/Navbar";
import Dog from '../images/pet.jpg'
import Tourism from "../images/tourism.jpg";
import Port from "../images/port.jpg";
import API from "../images/api.jpg";
import Coming from "../images/commingsoon.jpg";
import OTP from "../images/otp_generator.jpg";
import QR from '../images/qrcode.jpg'
import '../pages/project.css'

const project = () => {
  return (
    <div>
      <Navbar />
      <div className="maincarddesgin">
        <div className="subcarddesgin">
          <div className="carddesgin">
            <img src={Dog} alt="" height="300px" width="300px" />
          </div>
          <p>Drool Website For Dogs</p>
          <button>
            <a
              href="https://tamilselva-1304.github.io/Drool-Pet-And-Animal-Care/"
              target="_blank"
            >
              Visit Site
            </a>
          </button>
        </div>

        <div className="subcarddesgin">
          <div className="carddesgin">
            <img src={Tourism} alt="" height="300px" width="300px" />
          </div>
          <p>Trousim Webiste</p>
          <button>
            <a
              href="https://tamilselva-1304.github.io/Adventure-webiste-/"
              target="_blank"
            >
              Visit Site
            </a>
          </button>
        </div>

        <div className="subcarddesgin">
          <div className="carddesgin">
            <img src={API} alt="" height="300px" width="300px" />
          </div>
          <p>Image search app using API & JS</p>
          <button>
            <a
              href="https://tamilselva-1304.github.io/ImageSearchWebsite_JS/"
              target="_blank"
            >
              Visit Site
            </a>
          </button>
        </div>

        <div className="subcarddesgin">
          <div className="carddesgin ">
            <img src={OTP} alt="" height="300px" width="300px" />
          </div>
          <p className="hignpara">OTP Generator & Validation Using JS</p>
          <button>
            <a
              href="https://tamilselva-1304.github.io/OTP-generator_Validation/"
              target="_blank"
            >
              Visit Site
            </a>
          </button>
        </div>

        <div className="subcarddesgin">
          <div className="carddesgin">
            <img src={Port} alt="" height="300px" width="300px" />
          </div>
          <p>Porfolio using ReactJS</p>
          <button>
            <a href="" >
              Visit Site
            </a>
          </button>
        </div>

        <div className="subcarddesgin undersubcard ">
          <div className="carddesgin">
            <img src={Coming} alt="" height="300px" width="300px" />
          </div>
          <p className="hignpara">E-commerce webiste using Js (Main project)</p>
          <button>
            <a href="" >
              Comming Soon
            </a>
          </button>
        </div>

        <div className="subcarddesgin undersubcard ">
          <div className="carddesgin">
            <img src={QR} alt="" height="300px" width="300px" />
          </div>
          <p>QR Generato Using Js & APIr</p>
          <button>
            <a href="https://tamilselva-1304.github.io/QR-Code-generator-using-js/" target="_blank">
              Visit Site 
            </a>
          </button>
        </div>

        <div className="subcarddesgin undersubcard ">
          <div className="carddesgin">
            <img src={Coming} alt="" height="300px" width="300px" />
          </div>
          <p>More Comming Soon</p>
          <button>
            <a href="">
              Comming Soon
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default project;

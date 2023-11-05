import { Link } from "react-router-dom";
import Navbar from "../componets/Navbar";
import "../pages/about.css";
import Aboutimage from "../images/codingimages.png";
import resume from "../images/Tamil Selvan_CV1.pdf";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/javascript.png";
import bs from "../images/bootstarp.png";
import react from "../images/react.png";
import git from "../images/git.png";

import React from "react";

const about = () => {
  return (
    <div >
      <Navbar />
      <div className="aboutmain">

      
      <div className="mainnavbar">
        
      </div>
      <div>
        <div className="cursorrocket">
          <div className="mains">
            <div className="subabout">
              <div className="imageabout">
                <img
                  className="mainimgs"
                  src={Aboutimage}
                  alt="My profile image"
                />
              </div>
              <div className="profile">
                <p>
                  <b style={{ textDecoration: "None", color: "black" }}>
                    Name:
                  </b>{" "}
                  Tamil Selvan P
                </p>
                <p>
                  <b style={{ textDecoration: "None", color: "black" }}>
                    Profile:
                  </b>{" "}
                  Front End Developer
                </p>
                <p>
                  <b style={{ textDecoration: "None", color: "black" }}>
                    Email:
                  </b>{" "}
                  tamiltd1304@gmail.com
                </p>
                <p>
                  <b style={{ textDecoration: "None", color: "black" }}>
                    Phone:
                  </b>{" "}
                  +91 90873-32846
                </p>

                <div className="skill">
                  <h4>SKILLS</h4>

                  <p className="lang">Html</p>
                  <div className="container">
                    <div className="skills html">90%</div>
                  </div>

                  <p className="lang">CSS</p>
                  <div className="container">
                    <div className="skills css">80%</div>
                  </div>

                  <p className="lang">JavaScript</p>
                  <div className="container">
                    <div className="skills js">75%</div>
                  </div>

                  <p className="lang">React</p>
                  <div className="container">
                    <div className="skills react">60%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="twomain">
            <h3 className="abouthead">About Me</h3>
            <p className="subheading">Webdesigner & Web Developer</p>
            <p className="paragraph">
              Hello! I'm Tamil selvan, an aspiring front-end developer with a
              passion for crafting intuitive and visually appealing web
              experiences. I recently graduated with a degree in Master Of
              Computer Science and I'm excited to embark on my journey in the
              world of web development. During my studies, I became captivated
              by the art of creating interactive and responsive websites. I
              discovered the power of HTML, CSS, and JavaScript in shaping the
              digital world we interact with daily. From building simple landing
              pages to experimenting with dynamic user interfaces
              <br />
              <br /> I'm proud of my achievements so far and I'm motivated to
              further enhance my skills and expand my portfolio.If you're a
              fellow developer, a creative thinker, or just as passionate about
              creating seamless web experiences, I'd love to connect! You can
              explore some of my work in my portfolio
              to learn more about my journey. Here's to the exciting journey of
              building the web, one line of code at a time!
            </p>

            <a className="downloadresume" download href={resume}>
              Download My Resume
            </a>

            <div className="skillslang">
              <div className="htmls hoverlang">
                <img src={html} height="140px"></img>
              </div>
              <div className="csss hoverlang">
                <img src={css} height="140px"></img>
              </div>
              <div className="javascripts hoverlang">
                <img src={js} height="140px"></img>
              </div>
              <div className="reacts hoverlang">
                <img src={react} height="140px"></img>
              </div>
              <div className="bootstarps hoverlang">
                <img src={bs} height="140px"></img>
              </div>
              <div className="gits hoverlang">
                <img src={git} height="140px"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default about;

import { Link } from "react-router-dom";

import Navbar from "../componets/Navbar";
import { TfiLocationPin } from "react-icons/tfi";
import { FiMail } from "react-icons/fi";
import { MdCall } from "react-icons/md";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../pages/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zp991jf",
        "template_evtqj0i",
        form.current,
        "yvVu0Yfzb83sEv8N3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () =>
    toast.success(
      "Mail sent!, Thanks for contact me !, I will response you Asap💙😍",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  return (
    <div>
      <Navbar />
      <div className="maincontactss">
        <div className="contact">
          <h2>Send us a message</h2>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              autoComplete="off"
              name="from_name"
            ></input>
            <input
              type="email"
              placeholder="Enter Your Mail"
              id="mail"
              autoComplete="off"
              name="from_email"
            ></input>
            {/* <input type="text" placeholder="Enter Your Mail" id="subject" autoComplete="off"></input> */}
            <textarea
              id="message"
              placeholder="Message Me"
              name="message"
              cols={30}
              rows={10}
            ></textarea>
            {/* <input type="submit" value="Send" /> */}
            <button id="btn" onClick={notify}>
              Send Message
            </button>
          </form>
        </div>
        <div className="getintouch">
          <h2>Get In Touch</h2>
          <p className="para">
            I'm excited to connect with you and discuss how we can work
            together. Whether you have a project in mind, want to learn more
            about my work, or just want to say hello, I'll be glad to hear from
            you!
            <br />
            I'm always open to new opportunities, collaborations, and
            conversations. If you'd like to get in touch with me, feel free to
            reach out through any of the following methods:
          </p>
          <div className="icon">
            <p>
              <FiMail /> tamiltd1304@gmail.com
            </p>
            <p>
              <MdCall /> +91 90873 32846
            </p>
            <p>
              <TfiLocationPin /> No-46 Thoripakkam Omr Chennai TamilNadu
            </p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Contact;

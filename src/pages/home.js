import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../componets/Navbar';
import Typed from "react-typed";
import profilepic from '../images/profile.jpeg';
import '../pages/home.css'

const home = () => {
  return (
    <div>
        
        <Navbar/>
                
        <div className="maincontent">
            <div className="subcontent">
                <h2>I am Tamil Selvan</h2>
                <br/>
                <div className='typing'>
                <h4>
                    <Typed
                    strings={[
                        "I'm a Front End Developer",
                        "I Love Software Development",
                        "I Am a Web Developer",
                        "I Build Stuff For The World Wide Web",
                        "I Create Beautiful and Responsive websites",
                        "I Use HTML, CSS, JavaScript, ReactJS",
                        "And a Youtuber" 
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                    />
                </h4>
                </div>
                

                <div className="btn btn-two">
                <Link to="/about"><span className="spanabout">ABOUT ME</span></Link>
                </div>

            </div>

            <div>
                <img className="imgmain" src={profilepic} alt="My profile image" />
            </div>

        </div>
    </div>
  )
}

export default home;

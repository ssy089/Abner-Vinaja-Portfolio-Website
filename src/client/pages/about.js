import React from 'react';
import { Link } from "react-router-dom";
import { Footer, NavBar } from '../components.js';
import '../styles/about.scss';

const AboutMe = () => (
  <div className="App">
    <NavBar />
    <main className="about-page">
      <img src="../images/Abner_Vinaja_Profile_Picture_2022_Small.jpg" alt="Abner Vinaja Profile Picture"></img>
      <p>I was born and raised in Texas, and I am proud to call San Antonio my hometown. From a young age, I found myself fascinated by the advances in technology that humanity has achieved. I especially became interested in computers and the internet, as they are among the most influential innovations of modern society.
      </p>
      <p>As I proceeded through college, I found my strongest interests in software engineering, cloud computing, and web development. Not only do these fields experience extraordinary development as time goes by, but their impact on individual people is extensive. On top of that, it feels amazing whenever I create software using my software development skills. Overall, the ability to use modern technology to create sofware that benefits many people is what I strive to obtain and improve.
      </p>
      <div>
        <h3>Contact Me At: abnervinaja@gmail.com</h3>
	<h3>Learn More About Me From My <a href="https://www.linkedin.com/in/abner-vinaja-7501971a6/" target="_blank">LinkedIn Profile</a></h3>
        <h3>See My Code on <a href="https://github.com/ssy089" target="_blank">Github</a></h3>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutMe;

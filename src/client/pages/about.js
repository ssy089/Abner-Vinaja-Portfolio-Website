import React from 'react';
import { Link } from "react-router-dom";
import { Footer, NavBar } from '../components.js';
import '../styles/about.scss';

const AboutMe = () => (
  <div className="App">
    <NavBar />
    <main className="about-page">
      <div className='about-me-text'>
        <p>
          I was born and raised in Texas, and I am proud to call San Antonio my hometown. From a young age, I found myself fascinated by the advances in technology that humanity has achieved. 
          I especially became interested in computers and the internet, as they are among the most influential innovations of modern society.
        </p>
        <p>
          While I was a student at the University of Texas at San Antonio, I developed a strong interest in software engineering, cloud computing, and web development. Not only do these fields experience extraordinary development 
          as time goes by, but their impact on individual people is quite notable. On top of that, I gradually came to know the amazing feeling that I get whenever I finish creating software.
        </p>
        <p>
          After completing my <strong>Bachelor of Science in Computer Science</strong>, with a <strong>Concentration in Software Engineering</strong> and a <strong>Concentration in Cloud and Systems</strong>, I began looking for new ways to grow in
          the field of software development. This has led to me to engage in online certification programs from companies like Udacity and LinkedIn. My primary goals include gaining professional experience
          with the entire software development process, and mastering the use of cloud computing tools that optimize modern software.
        </p>
      <div>
          <h3>Contact Me At: abnervinaja@gmail.com</h3>
	        <h3>Learn More About Me From My <a href="https://www.linkedin.com/in/abner-vinaja-7501971a6/" target="_blank">LinkedIn Profile</a></h3>
          <h3>See My Code on <a href="https://github.com/ssy089" target="_blank">Github</a></h3>
        </div>
      </div>
      <img src="../images/Abner_Vinaja_Profile_Picture_2022_Small.jpg" alt="Abner Vinaja Profile Picture"></img>
    </main>
    <Footer />
  </div>
);

export default AboutMe;

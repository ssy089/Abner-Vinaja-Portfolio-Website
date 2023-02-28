import React from 'react';
import { NavBar, Footer } from './components.js';

import './styles/main.scss';

const App = () => (
  <div className="App"> 
    <NavBar />
    <main>
      <h1>Welcome!</h1>
      <div className='intro-card'>
        <img src="../images/My_Desk.jpg" alt="Picture of My Desk"></img>
        <div className='paragraphs'>
          <p>
            My name is Abner Bethuel Vinaja. I am a web developer who aspires to gain
            experience with various types of software (mobile, cloud, enterprise, etc.).
          </p>
          <p>
            I actively seek to improve my abilties for software development. More importantly,
            in order to demonstrate my knowledge, I strive to find new ways to apply my skills.
          </p>
          <p>
            I am open to any opportunities where I can practice software development. Through my
            academic experience and online coursework, I have gained pratice in various parts of the 
            software development process.
          </p>
        </div>
      </div>
    </main>
    <Footer /> 
  </div>
);

export default App;

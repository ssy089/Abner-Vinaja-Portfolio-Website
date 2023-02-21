import React from 'react';
import { NavBar, Footer } from './components.js';

import './styles/main.scss';

const App = () => (
  <div className="App"> 
    <NavBar />
    <main>
      <div className="intro-card">
        <h1>Welcome!</h1>
        <div>
	        <img src="./images/Abner_Vinaja_Profile_Picture_2022_Small.jpg" alt="Abner Vinaja Profile Picture"></img>
          <p>My name is Abner Bethuel Vinaja. I am a web developer who aspires to gain
             experience with various types of software (mobile, cloud, enterprise, etc.).
          </p>
        </div>
      </div>
    </main>
    <Footer /> 
  </div>
);

export default App;

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';
import AboutMe from './pages/about.js';
import Skills from './pages/skills.js';
import Projects from './pages/projects.js';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './media/Abner_Vinaja_Profile_Picture_2022_Small.jpg';
import './media/My_Desk.jpg';
import './media/Java.jpg';
import './media/C.png';
import './media/Common_Lisp.png';
import './media/MySQL.png';
import './media/Python.png';
import './media/CSS.png';
import './media/HTML.png';
import './media/PHP.png';
import './media/JavaScript.png';
import './media/JUnit.png';
import './media/MochaJS.png';
import './media/ExpressJS.png';
import './media/Jest.png';
import './media/React.svg';
import './media/Ubuntu.png';
import './media/Bash.png';
import './media/NodeJS.png';
import './media/Docker.png';
import './media/Webpack.png';
import './media/MongoDB.png';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <AboutMe />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/projects",
    element: <Projects />
  }
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);

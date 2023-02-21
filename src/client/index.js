import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';
import AboutMe from './pages/about.js';
import Skills from './pages/skills.js';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import './styles/main.scss';

import './media/Abner_Vinaja_Profile_Picture_2022_Small.jpg';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <AboutMe />
  },
  {
    path: "skills",
    element: <Skills />
  }
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);

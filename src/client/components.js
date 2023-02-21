import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <nav>
    <ul id="nav-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="about">About Me</Link></li>
      <li><Link to="skills">Skills</Link></li>
      <li><Link to="projects">Projects</Link></li>
    </ul>
  </nav>
);

export const Footer = () => (<footer><p>© 2023 Abner Vinaja</p></footer>);

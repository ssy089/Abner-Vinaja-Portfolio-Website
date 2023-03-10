import React from 'react';
import { useState, useEffect } from 'react';
import { Footer, NavBar } from '../components.js';
import SkillSection from './skillSection.js';

import '../styles/skills.scss';

const Skills = () => {
  const [allSkillsList, setAllSkillsList] = useState([]);
  useEffect(() => {
    async function fetchSkillsList() {
      try {
        const responseList = await fetch('https://abner-vinaja-portfolio-website.azurewebsites.net/listOfSkills');
        const fullSkillList = await responseList.json();
        setAllSkillsList(fullSkillList);
      }
      catch (err) {
        console.log(err);
      }
    }

    fetchSkillsList();
  }, []);
  

  return (
    <div className="App">
      <NavBar />
      <main>
        <h2>Programming Languages</h2>
        {allSkillsList.length !== 0 ? <SkillSection skillList={allSkillsList[0]} /> : <p className="error-message">Sorry, an error occurred while the data was being retrieved</p>}
        <h2>Frameworks and Libraries</h2>
        {allSkillsList.length !== 0 ? <SkillSection skillList={allSkillsList[1]} /> : <p className="error-message">Sorry, an error occurred while the data was being retrieved</p>}
        <h2>Other Tools (Runtime Environments, Build Tools, Platforms, etc.)</h2>
        {allSkillsList.length !== 0 ? <SkillSection skillList={allSkillsList[2]} /> : <p className="error-message">Sorry, an error occurred while the data was being retrieved</p>}
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
import React from 'react';
import { useState, useEffect } from 'react';
import { Footer, NavBar } from '../components.js';
import SkillSection from './skillSection.js';



const Skills = () => {
  const [allSkillsList, setAllSkillsList] = useState([]);
  useEffect(() => {
    async function fetchSkillsList() {
      try {
        const responseList = await fetch('/listOfSkills');
        const fullSkillList = await response.json();
        setAllSkillsList(fullSkillList);
        console.log(fullSkillList);
      }
      catch (err) {
        console.log(err);
      }
    }

    fetchSkillsList();
  }, []);
  

  return (
    <div classsName="App">
      <NavBar />
      {allSkillsList.length !== 0 ? <SkillSection skillList={allSkillsList[0]} /> : <span></span>}
      {allSkillsList.length !== 0 ? <SkillSection skillList={allSkillsList[1]} /> : <span></span>}
      {allSkillsList.length !== 0 ? <SkillSection skillList={allSkillsList[2]} /> : <span></span>}
      <Footer />
    </div>
  );
};

export default Skills;
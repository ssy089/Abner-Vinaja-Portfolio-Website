import React from 'react';
import { useState, useEffect } from 'react';
import { Footer, NavBar } from '../components.js';
import Project from './project.js';
import '../styles/projects.scss';

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    async function fetchProjectList() {
      try {
        const responseList = await fetch('http://localhost:8081/listOfProjects');
        const fullProjectList = await responseList.json();
        setProjectList(fullProjectList);
      }
      catch (err) {
        console.log(err);
      }
    }

    fetchProjectList();
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <h2>My Projects</h2>
      <main className='projects'>
        {(projectList.length !== 0) ? projectList.map(projectListItem => (<Project key={projectListItem.name} projectData={projectListItem}/>)) : <p className='error-message'>Sorry, an error occurred while the data was being retrieved.</p>}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
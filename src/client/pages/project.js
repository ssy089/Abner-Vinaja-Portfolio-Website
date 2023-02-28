import React from 'react';

const Project = ({projectData}) => (
  <div className='project-card'>
    <h3>{projectData.name}</h3>
    <div className='project-links'>
      <a href={projectData.webURL} target="_blank">Website</a>
      <a href={projectData.githubURL} target="_blank">GitHub Repository</a>
    </div>
    <div className='project-description'>
      <p>{projectData.description.generalDescription}</p>
      <ul>
        {projectData.description.bulletPoints.map(bulletPoint => (<li>{bulletPoint}</li>))}
      </ul>
    </div>
    <h4 className='project-skills-header'>For This Project, I Used:</h4>
    <div className='project-skills-list'>
      {projectData.skills.map(projectSkillsItem => (<div className='tooltip-image'><img src={`../images/${projectSkillsItem.image}`} alt={`${projectSkillsItem.name} Logo`}></img><span className='tooltip-text'>{projectSkillsItem.name}</span></div>))}
    </div>
  </div>
);

export default Project;
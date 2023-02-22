import React from 'react';
import SkillItem from './skillItem.js';

const SkillSection = ({skillList}) => (
  <section className="skill-section">
    {skillList.map(skillListItem => (<SkillItem key={skillListItem.name} skillData={skillListItem}/>))}
  </section>
);

export default SkillSection;
import React from 'react';
import SkillItem from './skillItem.js';

const SkillSection = ({skillList}) => (
  <section className="skill-section">
    {(skillList.length !== 0) ? skillList.map(skillListItem => <SkillItem key={skillListItem.name} skillData={{image: skillListItem.image, description: skillListItem.description}} />) : <span></span>}
  </section>
);

export default SkillSection;
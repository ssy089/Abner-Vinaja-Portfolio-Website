import React from 'react';
import { useState } from 'react';

const SkillItem = ({skillData}) => {
  const [displayImage, setDisplayImage] = useState(true);

  return (
    <div className="skill-item" onClick={() => setDisplayImage(!displayImage)}>
      {displayImage ? <img src={`../images/${skillData.image}`} alt={`${skillData.name} Logo`}></img> : <div className="skill-info"><h4>{skillData.name}</h4><p>{skillData.description}</p></div>}
    </div>
  );
};

export default SkillItem;
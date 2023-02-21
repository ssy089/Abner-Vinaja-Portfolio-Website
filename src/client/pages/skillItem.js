import React from 'react';
import { useState } from 'react';

const SkillItem = (key, skillData) => {
  const [displayImage, setDisplayImage] = useState(true);

  <div className="skill-item" onClick={setDisplayImage(!displayImage)}>
    {displayImage ? <img src={`../images/{skillData.image}`} alt={`{key} Logo`}></img> : <div className="skill-info"><h6>{key}</h6><p>{skillData.description}</p></div>}
  </div>
};

export default SkillItem;
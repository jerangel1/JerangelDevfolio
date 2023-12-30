"use client";
import React from 'react';
import { ExperienceItemProps } from './experienceItem'; 

const ExperienceList: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">{experience.company}</h2>
      <h3 className="text-gray-500">{experience.position}</h3>
      <p className="text-gray-400">{experience.date}</p>
      <p className="text-gray-400">{experience.content}</p>
      <a href={experience.url} target="_blank" rel="noreferrer">
        {experience.url}
      </a>
    </div>
    
  );
};

export default ExperienceList; 

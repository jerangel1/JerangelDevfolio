"use client";
import React from 'react';

export interface ExperienceItemProps {
    experience: {
        id: number;
        position: string;
        date: string;
        url: string;
        company: string;
        content: string;
    };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
    return (
        <div className='container fluid 1/2 text-center align-items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-10 p-0'>
            <div className="flex items-start"> 
                <div className="w-1 h-1 md:w-2 md:h-2"></div> 
                <div className="text-left">
                    <div className="text-xs text-gray-400 mb-1">{experience.date}</div> 
                    <a href={experience.url} target="_blank" rel="noreferrer">
                        <h2 className="text-lg font-semibold">{experience.company}</h2>
                        <h3 className="text-gray-500">{experience.position}</h3>
                        <p className="text-gray-400">{experience.content}</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;

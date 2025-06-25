import React, { useState } from 'react';
import type { Experience } from '../type';

    export default function ExperienceInteractive({ experiences }: { experiences: Experience[] }) {
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row gap-6">
        {/* Job List */}
        <div className="lg:w-1/3 w-full border-r border-gray-200 dark:border-gray-700">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {experiences.map((exp, idx) => (
                <li
                key={exp.id}
                className={`p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${selected === idx ? 'bg-gray-100 dark:bg-gray-800 font-bold' : ''}`}
                onClick={() => setSelected(idx)}
                >
                <div className="text-lg">{exp.title}</div>
                <div className="text-sm text-muted-foreground">{exp.company}</div>
                <div className="text-xs text-muted-foreground">{exp.location}</div>
                <div className="text-xs text-muted-foreground">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                </li>
            ))}
            </ul>
        </div>
        {/* Details */}
        <div className="lg:w-2/3 w-full p-4">
            <div className="text-2xl font-bold mb-2">{experiences[selected].title}</div>
            <div className="text-lg text-muted-foreground mb-1">{experiences[selected].company}</div>
            <div className="text-sm text-muted-foreground mb-4">{experiences[selected].location}</div>
            <div className="mb-4">{experiences[selected].description}</div>
            <div>
            <h4 className="font-semibold mb-1">Responsibilities:</h4>
            <ul className="list-disc list-inside text-sm mb-4">
                {experiences[selected].responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
                ))}
            </ul>
            </div>
            <div>
            <h4 className="font-semibold mb-1">Skills:</h4>
            <div className="flex flex-wrap gap-2">
                {experiences[selected].skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">{skill}</span>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    }
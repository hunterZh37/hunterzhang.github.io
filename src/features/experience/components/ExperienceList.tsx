import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building2, ExternalLink } from 'lucide-react';
import type { Experience } from '../type';

interface ExperienceListProps {
  experiences: Experience[];
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0]);

  return (
    <div className="flex gap-6 h-[700px] w-full">
      {/* Left Panel - Job List */}
      <div className="flex-shrink-0 w-[400px] overflow-y-auto border-r border-border pr-4">
        <div className="space-y-3">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              onClick={() => setSelectedExperience(experience)}
              className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                selectedExperience.id === experience.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-foreground">{experience.title}</h3>
                  <p className="text-sm text-primary font-medium">{experience.company}</p>
                </div>
                {experience.logo && (
                  <img src={experience.logo} alt={experience.company} className="w-8 h-8 object-contain" />
                )}
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Date(experience.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
                    {experience.current ? ' Present' : ` ${new Date(experience.endDate!).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {experience.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs px-1.5 py-0.5">
                    {skill}
                  </Badge>
                ))}
                {experience.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5">
                    +{experience.skills.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Panel - Job Details */}
      <div className="flex-1 min-w-0 overflow-y-auto">
        <div className="p-6 bg-card rounded-lg border h-full">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{selectedExperience.title}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-lg text-primary font-medium">{selectedExperience.company}</span>
                {selectedExperience.url && (
                  <a href={selectedExperience.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            {selectedExperience.logo && (
              <img src={selectedExperience.logo} alt={selectedExperience.company} className="w-16 h-16 object-contain" />
            )}
          </div>
          
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{selectedExperience.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(selectedExperience.startDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - 
                {selectedExperience.current ? ' Present' : ` ${new Date(selectedExperience.endDate!).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`}
              </span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
            <p className="text-foreground leading-relaxed">{selectedExperience.description}</p>
          </div>
          
          {selectedExperience.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Tasks & Responsibilities</h3>
              <ul className="space-y-2">
                {selectedExperience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {selectedExperience.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
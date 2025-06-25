import type { Experience, Skill, SkillCategory } from './type';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    current: true,
    description: 'Leading development of scalable web applications using modern technologies.',
    achievements: [
      'Led a team of 5 developers to deliver a major feature ahead of schedule',
      'Improved application performance by 40% through optimization',
      'Mentored junior developers and conducted code reviews',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    logo: '/company-logos/tech-company.png',
    url: 'https://techcompany.com',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: '2020-06',
    endDate: '2021-12',
    current: false,
    description: 'Built and maintained full-stack applications for a fast-growing startup.',
    achievements: [
      'Developed 3 major features that increased user engagement by 25%',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Collaborated with design team to improve user experience',
    ],
    skills: ['JavaScript', 'Python', 'Django', 'React', 'MongoDB'],
    logo: '/company-logos/startup-xyz.png',
    url: 'https://startupxyz.com',
  },
];

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    proficiency: 'expert',
    icon: 'react',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 'advanced',
    icon: 'typescript',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    proficiency: 'advanced',
    icon: 'nodejs',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    proficiency: 'intermediate',
    icon: 'python',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 'intermediate',
    icon: 'postgresql',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'devops',
    proficiency: 'intermediate',
    icon: 'aws',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: skills.filter(skill => skill.category === 'frontend'),
  },
  {
    name: 'Backend',
    skills: skills.filter(skill => skill.category === 'backend'),
  },
  {
    name: 'Database',
    skills: skills.filter(skill => skill.category === 'database'),
  },
  {
    name: 'DevOps',
    skills: skills.filter(skill => skill.category === 'devops'),
  },
];

export function getExperiences(): Experience[] {
  return experiences;
}

export function getSkills(): Skill[] {
  return skills;
}

export function getSkillCategories(): SkillCategory[] {
  return skillCategories;
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(exp => exp.id === id);
} 
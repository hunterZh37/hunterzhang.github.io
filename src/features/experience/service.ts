import type { Experience, Skill, SkillCategory } from './type';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full-Stack Unity C# Developer (Augmented Reality)',
    company: 'MadAbility Lab',
    location: 'Wisconsin, USA',
    startDate: '2022-06',
    endDate: '2023-05',
    current: false,
    description: 'I was the technical lead for the AR developer team. I was responsible for the development of the AR developer platform and the integration of the AR developer platform with the rest of the system.',
    responsibilities: [
      'Led the technical development of a landmark-based HoloLens indoor navigation system for people with low vision.',
      'Implemented a real-time spatial landmark recognition backbone with holographic scene understanding in Unity.',
      'Provide technical solutions to the work of Ph.D students and researchers'
    ],
    skills: ['Unity', 'C#', 'HCI Research'],
    logo: 'https://madability.cs.wisc.edu/wp-content/uploads/sites/2288/2024/10/Artboard-1-e1728414506737-768x256.png',
    url: 'https://madability.cs.wisc.edu/',
  },
  {
    id: '2',
    title: 'Senior Specialist',
    company: 'Uber',
    location: 'Dubai',
    startDate: '2021-06',
    endDate: '2022-02',
    current: false,
    description: 'Led development of scalable ride-sharing platform features and optimized backend systems for high-traffic scenarios.',
    responsibilities: [
      'Developed 3 major features that increased user engagement by 25%',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Collaborated with design team to improve user experience',
      'Optimized database queries resulting in 40% performance improvement'
    ],
    skills: ['JavaScript', 'Python', 'Django', 'React', 'MongoDB', 'Redis'],
    logo: '/company-logos/uber.png',
    url: 'https://uber.com',
  },
  {
    id: '3',
    title: 'Senior Specialist Customer Service Representative',
    company: 'Microsoft',
    location: 'Hyderabad',
    startDate: '2020-01',
    endDate: '2021-05',
    current: false,
    description: 'Provided technical support for Microsoft products and services, handling complex customer issues and escalations.',
    responsibilities: [
      'Maintained 95% customer satisfaction rating',
      'Resolved 150+ customer issues per week',
      'Trained new team members on product knowledge',
      'Implemented new troubleshooting procedures'
    ],
    skills: ['Customer Service', 'Technical Support', 'Windows', 'Office 365'],
    logo: '/company-logos/microsoft.png',
    url: 'https://microsoft.com',
  },
  {
    id: '4',
    title: 'Senior Specialist',
    company: 'WNS',
    location: 'Remote',
    startDate: '2019-03',
    endDate: '2019-12',
    current: false,
    description: 'Worked on business process optimization and data analysis for various client projects.',
    responsibilities: [
      'Improved process efficiency by 30%',
      'Created automated reporting dashboards',
      'Managed client relationships and project deliverables'
    ],
    skills: ['Data Analysis', 'Excel', 'Process Optimization', 'Client Management'],
    logo: '/company-logos/wns.png',
    url: 'https://wns.com',
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
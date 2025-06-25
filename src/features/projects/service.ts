// Import i18n utilities
import placeholderImage from '@/assets/placeholder.webp';
import livelyVideo from '@/assets/lively.mp4';
import livelyImage from '@/assets/lively.png';
import tbgImage from '@/assets/tbg.png';
import tbgProductVideo from '@/assets/tbgProductWalkthroughVideo.mp4';
import coframeImage from '@/assets/coframe.png';
// import tbgVideo from '@/assets/tbg.mp4';
import { ui } from '@/i18n/ui';
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'CoFrame', // Unique identifier for translations
    slug: 'coframe', // Used in the URL
    imageUrl: coframeImage, // Use imported ImageMetadata
    //videoUrl: coframeVideo,
    imageAltText: 'CoFrame Image',
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['JavaScript', 'React', 'Research', '2022 ACM/IEEE Human-Robot Interaction'], // Generic tags
    category: 'Cobot Programmers Training System', // Generic category
    date: '2022/03', // Generic date
    galleryImages: [
      // Optional: Gallery images for the project
      // {
      //   id: 'sampleGalleryImage1',
      //   src: placeholderImage, // Placeholder, needs ImageMetadata
      // },
    ],  
    shortDescription: 'CoFrame is a system for training novice cobot programmers with a user-friendly GUI and real-time 3D simulation',
    description: 'Collaborative robots (cobots) offer great potential, but many are not used to their full capabilities, often due to limited training and unclear guidance. To address this gap, we studied how experts design and program cobots, then created CoFrame, world\'s first system that teaches beginners to think and work like experts. Case studies show that this approach helps novices better understand and solve complex cobot tasks.',
    contributions: [
      'Contributed to a cutting-edge educational tool for cobot programming, integrating a user-friendly GUI with real-time 3D simulation, enhancing learning for programmers.',
      'Improved project usability by developing a comprehensive search function, facilitating user navigation through program features and workspace elements.',
      'Improved system\'s interactivity by creating dynamic visual elements for the 3D simulation, enabling detailed interaction with robots including custom inputs and output analysis.',
    ],
    technologiesUsed: [
      {
        id: 'javascript',
        name: 'JavaScript'
      },
      {
        id: 'react',
        name: 'React'
      },   
    ],
    links: [
      {
        id: 'web app',  
        url: 'https://coframe.wisc.edu/',
        label: 'Official Website',
      },
      {
        id: 'github',
        url: 'https://github.com/Wisc-HCI/coframe',
        label: 'GitHub',
      },
      {
        id: 'paper',
        url: 'https://dl.acm.org/doi/10.1145/3568162.3576982',
        label: 'Paper',
      },
    ],
  },
  {
    id: 'TBG', // Unique identifier for translations
    slug: 'tbg', // Used in the URL
    imageUrl: tbgImage, // Use imported ImageMetadata
    videoUrl: tbgProductVideo,
    imageAltText: 'TBG Image',
    projectUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Optional: Link to the live project
    codeUrl: 'https://github.com/Wisc-HCI/tbg', // Optional: Link to the source code
    tags: ['Python', 'NextJS', 'React', 'PostgreSQL', 'FastAPI', '$375K pre-seed funding raised'], // Generic tags
    category: 'Sports Entertainment and Prediction Platform', // Generic category
    date: '06/2024 - 06/2025', // Generic date
    galleryImages: [
      // Optional: Gallery images for the project
      // {
      //   id: 'sampleGalleryImage1',
      //   src: placeholderImage, // Placeholder, needs ImageMetadata
      // },
    ],
    links: [
      {
        id: 'product',
        url: 'https://www.thebeautifulgame.live/',
        label: 'Official Product Website',
      },
      {
        id: 'tutorial',
        url: 'https://app.arcade.software/share/4bEDSsWXeiD8QL5vmzKO',
        label: 'Product Tutorial',
      },
      {
        id: 'marketing',
        url: 'https://drive.google.com/file/d/1mV4T0Qtes6dSLOFZm3O8B5JF47Yo7Afm/view?usp=sharing',
        label: 'Product Marketing Video',
      },
    ],
    shortDescription: 'TBG is a sports entertainment and prediction platform designed for soccer fans who think like coaches.',
    description: 'TBG (The Beautiful Game) is a sports entertainment and betting platform designed for soccer fans who think like coaches. It transforms deep tactical insights—like heatmaps, duels, and formations—into real-time, skill-based prediction markets. Unlike traditional sportsbooks, TBG allows users to create any soccer moment they could possibly think of while with a higher payout.',
    contributions: [
      'Shaped the vision and strategy adopted by the team, leading to <strong>$375K pre-seed</strong> funding at <strong>$8M valuation</strong>.',
      'Established the current <strong>product design backbone</strong>, defining the core interaction patterns, and visual language.',
      'Implemented the current full-stack product infrastructure using <strong>Next.js, Python, PostgreSQL, and FastAPI</strong>.',
      'Led <strong>user research</strong> and <strong>iterative design cycles</strong> to identify a undeserved market.',
      'Unified <strong>PostgreSQL</strong> & <strong>PostHog</strong> into an <strong>analytics system</strong> to identify user insights for product decisions.',
      'Launched the first targeted marketing campaign, onboarded <strong>80 active users</strong> in the <strong>first month</strong>.',
    ],
    technologiesUsed: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'python', name: 'Python' },
      { id: 'postgresql', name: 'PostgreSQL' },
      { id: 'fastapi', name: 'FastAPI' },
    ],
  },
  {
    id: 'Lively', // Unique identifier for translations
    slug: 'lively', // Used in the URL
    imageUrl: livelyImage, // Use imported ImageMetadata
    videoUrl: livelyVideo,
    imageAltText: 'Lively Image',
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['Rust', 'JavaScript', 'Python', 'Research', 'ACM Best System Paper Award'], // Generic tags
    category: 'Robot Animation Simulation Library', // Generic category
    date: '2022/08/01', // Generic date
    galleryImages: [
      // Optional: Gallery images for the project
      // {
      //   id: 'sampleGalleryImage1',
      //   src: placeholderImage, // Placeholder, needs ImageMetadata
      // },
    ],
    keyFeatures: [
      // Key features (IDs for translation)
      { id: 'responsiveDesign' },
      { id: 'contentManagement' },
    ],
    technologiesUsed: [
      // Technologies used (IDs for display)
      { id: 'rust', name: 'Rust' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'python', name: 'Python' },
    ],
    shortDescription: 'Lively is a highly configurable library for commanding robots in mixed modalities for Python, JavaScript, and Rust.',
    description: 'Robots that work with or around people need to move in ways that make sense both for their tasks and their social signals. But combining those goals can often cause conflicts. Lively, a cobot movement simulation library, enables robots to generate real-time, natural motion that is both task-driven and socially expressive.',
    contributions: [
      'Engineered a highly configurable library for commanding robots in mixed modalities that provides API for <strong>Rust</strong>, <strong>JavaScript</strong>, and <strong>Python</strong>.',
      'Built an optimized collision detection system for robot spatial dynamics, boosting processing speed by <strong>215%</strong> compared to existing solutions.',
      'Implemented an interactive <a href="https://wisc-hci.github.io/lively/docs/Tutorials/environment-sine" class="text-red-600 underline" target="_blank" rel="noopener noreferrer">tutorial</a> system for users to learn how to use the library.',
    ],
    links: [
      {
        id: 'github',
        url: 'https://github.com/Wisc-HCI/lively',
        label: 'GitHub',
      },
      {
        id: 'documentation',
        url: 'https://wisc-hci.github.io/lively/',
        label: 'Documentation',
      },
      {
        id: 'paper',
        url: 'https://dl.acm.org/doi/10.1145/3568162.3576982',
        label: 'Paper',
      },
    ],
  },
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)['en']['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui['en']?.projectsContent?.[currentProjectId]
    ? ui['en'].projectsContent
    : ui['en'].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: en. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: project.description,
      imageAltText: project.imageAltText ?? 'Placeholder image',
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
): Array<TranslatedProject> {
  return projectsList.map((project) => translateProject(project));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  return translateProject(project);
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    category: 'engineering',
    id: 'frontendDevelopment',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'javascript', name: 'JavaScript' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'react', name: 'React' },
      { id: 'nextjs', name: 'Next.js' },
      { id: 'astro', name: 'Astro' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
  {
    category: 'engineering',
    id: 'backendDevelopment',
    iconName: 'ServerCog',
    technologies: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'restapi', name: 'REST APIs' },
      { id: 'postgresql', name: 'PostgreSQL' },
      { id: 'supabase', name: 'Supabase' },
      { id: 'redis', name: 'Redis' },
      { id: 'python', name: 'Python' },
      { id: 'flask', name: 'Flask' },
      { id: 'fastapi', name: 'FastAPI' },
      { id: 'rust', name: 'Rust' },
    ],
  },
  {
    category: 'engineering',
    id: 'machineLearning',
    iconName: 'Brain',
    technologies: [
      { id: 'python', name: 'Python' },
      { id: 'tensorflow', name: 'TensorFlow' },
      { id: 'pytorch', name: 'PyTorch' },
    ],
  },
  {
    category: 'design',
    id: 'uiUxDesign',
    iconName: 'PenTool',
    technologies: [
      { id: 'figma', name: 'Figma' },
    ],
  },
  {
    category: 'design',
    id: 'posterDesign',
    iconName: 'FileBadge2',
    technologies: [
      { id: 'canva', name: 'Canva' },
    ],
  },
  {
    category: 'design',
    id: 'logoDesign',
    iconName: 'Feather',
    technologies: [
      { id: 'illustrator', name: 'Illustrator' },
      { id: 'photoshop', name: 'Photoshop' },
    ],
  },
  {
    category: 'design',
    id: 'videoEditing',
    iconName: 'Clapperboard',
    technologies: [
      { id: 'premierepro', name: 'Premiere Pro' },
      { id: 'capcut', name: 'CapCut' },
    ],
  },
  {
    category: 'engineering',
    id: 'devOps',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'docker', name: 'Docker' },
      { id: 'amazonservices', name: 'AWS' },
      { id: 'postman', name: 'Postman' },
    ],
  },
  {
    category: 'engineering',
    id: 'xrDevelopment',
    iconName: 'ScanEye',
    technologies: [
      { id: 'unity', name: 'Unity' },
    ],
  },
  {
    category: 'management',
    id: 'productStrategy',
    iconName: 'ChartNetwork',
    technologies: [
    ],
  },
  {
    category: 'management',
    id: 'needFinding',
    iconName: 'Binoculars',
    technologies: [
    ],
  },
  {
    category: 'management',
    id: 'userInterview',
    iconName: 'Users',
    technologies: [
    ],
  },
  {
    category: 'management',
    id: 'aiRapidPrototyping',
    iconName: 'Zap',
    technologies: []
  },
];

// Function to get skills with translated content
export function getTranslatedSkills(
): Array<TranslatedSkill> {
  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)['en']['skillsContent'];
    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui['en']?.skillsContent?.[currentSkillId]
      ? ui['en'].skillsContent
      : ui['en'].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      // Fallback if translation for the skill ID is missing
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: en. Using default values.`
      );
      return {
        ...skill,
        title: skill.id, // Fallback title
        description: 'Description missing for this skill.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}

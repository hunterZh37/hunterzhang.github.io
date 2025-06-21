// src/components/SkillCard.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  
} from '@/components/ui/card';
import {
  MonitorSmartphone,
  ServerCog,
  Database,
  PenTool,
  Network,
  Brain,
  ScanEye,
  FileBadge2,
  Feather,
  Clapperboard,
  Binoculars,
  ChartNetwork,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiAstro,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiBun,
  SiDeno,
  SiExpress,
  SiNestjs,
  SiHono,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPrisma,
  SiDrizzle,
  SiFigma,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiNextdotjs,
  SiSupabase,
  SiRedis,
  SiFlask,
  SiFastapi,
  SiPostman,
  SiAmazon,
  SiPytorch,
  SiTensorflow,
  SiUnity,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCanva,
  SiAdobepremierepro,
} from 'react-icons/si';

import type { Technology } from '@/features/projects/type';
import type { FC } from 'react';
import type { IconType } from 'react-icons';

type Props = {
  title: string;
  description: string;
  iconName: string;
  technologies?: Array<Technology>;
};

// Mapping for category-level Lucide icons
const iconComponents: Record<string, LucideIcon> = {
  MonitorSmartphone,
  ServerCog,
  Database,
  PenTool,
  Network,
  Brain,
  ScanEye,
  FileBadge2,
  Feather,
  Clapperboard,
  Binoculars,
  ChartNetwork,
  Users,
  Zap,
};

// Mapping for tech-specific react-icons
const techIconComponents: Record<string, IconType> = {
  nextjs: SiNextdotjs,
  react: SiReact,
  angular: SiAngular,
  typescript: SiTypescript,
  astro: SiAstro,
  tailwindcss: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss3,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  bun: SiBun,
  deno: SiDeno,
  express: SiExpress,
  nestjs: SiNestjs,
  hono: SiHono,
  python: SiPython,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  prisma: SiPrisma,
  drizzleorm: SiDrizzle,
  figma: SiFigma,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  git: SiGit,
  amazonservices: SiAmazon,
  supabase: SiSupabase,
  redis: SiRedis,
  flask: SiFlask,
  fastapi: SiFastapi,
  postman: SiPostman,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  unity: SiUnity,
  illustrator: SiAdobeillustrator,
  photoshop: SiAdobephotoshop,
  canva: SiCanva,
  premierepro: SiAdobepremierepro,
};

const SkillCard: FC<Props> = ({ title, description, iconName, technologies = [] }) => {
  const IconComponent = iconComponents[iconName];

  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 gap-3 pt-2">
      <CardHeader className="pb-3 pt-4">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
              {IconComponent && <IconComponent className="size-5 text-primary" />}
            </span>
          </div>
          <div className="flex-grow">
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow pt-2 pb-3">
        <p className="text-sm text-muted-foreground line-clamp-3 pl-[3.25rem]">
          {description}
        </p>
      </CardContent>

      {technologies.length > 0 && (
        <CardFooter className="pt-3 pb-4 flex flex-wrap gap-x-3 gap-y-2 justify-start items-center">
          {technologies.map((tech) => {
            const TechIcon = techIconComponents[tech.id.toLowerCase()];
            return TechIcon ? (
              <TechIcon
                key={tech.id}
                className="size-5 text-muted-foreground hover:text-primary transition-colors"
                title={tech.name}
              />
            ) : null;
          })}
        </CardFooter>
      )}
    </Card>
  );
};

export default SkillCard;
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SkillCard from '@/components/SkillCard.astro';
import type { TranslatedSkill } from '@/features/projects/type';

interface SkillsTabsProps {
  skills: Array<TranslatedSkill>;
}

export default function SkillsTabs({ skills }: SkillsTabsProps) {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card-wrapper">
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 gap-3 pt-2 bg-background rounded-lg p-6 shadow-sm border">
                <div className="pb-3 pt-4">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                      <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                        {/* Icon placeholder - you'll need to handle icons in React */}
                        <div className="w-5 h-5 bg-primary rounded" />
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex-grow pt-2 pb-3">
                  <p className="text-sm text-muted-foreground line-clamp-3 pl-[3.25rem]">
                    {skill.description}
                  </p>
                </div>
                {skill.technologies && skill.technologies.length > 0 && (
                  <div className="pt-3 pb-4 flex flex-wrap gap-x-3 gap-y-2 justify-start items-center">
                    {skill.technologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
                        title={tech.name}
                      >
                        {/* Tech icon placeholder */}
                        <div className="w-5 h-5 bg-muted-foreground rounded" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="frontend">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frontendSkills.map((skill) => (
            <div key={skill.id} className="skill-card-wrapper">
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 gap-3 pt-2 bg-background rounded-lg p-6 shadow-sm border">
                <div className="pb-3 pt-4">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                      <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                        <div className="w-5 h-5 bg-primary rounded" />
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex-grow pt-2 pb-3">
                  <p className="text-sm text-muted-foreground line-clamp-3 pl-[3.25rem]">
                    {skill.description}
                  </p>
                </div>
                {skill.technologies && skill.technologies.length > 0 && (
                  <div className="pt-3 pb-4 flex flex-wrap gap-x-3 gap-y-2 justify-start items-center">
                    {skill.technologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
                        title={tech.name}
                      >
                        <div className="w-5 h-5 bg-muted-foreground rounded" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="backend">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {backendSkills.map((skill) => (
            <div key={skill.id} className="skill-card-wrapper">
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 gap-3 pt-2 bg-background rounded-lg p-6 shadow-sm border">
                <div className="pb-3 pt-4">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                      <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                        <div className="w-5 h-5 bg-primary rounded" />
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex-grow pt-2 pb-3">
                  <p className="text-sm text-muted-foreground line-clamp-3 pl-[3.25rem]">
                    {skill.description}
                  </p>
                </div>
                {skill.technologies && skill.technologies.length > 0 && (
                  <div className="pt-3 pb-4 flex flex-wrap gap-x-3 gap-y-2 justify-start items-center">
                    {skill.technologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors"
                        title={tech.name}
                      >
                        <div className="w-5 h-5 bg-muted-foreground rounded" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
} 
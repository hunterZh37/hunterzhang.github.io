import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SkillCard from '@/components/SkillCard';       
import type { TranslatedSkill } from '@/features/projects/type';

interface SkillsTabsProps {
  skills: Array<TranslatedSkill>;
}

export default function SkillsTabs({ skills }: SkillsTabsProps) {
  console.log('+++++!!', skills);
  const engineeringSkills = skills.filter(skill => skill.category === 'engineering');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const managementSkills = skills.filter(skill => skill.category === 'management');
console.log('engineeringSkills', engineeringSkills);
console.log('designSkills', designSkills);
console.log('managementSkills', managementSkills);
  return (
    <Tabs defaultValue="engineering" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="engineering">Engineering</TabsTrigger>
        <TabsTrigger value="design">Design</TabsTrigger>
        <TabsTrigger value="management">Management</TabsTrigger>
      </TabsList>
      
      <TabsContent value="engineering">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineeringSkills.map((skill) => (
            <SkillCard key={skill.id} title={skill.title} description={skill.description} iconName={skill.iconName} technologies={skill.technologies} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="design">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designSkills.map((skill) => (
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
      
      <TabsContent value="management">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementSkills.map((skill) => (
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
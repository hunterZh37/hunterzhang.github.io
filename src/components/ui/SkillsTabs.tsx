import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SkillCard from '@/components/ui/skillCard';       
import type { TranslatedSkill } from '@/features/projects/type';

interface SkillsTabsProps {
  skills: Array<TranslatedSkill>;
}

export default function SkillsTabs({ skills }: SkillsTabsProps) {
  const engineeringSkills = skills.filter(skill => skill.category === 'engineering');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const managementSkills = skills.filter(skill => skill.category === 'management');
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
            <SkillCard key={skill.id} title={skill.title} description={skill.description} iconName={skill.iconName} technologies={skill.technologies} />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="management">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementSkills.map((skill) => (
            <SkillCard key={skill.id} title={skill.title} description={skill.description} iconName={skill.iconName} technologies={skill.technologies} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
} 
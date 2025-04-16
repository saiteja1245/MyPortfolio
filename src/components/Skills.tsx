
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C++', level: 75 },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'React', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'PHP', level: 75 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'NoSQL', level: 70 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 70 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeCategory === category.name
                  ? "bg-portfolio-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories
            .filter((category) => category.name === activeCategory)
            .map((category) => (
              <div key={category.name} className="space-y-6 animate-fade-in">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-portfolio-dark">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-portfolio-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-portfolio-dark mb-4">Other Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'UI/UX Design', 'RESTful API', 'Agile/Scrum', 'Machine Learning', 'Data Structures', 'Algorithms', 'Problem Solving', 'Team Leadership'].map((skill) => (
                <span 
                  key={skill} 
                  className="bg-portfolio-light text-portfolio-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


import { Trophy, Medal, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type Achievement = {
  id: number;
  title: string;
  description: string;
  icon: 'trophy' | 'medal' | 'check';
};

const achievements: Achievement[] = [
  {
    id: 1,
    title: "🏅 Academic Excellence",
    description: "Recognized for academic excellence, securing a position in the top 10% of the Dean's List.",
    icon: 'trophy',
  },
  {
    id: 2,
    title: "Secured 5-Star rating in Problem Solving",
    description: "Earned a 5⭐ HackerRank badge in Problem Solving through advanced DSA challenges using C++.",
    icon: 'medal',
  },
  {
    id: 3,
    title: "3rd Place – Web Ka Hackathon",
    description: "Secured 3rd position at Web Ka Hackathon Organized by Team7 for innovative solution development.",
    icon: 'trophy',
  },

];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Competitions & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className="bg-white rounded-lg shadow-sm p-6 card-hover border-t-4 border-portfolio-primary"
            >
              <div className="flex flex-col items-start">
                <div className={cn(
                  "p-3 rounded-full mb-4",
                  achievement.icon === 'trophy' ? "bg-yellow-100 text-yellow-600" :
                  achievement.icon === 'medal' ? "bg-blue-100 text-blue-600" :
                  "bg-green-100 text-green-600"
                )}>
                  {achievement.icon === 'trophy' && <Trophy size={24} />}
                  {achievement.icon === 'medal' && <Medal size={24} />}
                  {achievement.icon === 'check' && <Check size={24} />}
                </div>
                
                <h3 className="text-lg font-bold text-portfolio-dark mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

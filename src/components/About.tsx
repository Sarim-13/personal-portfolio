import React from 'react';
import { Code, Zap, Globe, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      title: " Automation Workflows",
      description: "Built and deployed across various industries"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "50% Efficiency Boost",
      description: "Average improvement in client processes"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Chrome Extension Expert",
      description: "Specialized in browser automation tools"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "AI Integration Specialist",
      description: "Expert in OpenAI, Gemini, and Claude APIs"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFea10-h2GtnCJK1Qxbvmyj8yckI8JEpWfdQ&s"
                  alt="SARIM SAMAD"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-square"
                />
              </div>
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6 scale-105 -z-10"></div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                  About Me
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
  I'm Sarim Samad, an AI & Automation Developer with extensive experience in building intelligent, high-impact workflow solutions. I specialize in automating complex business processes to save time, increase efficiency, and drive growth for businesses of all sizes.
</p>
<p className="text-lg text-gray-700 leading-relaxed mb-8">
  My expertise spans n8n workflow automation, Chrome extension development, and AI integrations using OpenAI, Gemini, and Claude APIs. From data scraping and CRM integrations to advanced automation pipelines, I design solutions that operate seamlessly behind the scenes, helping organizations achieve their goals faster and smarter.
</p>

              </div>

              {/* Skills highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-background rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-primary group-hover:text-white transition-colors duration-300">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Code, Cpu, Globe, Zap, Database, Workflow } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript", "React.js", "Tailwind CSS"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend & APIs",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "REST APIs", "Webhooks", "JSON Processing"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "AI & Automation",
      icon: <Cpu className="w-8 h-8" />,
      skills: ["OpenAI GPT", "Google Gemini", "n8n Workflows", "AI Integrations"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Browser Extensions",
      icon: <Globe className="w-8 h-8" />,
      skills: ["Chrome Extensions", "DOM Manipulation", "Content Scripts", "Background Scripts"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Data & Scraping",
      icon: <Zap className="w-8 h-8" />,
      skills: ["Web Scraping", "Data Processing", "CSV/Excel", "API Integration"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Workflow Design",
      icon: <Workflow className="w-8 h-8" />,
      skills: ["Process Automation", "CRM Integration", "Email Automation", "Task Scheduling"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent automation solutions and modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-2 bg-background group-hover:bg-white/50 rounded-lg transition-all duration-300"
                      >
                        <span className="text-gray-700 font-medium text-sm">
                          {skill}
                        </span>
                        <div className="w-2 h-2 bg-primary rounded-full opacity-70"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
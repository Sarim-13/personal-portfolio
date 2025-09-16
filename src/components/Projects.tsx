import React, { useState } from 'react';
import { ExternalLink, Github, X, Chrome, Bot, Database, Zap } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
  {
    id: 1,
    title: "LinkedIn Auto Comment System (n8n Cloud + AI)",
    shortDescription: "Automated LinkedIn commenting tool powered by n8n workflows and AI",
    fullDescription: "I built an automated LinkedIn engagement system using n8n Cloud. The workflow starts with a Chrome Extension that captures LinkedIn post data and sends it to an n8n webhook. Inside n8n, the workflow processes the post content, uses OpenAI GPT to generate contextually relevant and human-like comments, and then sends the response back to the extension. This enables real-time AI-powered commenting directly on LinkedIn posts, saving time and ensuring professional engagement.",
    techStack: ["Chrome Extension", "n8n Cloud", "OpenAI GPT", "JavaScript", "Webhooks", "LinkedIn"],
    features: [
      "Real-time AI comment generation",
      "Webhook-based Chrome Extension integration",
      "Automated workflow in n8n Cloud",
      "Professional and human-like engagement",
      "Seamless LinkedIn automation"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRDSGKXlJOXffdqsZjy1I_Im0ZVvf72uGfg&s",
    icon: <Chrome className="w-6 h-6" />
  },

    {
  id: 2,
  title: "Job Data Scraper + CRM Integration (n8n Cloud)",
  shortDescription: "Automated job data scraping and seamless CRM integration using n8n Cloud",
  fullDescription: "I developed an automated workflow on n8n Cloud that scrapes job postings from multiple platforms and processes them in real-time. The workflow fetches job data via APIs and web scraping, enriches it with additional details like company info, contact emails, and phone numbers, and then stores the data in Google Sheets. From there, it syncs with a CRM for lead management. The system also applies lead scoring, avoids duplicates, and can trigger automated follow-ups, making job lead generation and management fully streamlined.",
  techStack: ["n8n Cloud", "Node.js", "Web Scraping", "Google Sheets API", "CRM APIs", "Email Automation"],
  features: [
    "Automated job scraping from multiple platforms",
    "Real-time data enrichment with company details",
    "Integration with Google Sheets & CRM",
    "Lead scoring and duplicate detection",
    "Automated email follow-ups"
  ],
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjK1_JnWUNFjT1gobd2VDyHtWdelcXHbdpA&s",
  icon: <Database className="w-6 h-6" />
}

  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative automation solutions that transform business processes and drive measurable results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 p-2 rounded-lg text-primary">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => openModal(project)}
                      className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">
                  {selectedProject.icon}
                </div>
                <h3 className="text-3xl font-bold text-dark">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                    <Bot className="w-5 h-5 text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-primary/10 text-primary text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="flex gap-4 mt-8 pt-6 border-t">
                <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-300">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
                <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                  <Github className="w-4 h-4" />
                  View Code
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
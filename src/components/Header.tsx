import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Header = () => {
  const handleDownloadCV = () => {
  // File path relative to public folder
  const link = document.createElement('a');
  link.href = '/Sarim_Samad_CV.pdf';
  link.download = 'Sarim_Samad_CV.pdf';
  link.click();
};

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl float"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-accent/20 rounded-full blur-2xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-light/30 rounded-full blur-lg float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello, I'm <span className="text-light">Sarim Samad</span>
          </h1>
          <p className="text-xl md:text-2xl text-light mb-8 font-light">
            AI & Automation Developer | n8n Expert
          </p>
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming business workflows with intelligent automation, AI integrations, and innovative solutions that drive efficiency and growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.3s'}}>
          <button
            onClick={handleDownloadCV}
            className="group bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-light transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce-gentle" />
            Download CV
          </button>
          <button
            onClick={handleContactMe}
            className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3"
          >
            <Mail className="w-5 h-5 group-hover:animate-bounce-gentle" />
            Contact Me
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Header;
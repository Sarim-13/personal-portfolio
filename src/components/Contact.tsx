import React from 'react';
import { Mail, Linkedin, Github, MessageCircle, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sarimsamad99@gmail.com",
      link: "mailto:sarimsamad99@gmail.com",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "@sarimsamad99",
      link: "https://www.linkedin.com/in/sarim-samad-a0a3a2354/",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "@sarimsamad99",
      link: "https://github.com/Sarim-13",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+91 8267960838",
      link: "https://wa.me/8267960838",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Let's Connect!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business with intelligent automation? Let's discuss how we can work together to streamline your processes and boost efficiency.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full font-semibold">
              <MapPin className="w-4 h-4" />
              Available for remote projects worldwide
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto group-hover:bg-white/20 transition-all duration-300`}>
                    <div className="group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-white transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 font-medium group-hover:text-white/90 transition-colors duration-300">
                    {method.value}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-dark mb-6">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need custom automation workflows, Chrome extensions, or AI integrations, I'm here to help bring your ideas to life. Let's schedule a consultation to discuss your requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sarimsamad99@gmail.com&su=Hello%20Sarim&body=I%20want%20to%20connect%20with%20you"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3"
>
  <Mail className="w-5 h-5 group-hover:animate-bounce-gentle" />
  Send Email
</a>

                {/* <a
                  href="https://calendly.com/alexjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce-gentle" />
                  Schedule Call
                </a> */}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              © 2025 Sarim Samad. ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
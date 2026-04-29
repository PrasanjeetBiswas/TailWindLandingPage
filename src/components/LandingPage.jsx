import React, { useState, useEffect } from "react";

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navItems = ["Home", "About", "Services", "Contact"];
  const [activeTestimoninal, setActiveTestimoninal] = useState(0);


  const services = [
    {
      title: "AI Innovation",
      description:
        "Cutting-edge artificial intelligence solutions that transform your business operations.",
      icon: "🤖",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure designed for the future of your enterprise.",
      icon: "☁️",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights with our advanced analytics platform.",
      icon: "📊",
      color: "from-green-600 to-teal-600",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      content:
        "This platform revolutionized our entire workflow. The results exceeded our wildest expectations!",
      avatar: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, InnovateLab",
      content:
        "Incredible performance and reliability. Our productivity increased by 300% in just two months.",
      avatar: "MR",
    },
    {
      name: "Elena Petrov",
      role: "Founder, StartupX",
      content:
        "The most intuitive and powerful solution we've ever used. Absolutely game-changing!",
      avatar: "EP",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimoninal((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        </div>
        <header
          className={`relative z-50 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-400 bg-clip-text text-transparent">
                NexaFlow
              </div>
              <div className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
                  <a
                    href="#"
                    className='text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}'
                    key={index}
                    style={{ TransitionDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <button
                className='bg-gradient-to-r from-cyan-500 to-purple-500
                text-white px-6 py-2 rounded-full hover:shadow-lg
                hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110
                transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}'
              >
                Get Started
              </button>
            </div>
          </div>
        </header>

        <section className="relative container mx-auto z-20 px-6 py-20">
          <div className="text-center">
            <h1
              className={`text-6xl md:text-8xl font-bold mb-8 transform-fill duration-1500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}
            >
              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Future
              </span>
              <br />
              <span className="text-white">is Now</span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 mb-12 transition-all duration-1500 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              dignissimos nihil voluptatem repudiandae! Consequuntur, eos. Sunt,
              dignissimos. Reprehenderit, praesentium harum!
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform-fill duration-1500 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-110 transform hover: -translate-y-1">
                Start Your Journey
              </button>
              <button className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-white hover:text-white hover:shadow-xl transition-all duration-300 hover:scale-110">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="absolute bottom-40 right-1/4 w-5 h-5 bg-cyan-400 rounded-full animate-bounce animation-delay-3000"></div>
        </section>

        <section className="relative container z-10 mx-auto px-10 py-20">
          <div className="text-center mb-18">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Dicover The Power Of Innovation With Our Comprehensive Suite Of
              Cutting-Edge Solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${index * 200}ms` }}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-500`}
                ></div>

                <div className="relative z-10 text-center flex flex-col items-center">
                  {/* ICON */}
                  <div className="flex justify-center items-center text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>

                  {/* TITLE */}
                  <div className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </div>

                  {/* DESCRIPTION */}
                  <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container relative z-10 mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    What Our{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Client Says</span>
                </h2>
            </div>
            <div className="relative max-w4xl mx-auto">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 min-h-[300px] flex itmes-center">
                 {
                        testimonials.map((item, index) => (
                            <div 
                                key={index} 
                                className={`transition-all duration-300 absolute inset-0 flex items-center p-8 md:p-12 ${activeTestimoninal == index ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full'}`}>
                                    <div className="text-center w-full">
                                        <div className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
                                            "{item.content}"
                                        </div>
                                        <div className="flex items-center justify-center space-x-4">
                                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                {item.avatar}
                                            </div>
                                            <div className="text-left">
                                                <div className="text-white font-semibold text-lg">
                                                    {item.name}
                                                </div>
                                                <div className="text-gray-400">
                                                    {item.role}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))
                    }

                </div>
                <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_item, index) => (
                    <button className={`w-3 h-3 rounded-full transition-all duration-300 ${index == activeTestimoninal ? 'bg-gradient-to-r from-cyan-400 to-purple-400' : 'bg-gray-600 hove:bg-gray-500'}`} onClick={() => setActiveTestimoninal(index)}>

                    </button>
                ))}
                </div>
            </div>
        </section>
                <div className="border-t border-white/10 mt-12 p-8 text-center text-gray-300">
                &copy; 2025 All Right Reserved
        </div>
      </div>
    </>
  );
}

export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcons } from '../components/component';

export default function Landing() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            Hi, I'm <span className="text-teal-500">Jit</span>
            <br />
            Full Stack Developer
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl">
            I build exceptional and scalable full-stack applications with modern web technologies.
            Passionate about creating efficient, user-friendly solutions.
          </p>

          <div className="flex gap-4 pt-4">
            <Link 
              to="/projects" 
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              View Projects
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-teal-500 text-teal-500 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img 
            src="public/main_assets/image.png" 
            alt="Hero illustration"
            className="max-w-md w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>

      {/* What I Do Section */}
      <section className="py-20 bg-gray-50/50 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "Creating responsive and intuitive user interfaces using modern frameworks like React and Next.js",
                icon: "🎨"
              },
              {
                title: "Backend Development",
                description: "Building robust server-side applications and APIs using Node.js and modern databases",
                icon: "⚙️"
              },
              {
                title: "Full Stack Solutions",
                description: "Delivering end-to-end web applications with seamless integration between frontend and backend",
                icon: "🚀"
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={`/main_assets/Projects/Demo.png`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-600 mb-4">Brief project description highlighting key features and technologies used.</p>
                <div className="flex gap-4">
                  <Link 
                    to="/projects" 
                    className="text-teal-500 font-semibold hover:text-teal-600"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50/50 rounded-3xl">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React", "Node.js", "TypeScript", "MongoDB",
              "Next.js", "TailwindCSS", "PostgreSQL", "Docker"
            ].map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow hover:shadow-md transition-shadow">
                <span className="font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start a Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm always open to discussing new projects and opportunities.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

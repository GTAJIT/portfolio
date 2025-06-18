import React from 'react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="bg-yellow-400 flex flex-col rounded-lg p-6 md:w-1/3">
          <img 
            src="/public/main_assets/image.png" 
            alt="Profile"
            className="rounded-lg w-full max-w-[250px] mx-auto"
          />
          <h1 className="text-4xl font-bold mt-4">Hello, I'm<br />Jit</h1>
          <p className="text-xl mt-2">Full Stack Developer</p>
        </div>

        <div className="md:w-2/3">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p className="text-gray-700">
              I am a passionate full-stack developer with expertise in modern web technologies.
              Focused on creating efficient, scalable, and user-friendly applications.
              Strong problem-solving abilities and a keen eye for detail.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            {/* Experience Items */}
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm">2023-Present</span>
              </div>
              <h4 className="text-gray-600 mb-2">Company Name</h4>
              <p className="text-gray-700">
                Led development of multiple web applications using React, Node.js, and MongoDB.
                Implemented responsive designs and improved application performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-4">
            {[
              { name: "React", level: 90 },
              { name: "Node.js", level: 85 },
              { name: "JavaScript", level: 90 },
              { name: "MongoDB", level: 80 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div 
                    className="h-full bg-yellow-400 rounded" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
              <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm">2019-2023</span>
            </div>
            <h4 className="text-gray-600">University Name</h4>
          </div>
        </div>
      </div>

      {/* Interests Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Hobbies & Interests</h2>
        <div className="flex gap-4 flex-wrap">
          {["Coding", "Reading", "Gaming", "Music"].map((hobby, index) => (
            <span 
              key={index}
              className="bg-yellow-400 px-4 py-2 rounded-full text-sm"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

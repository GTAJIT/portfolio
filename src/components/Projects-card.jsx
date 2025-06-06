import React from 'react';
// import { motion } from 'framer-motion';

const ProjectCard = ({ project  }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-bold">{project.name}</h2>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <div className="flex gap-2 flex-wrap text-sm text-white">
        {project.tags.map((tag, i) => (
          <span key={i} className="bg-blue-600 rounded px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a href={project.repoUrl} className="text-blue-500 underline" target="_blank" rel="noreferrer">Repo</a>
        <a href={project.demoUrl} className="text-green-500 underline" target="_blank" rel="noreferrer">Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;

'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { DOMAIN } from '@/app/lib/constants';
import NewProjectPopup from './NewProjectPopup';
import EditProjectPopup from './EditProjectPopup';
import DeleteConfirmation from './DeleteConfirmation';

export default function ProjectsPage({ isAdmin, userId }) {
  const [projects, setProjects] = useState([]);
  const [isNewProjectPopupOpen, setIsNewProjectPopupOpen] = useState(false);
  const [isEditProjectPopupOpen, setIsEditProjectPopupOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTech, setSelectedTech] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/projects`);
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleNewProjectPopupToggle = () => {
    setIsNewProjectPopupOpen(!isNewProjectPopupOpen);
  };

  const handleEditProjectPopupToggle = project => {
    setSelectedProject(project);
    setIsEditProjectPopupOpen(!isEditProjectPopupOpen);
  };

  const handleDeleteConfirmationToggle = project => {
    setSelectedProject(project);
    setIsDeleteConfirmationOpen(!isDeleteConfirmationOpen);
  };

  const getValidThumbnailSrc = src => {
    if (src.startsWith('http') || src.startsWith('/')) {
      return src;
    }
    return `/${src}`;
  };

  const handleTechChange = tech => {
    setSelectedTech(tech);
  };

  const filteredProjects =
    selectedTech === 'All'
      ? projects || []
      : (projects || []).filter(project =>
          project.technologies.includes(selectedTech),
        );

  return (
    <section className='py-20 text-white relative'>
      <motion.h2
        className='text-5xl font-extrabold text-center mb-16 text-green-dark'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className='flex flex-wrap justify-center mb-8'>
        {/* Filters */}
        {['All', 'React', 'Next.js', 'Node.js'].map(tech => (
          <button
            key={tech}
            onClick={() => handleTechChange(tech)}
            className={`px-4 py-2 rounded-full m-2 transition-all duration-300 ${
              selectedTech === tech
                ? 'bg-green-dark text-black shadow-lg backdrop-filter backdrop-blur-md bg-opacity-40'
                : 'bg-white bg-opacity-10 text-white hover:bg-green-dark hover:text-black'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className='relative rounded-lg shadow-2xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 overflow-hidden'
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='rounded-lg p-4 bg-black bg-opacity-50'>
                <Image
                  src={getValidThumbnailSrc(project.thumbnail)}
                  alt={`${project.title} Thumbnail`}
                  width={600}
                  height={300}
                  className='w-full h-40 object-cover rounded-lg mb-4 shadow-lg'
                />

                <h3 className='text-2xl font-semibold text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-300 text-sm mb-4'>
                  {project.description}
                </p>
                <div className='flex justify-start items-center mb-4'>
                  {project.technologies.map((tech, i) => (
                    <div key={i} className='flex items-center mr-4'>
                      {tech === 'React' && (
                        <FaReact className='text-green-light text-lg mr-1' />
                      )}
                      {tech === 'Next.js' && (
                        <SiNextdotjs className='text-gray-300 text-lg mr-1' />
                      )}
                      {tech === 'Node.js' && (
                        <FaNodeJs className='text-green-light text-lg mr-1' />
                      )}
                      <span className='text-white text-sm'>{tech}</span>
                    </div>
                  ))}
                </div>
                <div className='flex space-x-4'>
                  <a
                    href={project.projectLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-green-light hover:text-white transition-colors'
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repositoryLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-green-light hover:text-white transition-colors'
                  >
                    Code
                  </a>
                </div>
                {isAdmin && (
                  <div className='flex justify-end space-x-2 mt-4'>
                    <button
                      onClick={() => handleEditProjectPopupToggle(project)}
                      className='text-yellow-500 hover:text-white transition-colors'
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteConfirmationToggle(project)}
                      className='text-red-500 hover:text-white transition-colors'
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className='text-center text-gray-300'>No projects available.</p>
      )}

      {isAdmin && (
        <button
          onClick={handleNewProjectPopupToggle}
          className='fixed bottom-32 right-10 bg-green-dark text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform backdrop-filter backdrop-blur-md bg-opacity-40'
        >
          <FaPlus size={24} />
        </button>
      )}

      {isNewProjectPopupOpen && (
        <NewProjectPopup
          userId={userId}
          isOpen={isNewProjectPopupOpen}
          onClose={handleNewProjectPopupToggle}
        />
      )}

      {isEditProjectPopupOpen && selectedProject && (
        <EditProjectPopup
          project={selectedProject}
          isOpen={isEditProjectPopupOpen}
          onClose={handleEditProjectPopupToggle}
          onProjectUpdated={setProjects} // Refresh the projects after update
        />
      )}

      {isDeleteConfirmationOpen && selectedProject && (
        <DeleteConfirmation
          project={selectedProject}
          isOpen={isDeleteConfirmationOpen}
          onClose={handleDeleteConfirmationToggle}
          onProjectDeleted={setProjects} // Refresh the projects after deletion
        />
      )}
    </section>
  );
}

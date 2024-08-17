'use client';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { DOMAIN } from '@/app/lib/constants';

export default function EditProjectPopup({
  project,
  isOpen,
  onClose,
  onProjectUpdated,
}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    projectLink: '',
    repositoryLink: '',
    thumbnail: '',
  });

  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        projectLink: project.projectLink,
        repositoryLink: project.repositoryLink,
        thumbnail: project.thumbnail,
      });
      setTechnologies(project.technologies);
    }
  }, [project]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTechnologyChange = (e, index) => {
    const updatedTechnologies = technologies.map((tech, i) =>
      i === index ? e.target.value : tech,
    );
    setTechnologies(updatedTechnologies);
  };

  const addTechnologyField = () => {
    setTechnologies([...technologies, '']);
  };

  const removeTechnologyField = index => {
    const updatedTechnologies = technologies.filter((_, i) => i !== index);
    setTechnologies(updatedTechnologies);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const projectData = {
      id: project.id, // تأكد من تمرير الـ ID
      title: formData.title,
      description: formData.description,
      technologies: technologies.map(tech => ({ name: tech.trim() })),
      projectLink: formData.projectLink,
      repositoryLink: formData.repositoryLink,
      thumbnail: formData.thumbnail,
    };

    try {
      const response = await fetch(`${DOMAIN}/api/projects/${project.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        const updatedProject = await response.json();
        toast.success('Project updated successfully!');
        onProjectUpdated(prevProjects =>
          prevProjects.map(p =>
            p.id === updatedProject.id ? updatedProject : p,
          ),
        );
        onClose();
      } else {
        const errorData = await response.json();
        toast.error(`Failed to update project: ${errorData.message}`);
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    >
      <div className='max-h-screen overflow-y-auto'>
        <h2 className='text-2xl font-bold mb-4'>Edit Project</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='title' className='block text-gray-700'>
                Title
              </label>
              <input
                type='text'
                name='title'
                id='title'
                value={formData.title}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
            <div>
              <label htmlFor='description' className='block text-gray-700'>
                Description
              </label>
              <input
                type='text'
                name='description'
                id='description'
                value={formData.description}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
            <div>
              <label htmlFor='projectLink' className='block text-gray-700'>
                Project Link
              </label>
              <input
                type='url'
                name='projectLink'
                id='projectLink'
                value={formData.projectLink}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
            <div>
              <label htmlFor='repositoryLink' className='block text-gray-700'>
                Repository Link
              </label>
              <input
                type='url'
                name='repositoryLink'
                id='repositoryLink'
                value={formData.repositoryLink}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
            <div className='col-span-2'>
              <label htmlFor='thumbnail' className='block text-gray-700'>
                Thumbnail URL
              </label>
              <input
                type='text'
                name='thumbnail'
                id='thumbnail'
                value={formData.thumbnail}
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded'
                required
              />
            </div>
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700'>Technologies</label>
            {technologies.map((tech, index) => (
              <div key={index} className='flex items-center mb-2'>
                <input
                  type='text'
                  value={tech}
                  onChange={e => handleTechnologyChange(e, index)}
                  className='w-full px-3 py-2 border rounded mr-2'
                  required
                />
                <button
                  type='button'
                  onClick={() => removeTechnologyField(index)}
                  className='text-red-500 hover:text-red-700'
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type='button'
              onClick={addTechnologyField}
              className='mt-2 text-green-dark hover:text-green'
            >
              Add Technology
            </button>
          </div>

          <button
            type='submit'
            className='w-full bg-green-dark text-white py-2 rounded mt-4'
          >
            Update Project
          </button>
        </form>
      </div>
    </Modal>
  );
}

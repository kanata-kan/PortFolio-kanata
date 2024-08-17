'use client';
import { DOMAIN } from '@/app/lib/constants';

export default function DeleteConfirmation({
  project,
  isOpen,
  onClose,
  onProjectDeleted,
}) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`${DOMAIN}/api/projects/${project.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onProjectDeleted(prevProjects =>
          prevProjects.filter(p => p.id !== project.id),
        );
        onClose();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return isOpen ? (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white text-slate-950 p-4 rounded'>
        <h2 className='text-2xl mb-4'>
          Are you sure you want to delete this project?
        </h2>
        <p className='mb-4'>{project.title}</p>
        <button
          onClick={handleDelete}
          className='bg-red-500 text-white py-2 px-4 rounded'
        >
          Yes, Delete
        </button>
        <button
          onClick={onClose}
          className='ml-2 bg-gray-300 text-black py-2 px-4 rounded'
        >
          Cancel
        </button>
      </div>
    </div>
  ) : null;
}

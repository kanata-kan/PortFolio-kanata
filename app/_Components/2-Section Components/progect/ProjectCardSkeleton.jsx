import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCardSkeleton() {
  return (
    <motion.div
      className='relative rounded-lg shadow-2xl p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg overflow-hidden'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='rounded-lg p-4 bg-black bg-opacity-50'>
        <div className='w-full h-40 bg-gray-700 rounded-lg mb-4 shimmer'></div>
        <div className='h-6 bg-gray-700 rounded w-3/4 mb-2 shimmer'></div>
        <div className='h-4 bg-gray-700 rounded w-1/2 mb-4 shimmer'></div>
        <div className='flex justify-start items-center mb-4 space-x-4'>
          <div className='h-4 bg-gray-700 rounded w-12 shimmer'></div>
          <div className='h-4 bg-gray-700 rounded w-12 shimmer'></div>
          <div className='h-4 bg-gray-700 rounded w-12 shimmer'></div>
        </div>
        <div className='h-4 bg-gray-700 rounded w-1/4 shimmer'></div>
      </div>
    </motion.div>
  );
}

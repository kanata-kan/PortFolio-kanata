'use client';
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaLock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { DOMAIN } from '@/app/lib/constants';

export default function Register({ userId }) {
  const route = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    identityNumber: '',
  });
  if (userId) route.push('/');
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${DOMAIN}/api/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Registration successful!');
        // You can redirect the user to another page or reset the form here
      } else {
        const errorData = await response.json();
        toast.error(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    }
  };

  return (
    <div className='min-h-screen bg-gradient-radial from-black-darkest to-black-light flex items-center justify-center'>
      <ToastContainer />
      <div className='bg-white-dark p-10 rounded-xl shadow-lg w-full max-w-lg'>
        <h2 className='text-3xl font-semibold mb-8 text-center text-green-dark'>
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='relative'>
            <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-dark' />
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full pl-10 py-3 px-4 text-black-darkest bg-white-light border-2 border-green-dark rounded-md focus:outline-none focus:ring-2 focus:ring-green-light placeholder-transparent peer'
              placeholder='Name'
              required
            />
            <label
              htmlFor='name'
              className='absolute left-10 top-0 text-green-dark transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-light peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-light'
            >
              Name
            </label>
          </div>
          <div className='relative'>
            <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-dark' />
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full pl-10 py-3 px-4 text-black-darkest bg-white-light border-2 border-green-dark rounded-md focus:outline-none focus:ring-2 focus:ring-green-light placeholder-transparent peer'
              placeholder='Email'
              required
            />
            <label
              htmlFor='email'
              className='absolute left-10 top-0 text-green-dark transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-light peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-light'
            >
              Email
            </label>
          </div>
          <div className='relative'>
            <FaPhone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-dark' />
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='w-full pl-10 py-3 px-4 text-black-darkest bg-white-light border-2 border-green-dark rounded-md focus:outline-none focus:ring-2 focus:ring-green-light placeholder-transparent peer'
              placeholder='Phone'
              required
            />
            <label
              htmlFor='phone'
              className='absolute left-10 top-0 text-green-dark transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-light peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-light'
            >
              Phone
            </label>
          </div>
          <div className='relative'>
            <FaIdCard className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-dark' />
            <input
              type='text'
              id='identityNumber'
              name='identityNumber'
              value={formData.identityNumber}
              onChange={handleChange}
              className='w-full pl-10 py-3 px-4 text-black-darkest bg-white-light border-2 border-green-dark rounded-md focus:outline-none focus:ring-2 focus:ring-green-light placeholder-transparent peer'
              placeholder='Identity Number'
              required
            />
            <label
              htmlFor='identityNumber'
              className='absolute left-10 top-0 text-green-dark transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-light peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-light'
            >
              Identity Number
            </label>
          </div>
          <div className='relative'>
            <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-dark' />
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full pl-10 py-3 px-4 text-black-darkest bg-white-light border-2 border-green-dark rounded-md focus:outline-none focus:ring-2 focus:ring-green-light placeholder-transparent peer'
              placeholder='Password'
              required
            />
            <label
              htmlFor='password'
              className='absolute left-10 top-0 text-green-dark transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-light peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-light'
            >
              Password
            </label>
          </div>
          <div className='relative'>
            <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green-dark' />
            <input
              type='password'
              id='passwordConfirm'
              name='passwordConfirm'
              value={formData.passwordConfirm}
              onChange={handleChange}
              className='w-full pl-10 py-3 px-4 text-black-darkest bg-white-light border-2 border-green-dark rounded-md focus:outline-none focus:ring-2 focus:ring-green-light placeholder-transparent peer'
              placeholder='Confirm Password'
              required
            />
            <label
              htmlFor='passwordConfirm'
              className='absolute left-10 top-0 text-green-dark transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-green-light peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-light'
            >
              Confirm Password
            </label>
          </div>
          <button
            type='submit'
            className='w-full bg-green-dark  py-3 rounded-lg shadow-lg hover:bg-green text-black-light transition-all'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

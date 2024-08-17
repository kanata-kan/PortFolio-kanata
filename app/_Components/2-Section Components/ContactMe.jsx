'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaRegCommentDots } from 'react-icons/fa';
import Lottie from 'lottie-react';
import sskAnimation from '../../../public/Animation - 1714325389766';

export default function ContactMe() {
  const [state, handleSubmit] = useForm('xbjnwjzw');

  return (
    <section id='contact' className='py-16 px-4 lg:px-20 text-white'>
      <h2 className='text-4xl font-bold text-center mb-10'>Contact Me</h2>

      <div className='max-w-3xl mx-auto'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 gap-y-6'>
            {/* حقل الاسم */}
            <div className='relative'>
              <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green' />
              <label className='block text-sm font-medium text-gray-200'>
                Name
              </label>
              <input
                type='text'
                name='name' // إضافة الاسم كجزء من البيانات المرسلة
                className='mt-1 block w-full pl-10 pr-4 py-3 text-base placeholder-gray-400 border-b-2 border-green focus:outline-none focus:border-green-light bg-transparent text-white'
                placeholder='Your Name'
              />
            </div>

            {/* حقل البريد الإلكتروني */}
            <div className='relative'>
              <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green' />
              <label className='block text-sm font-medium text-gray-200'>
                Email
              </label>
              <input
                type='email'
                name='email'
                className='mt-1 block w-full pl-10 pr-4 py-3 text-base placeholder-gray-400 border-b-2 border-green focus:outline-none focus:border-green-light bg-transparent text-white'
                placeholder='Your Email'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </div>

            {/* حقل الرسالة */}
            <div className='relative'>
              <FaRegCommentDots className='absolute left-3 top-1/2 transform -translate-y-1/2 text-green' />
              <label className='block text-sm font-medium text-gray-200'>
                Message
              </label>
              <textarea
                name='message'
                className='mt-1 block w-full pl-10 pr-4 py-3 text-base placeholder-gray-400 border-b-2 border-green focus:outline-none focus:border-green-light bg-transparent text-white'
                rows='4'
                placeholder='Your Message'
              ></textarea>
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>

            {/* زر الإرسال */}
            <div className='text-center'>
              <button
                type='submit'
                disabled={state.submitting}
                className='inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-light'
              >
                {state.submitting === true ? 'Loading...' : 'Send Message'}
              </button>
            </div>
          </div>
        </form>

        {/* رسالة نجاح أو فشل */}
        {state.succeeded && (
          <div className='text-center mt-4'>
            <p className='text-green font-bold flex justify-center items-center'>
              <Lottie
                style={{ width: 40, marginRight: 10 }}
                animationData={sskAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          </div>
        )}
        {state.errors && state.errors.length > 0 && (
          <div className='text-center mt-4'>
            <p className='text-red-500 font-bold'>
              The message was not sent ☹️
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'; // استيراد المكون Link من Next.js

export default function Footer() {
  return (
    <footer className='bg-black py-12 px-4 text-white'>
      <div className='max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* الشعار أو عنوان الموقع */}
        <div className='flex flex-col items-center lg:items-start'>
          <img src='/images/Logo.jpg' alt='Logo' className='h-16 mb-4' />
          <p className='text-gray-400 mb-4 text-center lg:text-left'>
            Building the future, one line of code at a time.
          </p>
          <div className='flex space-x-6 mt-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook
                size={24}
                className='text-gray-400 hover:text-teal-400 transition-colors'
              />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter
                size={24}
                className='text-gray-400 hover:text-teal-400 transition-colors'
              />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin
                size={24}
                className='text-gray-400 hover:text-teal-400 transition-colors'
              />
            </a>
          </div>
        </div>

        {/* روابط التنقل */}
        <div className='flex flex-col items-center lg:items-start'>
          <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-center lg:text-left'>
            <li>
              <Link href='/' legacyBehavior>
                Home
              </Link>
            </li>
            <li>
              <Link href='#About' legacyBehavior>
                About
              </Link>
            </li>
            <li>
              <Link href='#Projects' legacyBehavior>
                Projects
              </Link>
            </li>
            <li>
              <Link href='#Contact' legacyBehavior>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* نموذج الاشتراك في النشرة الإخبارية */}
        <div className='flex flex-col items-center lg:items-start'>
          <h3 className='text-lg font-bold mb-4'>
            Subscribe to our Newsletter
          </h3>
          <form className='w-full'>
            <input
              type='email'
              className='w-full px-4 py-2 mb-4 rounded-lg text-black'
              placeholder='Enter your email'
            />
            <button
              type='submit'
              className='w-full px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='mt-8 text-center border-t border-gray-700 pt-4'>
        <p className='text-gray-400'>
          © 2024 Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

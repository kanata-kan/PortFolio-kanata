import Link from 'next/link';
import {
  FiUser,
  FiMenu,
  FiMail,
  FiUserPlus,
  FiLogOut,
  FiLogIn,
} from 'react-icons/fi';

export default function NavbarLinks({ isAuthenticated, handleLoginLogout }) {
  return (
    <>
      <Link
        href='/About'
        className='navbar-link hover:text-gray-400 transition duration-300 flex items-center relative'
      >
        <FiUser className='mr-2' /> About
      </Link>
      <Link
        href='/Projects'
        className='navbar-link hover:text-gray-400 transition duration-300 flex items-center relative'
      >
        <FiMenu className='mr-2' /> Projects
      </Link>
      <Link
        href='/Contact'
        className='navbar-link hover:text-gray-400 transition duration-300 flex items-center relative'
      >
        <FiMail className='mr-2' /> Contact
      </Link>
      {!isAuthenticated && (
        <Link
          href='/Register'
          className='navbar-link hover:text-gray-400 transition duration-300 flex items-center relative'
        >
          <FiUserPlus className='mr-2' /> Register
        </Link>
      )}
      <button
        onClick={handleLoginLogout}
        className='navbar-link hover:text-gray-400 transition duration-300 flex items-center focus:outline-none relative'
      >
        {isAuthenticated ? (
          <>
            <FiLogOut className='mr-2' /> Logout
          </>
        ) : (
          <>
            <FiLogIn className='mr-2' /> Login
          </>
        )}
      </button>
    </>
  );
}

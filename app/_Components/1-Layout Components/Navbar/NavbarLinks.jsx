import Link from 'next/link';
import {
  FiUser,
  FiMenu,
  FiMail,
  FiUserPlus,
  FiLogOut,
  FiLogIn,
} from 'react-icons/fi';

export default function NavbarLinks({
  isAuthenticated,
  handleLoginLogout,
  onLinkClick,
}) {
  return (
    <>
      <Link
        href='/About'
        className='navbar-link hover:text-gray-400 transition duration-300 flex items-center relative'
        onClick={onLinkClick} // إضافة استدعاء الدالة هنا
      >
        <FiUser className='mr-2' /> About
      </Link>
      <Link
        href='/Projects'
        className='navbar-link hover:text-gray-400 transition duration-300 flex items-center relative'
        onClick={onLinkClick} // إضافة استدعاء الدالة هنا
      >
        <FiMenu className='mr-2' /> Projects
      </Link>
      <Link
        href='/Contact'
        className='navbar-link hover:text-gray-400 transition duration-300 flex items-center relative'
        onClick={onLinkClick} // إضافة استدعاء الدالة هنا
      >
        <FiMail className='mr-2' /> Contact
      </Link>
      {!isAuthenticated && (
        <Link
          href='/Register'
          className='navbar-link hover:text-gray-400 transition duration-300 flex items-center relative'
          onClick={onLinkClick} // إضافة استدعاء الدالة هنا للتسجيل
        >
          <FiUserPlus className='mr-2' /> Register
        </Link>
      )}
      <button
        onClick={() => {
          handleLoginLogout();
          onLinkClick();
        }} // دمج الدالتين للزر
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

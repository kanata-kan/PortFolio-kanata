'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarLinks from './NavbarLinks';
import LoginModal from './LoginModal';
import Link from 'next/link';

export default function Navbar({ name, isAdmin, userId }) {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // حالة للإغلاق
  const [isAuthenticated, setIsAuthenticated] = useState(!!userId);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // حالة loading للتحكم في الـ spinner

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const appElement = document.getElementById('__next');
    if (appElement) {
      Modal.setAppElement(appElement);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuOpen &&
        !event.target.closest('.menu-dropdown') &&
        !event.target.closest('.md\\:hidden button')
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  const handleMenuToggle = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 500); // مدة الرسوم المتحركة
    } else {
      setMenuOpen(true);
    }
  };

  const handleLoginLogout = async () => {
    if (isAuthenticated) {
      try {
        const response = await fetch('http://localhost:3000/api/user/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          toast.success('Logout successful!');
          setIsAuthenticated(false);
        } else {
          const errorData = await response.json();
          toast.error(`Logout failed: ${errorData.message}`);
        }
      } catch (error) {
        toast.error('An unexpected error occurred');
      }
    } else {
      setModalIsOpen(true);
    }

    // التأكد من استدعاء handleMenuToggle فقط على الشاشات الصغيرة
    if (window.innerWidth < 768) {
      handleMenuToggle();
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // إغلاق القائمة عند الضغط على أي رابط
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    setLoading(true); // بدء التحميل عند إرسال الطلب

    try {
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        toast.success('Login successful!');
        setIsAuthenticated(true);
        setModalIsOpen(false);
      } else {
        const errorData = await response.json();
        toast.error(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false); // إيقاف التحميل بعد انتهاء الطلب
    }
  };

  const handleInputChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <nav className='bg-black text-white shadow-md px-20 transition-all duration-500 fixed top-0 left-0 w-full z-50'>
      <ToastContainer />
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold'>
          Kanata JS
        </Link>
        <div className='hidden md:flex items-center space-x-8'>
          {isAuthenticated && (
            <span className='text-green-light font-semibold'>{name}</span>
          )}
          <NavbarLinks
            isAuthenticated={isAuthenticated}
            handleLoginLogout={handleLoginLogout}
            onLinkClick={handleLinkClick} // تمرير الدالة لإغلاق القائمة عند الضغط على أي رابط
          />
        </div>
        <div className='md:hidden flex items-center'>
          <button
            onClick={handleMenuToggle}
            className='text-2xl focus:outline-none'
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`menu-dropdown md:hidden flex flex-col items-center space-y-4 py-4 bg-black transition-all duration-500 transform ${
          menuOpen ? 'open' : ''
        } ${isClosing ? 'closing' : ''}`}
      >
        {isAuthenticated && (
          <span className='text-green-light font-semibold'>{name}</span>
        )}
        <NavbarLinks
          isAuthenticated={isAuthenticated}
          handleLoginLogout={handleLoginLogout}
          onLinkClick={handleLinkClick} // تمرير الدالة لإغلاق القائمة عند الضغط على أي رابط
        />
      </div>

      <LoginModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        loginData={loginData}
        handleInputChange={handleInputChange}
        handleLoginSubmit={handleLoginSubmit}
        loading={loading} // تمرير حالة التحميل إلى LoginModal
      />
    </nav>
  );
}

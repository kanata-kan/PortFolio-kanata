'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // أيقونة السهم للأعلى

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // التحكم في ظهور الزر بناءً على التمرير
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='relative'>
      {isVisible && (
        <button
          onClick={scrolToTop}
          className='fixed bottom-10 right-10 z-50 bg-green-dark text-white p-3 rounded-full shadow-lg hover:bg-green-light transition-colors'
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

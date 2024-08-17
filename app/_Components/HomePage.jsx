import React from 'react';
import HeroSection from './2-Section Components/HeroSection';
import AboutMe from './2-Section Components/AboutMe';
import ContactMe from './2-Section Components/ContactMe';
import ProjectsPage from './2-Section Components/progect/ProjectsPage';
import { verifyTokenForPage } from '../lib/verifyToken';
import { cookies } from 'next/headers';

export default function HomePage() {
  const jwtToken = cookies().get('jwtToken')?.value;
  const payload = verifyTokenForPage(jwtToken);
  const userId = payload?.userId;
  const isAdmin = payload?.isAdmin;

  return (
    <div className='relative'>
      {/* الخلفية الرئيسية */}
      <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gray-900 via-teal-800 to-black z-0'></div>

      {/* تأثير النقاط النصفية (halftone) مع مزج الخلفيات */}
      <div className='absolute top-0 right-0 w-full h-full pointer-events-none z-10 background'>
        <svg
          className='absolute top-0 left-0 opacity-75' /* زيادة التباين */
          width='100%'
          height='100%'
          viewBox='0 0 1200 800'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
        >
          <defs>
            <pattern
              id='dotPattern'
              patternUnits='userSpaceOnUse'
              width='20'
              height='20'
            >
              <circle
                cx='10'
                cy='10'
                r='5'
                fill='url(#grad2)'
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(0, 255, 171, 0.8))',
                }} /* إضافة توهج */
              />
            </pattern>
            <radialGradient
              id='grad2'
              cx='50%'
              cy='50%'
              r='50%'
              fx='50%'
              fy='50%'
            >
              <stop
                offset='0%'
                style={{ stopColor: '#00FFAB', stopOpacity: 1 }}
              />
              <stop
                offset='100%'
                style={{ stopColor: '#00FFFF', stopOpacity: 0.9 }}
              />{' '}
              /* تقليل الشفافية */
            </radialGradient>
          </defs>
          <rect width='1200' height='800' fill='url(#dotPattern)' />
        </svg>
        <div className='background'></div>
      </div>

      {/* المحتوى */}
      <div className='relative md:px-10 lg:px-20'>
        <div className='desktop-only'>
          <HeroSection />
          <AboutMe />
          <ProjectsPage isAdmin={isAdmin} userId={userId} />
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

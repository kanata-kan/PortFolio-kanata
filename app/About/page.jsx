import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJs,
  FaHtml5,
  FaCss3,
  FaDatabase,
} from 'react-icons/fa';
import { FiGitBranch, FiGithub } from 'react-icons/fi'; // استيراد الأيقونات من react-icons/fi

import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
} from 'react-icons/si';
import Head from 'next/head';

export default function AboutPage() {
  const skills = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={50} color='#000000' alt='Next.js logo' />,
      percentage: 80,
    },
    {
      name: 'React.js',
      icon: <FaReact size={50} color='#61DBFB' alt='React.js logo' />,
      percentage: 80,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={50} color='#38B2AC' alt='Tailwind CSS logo' />,
      percentage: 75,
    },
    {
      name: 'JavaScript',
      icon: <FaJs size={50} color='#F7DF1E' alt='JavaScript logo' />,
      percentage: 70,
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap size={50} color='#563D7C' alt='Bootstrap logo' />,
      percentage: 60,
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql size={50} color='#336791' alt='PostgreSQL logo' />,
      percentage: 70,
    },
    {
      name: 'Prisma',
      icon: <SiPrisma size={50} color='#2D3748' alt='Prisma logo' />,
      percentage: 65,
    },
    {
      name: 'HTML',
      icon: <FaHtml5 size={50} color='#E34C26' alt='HTML logo' />,
      percentage: 90,
    },
    {
      name: 'CSS',
      icon: <FaCss3 size={50} color='#264de4' alt='CSS logo' />,
      percentage: 90,
    },
    {
      name: 'Git',
      icon: <FiGitBranch size={50} color='#F1502F' alt='Git logo' />,
      percentage: 75,
    },
    {
      name: 'GitHub',
      icon: <FiGithub size={50} color='#181717' alt='GitHub logo' />,
      percentage: 80,
    },
  ];

  return (
    <>
      <Head>
        <title>About Me - Fullstack JS Developer</title>
        <meta
          name='description'
          content='Learn more about a self-taught Fullstack JS Developer specializing in web applications using modern JavaScript technologies like React, Next.js, and Node.js.'
        />
        <meta
          name='keywords'
          content='Fullstack developer, JavaScript, React, Next.js, Node.js, Tailwind CSS, Prisma, PostgreSQL'
        />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content='About Me - Fullstack JS Developer' />
        <meta
          property='og:description'
          content='Learn more about a self-taught Fullstack JS Developer...'
        />
        <meta property='og:image' content='/path-to-your-image.jpg' />
        <meta property='og:url' content='https://yourwebsite.com/about' />
        <meta property='og:type' content='website' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              jobTitle: 'Fullstack JS Developer',
              email: 'kanata10kan@gmail.com',
              sameAs: [
                'https://www.linkedin.com/in/yourprofile',
                'https://github.com/yourprofile',
              ],
              knowsAbout: [
                'JavaScript',
                'React',
                'Next.js',
                'Node.js',
                'Tailwind CSS',
              ],
            }),
          }}
        />
      </Head>
      <section className='min-h-screen py-20 px-4 mt-14 lg:px-20 bg-gradient-to-br from-gray-900 via-teal-800 to-black text-white'>
        <div className='container mx-auto'>
          <h1 className='text-4xl font-bold text-center mb-10'>
            Fullstack JS Developer Portfolio
          </h1>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <p className='text-xl leading-relaxed'>
              I am a self-taught Fullstack JS Developer specializing in building
              and developing web applications using the latest JavaScript
              technologies. My key project, MaroTrips, showcases my capabilities
              in both frontend and backend development. I am currently expanding
              my skills in Node.js and Express.
            </p>
          </div>
          <div className='mb-16'>
            <h2 className='text-3xl font-semibold text-center mb-8'>
              My Skills
            </h2>
            <div className='flex flex-wrap justify-center items-center space-x-4 mb-10'>
              {skills.map(skill => (
                <div
                  key={skill.name}
                  className='m-2 flex-shrink-0 text-center hover:scale-105 transition-transform duration-300'
                >
                  {skill.icon}
                  <p className='mt-2'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='text-center'>
            <h2 className='text-3xl font-semibold text-center mb-8'>
              Get in Touch
            </h2>
            <p>
              Feel free to reach out to me via email at{' '}
              <a href='mailto:kanata10kan@gmail.com' className='text-green-500'>
                Contact me via email
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

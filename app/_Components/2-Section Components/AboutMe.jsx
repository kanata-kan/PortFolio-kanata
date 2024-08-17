// استيراد الأيقونات من الحزم الصحيحة
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJs,
  FaDatabase,
} from 'react-icons/fa';

import { FiGitBranch, FiGithub } from 'react-icons/fi'; // تصحيح مكان الاستيراد لهذين الأيقونتين

import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
} from 'react-icons/si';

export default function AboutMe() {
  // قائمة المهارات مع الأيقونات والنسب
  const skills = [
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={50} color='#000000' />,
      percentage: 80,
    },
    {
      name: 'React.js',
      icon: <FaReact size={50} color='#61DBFB' />,
      percentage: 80,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={50} color='#38B2AC' />,
      percentage: 75,
    },
    {
      name: 'JavaScript',
      icon: <FaJs size={50} color='#F7DF1E' />,
      percentage: 70,
    },
    {
      name: 'Bootstrap',
      icon: <FaBootstrap size={50} color='#563D7C' />,
      percentage: 60,
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql size={50} color='#336791' />,
      percentage: 70,
    },
    {
      name: 'Prisma',
      icon: <SiPrisma size={50} color='#2D3748' />,
      percentage: 65,
    },
    // إضافة Git
    {
      name: 'Git',
      icon: <FiGitBranch size={50} color='#F1502F' />, // اللون الرمزي لـ Git
      percentage: 75,
    },
    // إضافة GitHub
    {
      name: 'GitHub',
      icon: <FiGithub size={50} color='#181717' />, // اللون الرمزي لـ GitHub
      percentage: 80,
    },
  ];

  return (
    <section className='flex flex-col items-center justify-center py-20 text-white'>
      <h2 className='text-4xl font-bold mb-10'>About Me</h2>

      {/* نبذة مختصرة */}
      <p className='text-center max-w-3xl mb-10'>
        I am a self-taught Fullstack JS Developer specializing in building and
        developing web applications using the latest JavaScript technologies. My
        key project, MaroTrips, showcases my capabilities in both frontend and
        backend development. I am currently expanding my skills in Node.js and
        Express.
      </p>

      {/* الأيقونات لعرض المهارات */}
      <div className='flex flex-wrap justify-center items-center space-x-8 mb-10'>
        {skills.map(skill => (
          <div key={skill.name} className='m-2 flex-shrink-0'>
            {skill.icon}
          </div>
        ))}
      </div>

      {/* الرسم البياني لتوزيع المهارات */}
      <div className='w-full max-w-lg mx-auto'>
        <div className=' rounded-lg p-6'>
          <h3 className='text-2xl font-semibold mb-4'>Skills Distribution</h3>
          <div className='space-y-4'>
            {skills.map(skill => (
              <div key={skill.name}>
                <span className='text-lg'>{skill.name}</span>
                <div className='bg-gray-700 rounded-full h-2 mt-1'>
                  <div
                    className={`h-2 rounded-full`}
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor:
                        skill.name === 'Next.js' || skill.name === 'React.js'
                          ? '#61DBFB'
                          : skill.name === 'Tailwind CSS'
                          ? '#38B2AC'
                          : skill.name === 'JavaScript'
                          ? '#F7DF1E'
                          : skill.name === 'PostgreSQL'
                          ? '#336791'
                          : skill.name === 'Prisma'
                          ? '#2D3748'
                          : '#563D7C',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

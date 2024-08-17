import Head from 'next/head';
import ProjectsPage from '../_Components/2-Section Components/progect/ProjectsPage';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <Head>
        <title>My Projects - Fullstack JS Developer</title>
        <meta
          name='description'
          content='Explore the diverse range of projects developed by a Fullstack JS Developer. From frontend to backend, see the skills and technologies in action.'
        />
        <meta
          name='keywords'
          content='JavaScript projects, Fullstack developer, React projects, Next.js projects, web development'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:title'
          content='My Projects - Fullstack JS Developer'
        />
        <meta
          property='og:description'
          content='Explore the diverse range of projects developed by a Fullstack JS Developer. From frontend to backend, see the skills and technologies in action.'
        />
        <meta property='og:image' content='/path-to-your-projects-image.jpg' />
        <meta property='og:url' content='https://yourwebsite.com/projects' />
        <meta property='og:type' content='website' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: 'My Projects',
              description:
                'Explore the diverse range of projects developed by a Fullstack JS Developer.',
              creator: {
                '@type': 'Person',
                name: 'Your Name',
                email: 'kanata10kan@gmail.com',
              },
              keywords: [
                'JavaScript',
                'React',
                'Next.js',
                'Fullstack Development',
                'Web Development',
              ],
            }),
          }}
        />
      </Head>

      <section className='min-h-screen py-20 px-4 mt-14 lg:px-20 bg-gradient-to-br from-gray-900 via-teal-800 to-black text-white'>
        <div className='container mx-auto'>
          <h1 className='text-5xl font-bold text-center mb-10'>
            Fullstack JS Developer
          </h1>
          <ProjectsPage />
          <div className='mt-16 text-center'>
            <h2 className='text-3xl font-semibold mb-4'>
              Want to collaborate?
            </h2>
            <p className='max-w-xl mx-auto mb-8'>
              I'm always looking for exciting new projects to work on. Whether
              you're looking to build something from scratch or need help with
              an existing project, feel free to reach out to me.
            </p>
            <Link
              href='/Contact'
              className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400'
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

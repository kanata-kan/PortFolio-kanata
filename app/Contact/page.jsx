import React from 'react';
import ContactMe from '../_Components/2-Section Components/ContactMe';
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>Contact Me - Fullstack JS Developer</title>
        <meta
          name='description'
          content='Get in touch with a Fullstack JS Developer for collaboration, inquiries, or any other web development projects.'
        />
        <meta
          name='keywords'
          content='Contact, Fullstack developer, JavaScript, React, Next.js, web development'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:title'
          content='Contact Me - Fullstack JS Developer'
        />
        <meta
          property='og:description'
          content='Get in touch with a Fullstack JS Developer for collaboration, inquiries, or any other web development projects.'
        />
        <meta property='og:image' content='/path-to-your-contact-image.jpg' />
        <meta property='og:url' content='https://yourwebsite.com/contact' />
        <meta property='og:type' content='website' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ContactPage',
              name: 'Contact Me',
              description:
                'Get in touch with a Fullstack JS Developer for collaboration or inquiries.',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'kanata10kan@gmail.com',
                contactType: 'Customer Support',
              },
            }),
          }}
        />
      </Head>
      <section className='min-h-screen py-20 px-4 mt-16 lg:px-20 bg-gradient-to-br from-gray-900 via-teal-800 to-black text-white'>
        <h1 className='text-5xl font-bold text-center mb-10'>Contact Me</h1>
        <ContactMe />
      </section>
    </>
  );
}

import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from './_Components/1-Layout Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './_Components/1-Layout Components/Header';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title:
    'Fullstack JS Developer Portfolio - JavaScript, Node.js, React, Next.js',
  description:
    'Explore the portfolio of a Fullstack JavaScript Developer specializing in modern web development using Node.js, React, and Next.js. Check out projects, case studies, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Explore the portfolio of a Fullstack JavaScript Developer specializing in modern web development using Node.js, React, and Next.js. Check out projects, case studies, and more.'
        />
        <meta
          name='keywords'
          content='Fullstack JavaScript Developer, Node.js, React, Next.js, Portfolio, Web Development, Frontend, Backend, Programming'
        />
        <meta
          property='og:title'
          content='Fullstack JS Developer Portfolio - JavaScript, Node.js, React, Next.js'
        />
        <meta
          property='og:description'
          content='Explore the portfolio of a Fullstack JavaScript Developer specializing in modern web development using Node.js, React, and Next.js.'
        />
        <meta property='og:image' content='/images/portfolio-cover.jpg' />
        <meta property='og:url' content='https://yourwebsite.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='canonical' href='https://yourwebsite.com' />
        {/* Add additional metadata or links as needed */}
      </head>
      <body className={poppins.className}>
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

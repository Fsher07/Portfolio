import { HomeIcon } from '@heroicons/react/24/solid';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Salim&lsquo;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About Section */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience Section */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      {/* Skills Section */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects Section */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me Section */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <HomeIcon className='h-10 w-10 text-[#F7AB0A] filter grayscale hover:grayscale-0' />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

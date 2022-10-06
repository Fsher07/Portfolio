import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory scroll-smooth overflow-scroll z-0'>
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
      <section id='section' className='snap-center'>
        <Experience />
      </section>
      {/* Skills Section */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects Section */}

      {/* Contact Me Section */}
    </div>
  );
};

export default Home;

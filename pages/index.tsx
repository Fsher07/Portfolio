import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-scroll z-0'>
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
      <section id='about'>
        <About />
      </section>
      {/* Experience Section */}

      {/* Skills Section */}

      {/* Projects Section */}

      {/* Contact Me Section */}
    </div>
  );
};

export default Home;

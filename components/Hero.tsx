import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import profilePhoto from '../assests/Images/profilePhoto.jpeg';
import BackGroundCircles from './BackGroundCircles';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ['Hi, <My name> is Salim', 'Fullstack-Developer.tsx', 'Designer'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackGroundCircles />
      <Image
        src={profilePhoto}
        width={100}
        height={125}
        className='rounded-full'
        alt='profile photo'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='flex pt-12'>
          <Link href={'#about'}>
            <div className='heroButton'>About</div>
          </Link>
          <Link href={'#experience'}>
            <div className='heroButton'>Experience</div>
          </Link>
          <Link href={'#skills'}>
            <div className='heroButton'>Skills</div>
          </Link>
          <Link href={'#projects'}>
            <div className='heroButton'>Projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

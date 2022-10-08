import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'
      >
        {/* Logos */}
        <SocialIcon
          url='https://www.linkedin.com/in/fsalimhidir/'
          className='hover:animate-pulse'
          fgColor='gray'
          bgColor='transparent'
        />

        <SocialIcon
          url='https://github.com/Fsher07'
          fgColor='gray'
          bgColor='transparent'
          className='hover:animate-pulse'
        />
        <SocialIcon
          url='https://bitbucket.org/furkansalim/'
          fgColor='gray'
          bgColor='transparent'
          className='hover:animate-pulse'
        />
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex items-center text-gray-300 cursor-pointer'
        >
          <SocialIcon network='email' fgColor='gray' bgColor='transparent' />
          <p className='hidden md:inline-flex text-sm text-gray-400 pr-5'>
            Contact Me
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;

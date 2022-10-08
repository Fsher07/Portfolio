import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='sectionTitle'>About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src='https://www.trio.dev/hubfs/Imported_Blog_Media/dbc631c76245baabe08c31d016a94de2-2.jpg'
        className='md:mb-8 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl -mt-24 font-semibold'>
          Here is a little background
        </h4>
        <p>
          Before diving into the programming world, was a civil engineer who
          developed himself in the area of green building, a good team player
          would often be the person on the team who can take charge and be
          trusted during the most stressful times. As have completed a
          full-stack developer course that collaborated with many developers
          from around the world, eager to contribute to the tech area.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

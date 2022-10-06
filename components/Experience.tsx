import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='sectionTitle'>Experience</h3>

      <div className='flex w-full space-x-10 overflow-scroll p-10 snap-x snap-mandatory overflow-y-hidden'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;

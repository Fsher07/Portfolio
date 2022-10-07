import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExperienceCard = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className='rounded-full xl:w-[200px] xl:h-[200px] object-center'
          src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/vxatfbgm79t1j6ksshqc'
          alt='company logo'
          width={128}
          height={128}
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Web Developer Student</h4>
        <p className='font*bold text-2xl mt-1'>Microverse</p>
        <div className='flex space-x-2 my-2'>
          <div>
            <Image
              src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png'
              alt='javascript logo'
              width={32}
              height={32}
            />
          </div>
          <div>
            <Image
              src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png'
              alt='javascript logo'
              width={32}
              height={32}
            />
          </div>
          <div>
            <Image
              src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png'
              alt='javascript logo'
              width={32}
              height={32}
            />
          </div>
        </div>
        <p className='uppercase py-5 text-gray-300'>Starter and Ended</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

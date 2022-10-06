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
        <h4 className='text-4xl font-semibold'>Here is a little background</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          maiores quasi tenetur ex natus nobis ullam, corrupti iusto sed, ipsum
          officia molestias error porro voluptatem minima laborum magni quisquam
          deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eum, repudiandae fugit eius illum neque, sit commodi consequuntur
          animi fuga corporis quibusdam libero reiciendis a ex quae esse sint
          asperiores iure?
        </p>
      </div>
    </motion.div>
  );
};

export default About;

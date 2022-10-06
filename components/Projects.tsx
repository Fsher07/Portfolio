import Image from 'next/image';
import React from 'react';
import Project from './Project';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Project 1 description',
      image: '/images/1.png',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      length: 3,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Project 2 description',
      image: '/images/2.png',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      length: 3,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Project 3 description',
      image: '/images/3.png',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      length: 3,
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='sectionTitle'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
          >
            <motion.div
              initial={{
                y: -300,
                opaticy: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                width={128}
                height={128}
                src='https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_251be2af3ae607c45c14e816eaa1cf41/postgresql.png'
                alt='project image'
              />
            </motion.div>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {i + 1} of {project.length}:
                </span>{' '}
                Deliveroo Clone
              </h4>

              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium neque dignissimos, corporis esse, natus porro fuga
                consequuntur qui ipsa quas cum sequi numquam blanditiis quod,
                consectetur a mollitia commodi facere?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}

export default Projects;

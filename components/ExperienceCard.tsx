import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import axios from 'axios';

type Props = {
  title: string;
  logo: string;
  position: string;
  period: string;
  summaries: string[];
  skills: any;
};

interface SkillIcon {
  _id: string;
  icon: string;
}

const ExperienceCard = ({
  title,
  logo,
  position,
  period,
  summaries,
  skills,
}: Props) => {
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
          src={logo}
          alt='company logo'
          width={128}
          height={128}
        />
      </motion.div>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{position}</h4>
        <p className='font*bold text-2xl mt-1'>{title}</p>
        <div className='flex space-x-2 my-2'>
          {skills.map((skill: SkillIcon) => (
            <div key={skills._id}>
              <Image
                src={skill.icon}
                alt='javascript logo'
                width={32}
                height={32}
              />
            </div>
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>{period}</p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {summaries.map((summary) => (
            <li key={JSON.stringify(summary)}>{summary}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

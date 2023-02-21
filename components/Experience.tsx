import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { baseUrl } from "../services/services";
import ExperienceCard from "./ExperienceCard";

type Props = {};

interface Experience {
  _id: string;
  title: string;
  logo: string;
  position: string;
  period: string;
  summaries: string[];
  skills: any;
}

const Experience = ({}: Props) => {
  const [experience, setExperience] = useState<any>(null);
  useEffect(() => {
    axios.get(`${baseUrl}/experiences`).then((res) => {
      setExperience(res.data);
    });
  }, []);
  console.log(`${baseUrl}/experiences`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionTitle">Experience</h3>

      <div className="flex w-full space-x-8 overflow-x-scroll p-10 snap-x snap-mandatory overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience
          ? experience.map((exp: Experience) => (
              <ExperienceCard
                key={exp._id}
                title={exp.title}
                logo={exp.logo}
                position={exp.position}
                period={exp.period}
                summaries={exp.summaries}
                skills={exp.skills}
              />
            ))
          : null}
      </div>
    </motion.div>
  );
};

export default Experience;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { baseUrl } from "../services/services";
import Skill from "./Skill";

interface SkillProps {
  _id: string;
  name: string;
  icon: string;
  percentage: number;
  sliding: boolean;
}

const Skills = () => {
  const [skills, setSkills] = useState<any>(null);
  useEffect(() => {
    axios.get(`${baseUrl}/skills`).then((res) => {
      setSkills(res.data);
    });
  }, []);
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills
          ? skills.map((skill: SkillProps) => (
              <Skill
                key={skill._id}
                name={skill.name}
                icon={skill.icon}
                proficiency={skill.percentage}
                directionLeft={skill.sliding}
              />
            ))
          : null}
      </div>
    </motion.div>
  );
};

export default Skills;

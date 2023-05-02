import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";

import { baseUrl } from "../services/services";

type Props = {};

interface Project {
  _id: string;
  title: string;
  description: string;
  img: string;
  link: string;
}

function Projects({}: Props) {
  const [projects, setProjects] = useState<any>(null);

  useEffect(() => {
    axios.get(`${baseUrl}/projects`).then((res) => {
      setProjects(res.data);
    });
  }, []);
  
   const loaderProp =({ src }) => {
    return src;
  };
   
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="sectionTitle">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects &&
          projects.map((project: Project, i: number) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <Link href={project.link}>
                <motion.div
                  initial={{
                    y: -300,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative w-full h-full transition duration-150 ease-in-out cursor-pointer"
                >
                  <img
                    src={project.img}
                    alt="project image"
                    className="hover:opacity-50 transition-opacity duration-1000 ease-in-out"
                    loader={loaderProp}
                  />
                  <div className="text-3xl text-[#F7AB0A] text-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    Click to look closer
                  </div>
                </motion.div>
              </Link>

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>
                <p className="text-lg text-center md:text-left">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

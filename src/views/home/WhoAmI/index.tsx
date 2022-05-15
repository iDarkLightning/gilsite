import * as React from 'react';
import { SkillsContainer } from './style';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiCplusplus,
  SiPython,
} from 'react-icons/si';
import { motion } from 'framer-motion';
// import { Typewriter } from '@components/Typewriter';

const skills = [
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiCplusplus,
  SiPython,
];

export const WhoAmiI: React.FC = () => {
  return (
    <>
      <h1>➜ whoami</h1>
      <p data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">
        Hi, I'm Gilbert, currenly a high school student. Always learning and
        programming things.
      </p>

      <SkillsContainer
        data-scroll
        data-scroll-speed="-2.5"
        data-scroll-direction="vertical"
      >
        {skills.map((Component, i) => (
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                ease: 'easeInOut',
                duration: 2,
                delay: i * 0.2,
              },
            }}
          >
            <Component size="52" />
          </motion.div>
        ))}
      </SkillsContainer>
    </>
  );

  // return (
  //   <>
  //     <Typewriter string="whoami">{(s) => <h1>➜ {s}</h1>}</Typewriter>
  //     <Typewriter
  //       wait={1000}
  //       string="Hi, I'm Gilbert, currently a high school student going to Brooklyn Tech.  Always learning and programming things."
  //     >
  //       {(s) => <p>{s}</p>}
  //     </Typewriter>
  //   </>
  // );
};

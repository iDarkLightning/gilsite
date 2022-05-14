import * as React from 'react';
// import { Typewriter } from '@components/Typewriter';

export const WhoAmiI: React.FC = () => {
  return (
    <>
      <h1>➜ whoami</h1>
      <p data-scroll data-scroll-speed="-2" data-scroll-direction="vertical">
        Hi, I'm Gilbert, currenly a high school student. Always learning and
        programming things.
      </p>
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

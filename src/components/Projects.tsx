import {
  Container,
  useColorModeValue,
  Text,
  ContainerProps,
  Image,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

interface Project {
  name: string;
  description: string;
  link: string;
  image: {
    url: string;
  };
}

const Projects = ({ data }: { data: Project[] }) => {
  return (
    <>
      {data.map((v, i) => (
        <ProjectCard {...v} key={i} />
      ))}
    </>
  );
};

const AnimatedContainer = motion<ContainerProps>(Container);

function ProjectCard({ name, description, link, image }: Project) {
  const backgroundColor = useColorModeValue(undefined, 'white');
  const padding = useColorModeValue(undefined, '2');

  return (
    <Link isExternal href={link} _hover={{ textDecor: 'none' }}>
      <AnimatedContainer
        borderColor="GrayText"
        borderWidth="1px"
        my="2"
        px="4"
        py="2"
        whileHover={{
          scale: 1.05,
        }}
        maxWidth="600px"
      >
        <Image
          src={image.url}
          alt="Logo"
          height="80px"
          backgroundColor={backgroundColor}
          padding={padding}
        />
        <Text fontWeight="bold">{name}</Text>
        <ReactMarkdown children={description} />
      </AnimatedContainer>
    </Link>
  );
}

export default Projects;

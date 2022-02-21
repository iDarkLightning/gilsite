import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Center, Heading, HeadingProps, Link } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const AnimatedHeading = motion<HeadingProps>(Heading);

const NotFoundPage = () => {
  return (
    <Center h="100vh">
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <Box textAlign="center">
        <AnimatedHeading
          animate={{
            rotateX: 360,
            rotateY: 360,
            transition: {
              duration: 2,
            },
          }}
          fontSize="8xl"
        >
          404
        </AnimatedHeading>
        <Heading>Page not found</Heading>
        <GatsbyLink to="/">
          <Link>Go home</Link>
        </GatsbyLink>
      </Box>
    </Center>
  );
};

export default NotFoundPage;

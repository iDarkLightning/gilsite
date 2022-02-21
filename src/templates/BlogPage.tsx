import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Heading,
  Box,
  Center,
  Container,
  ContainerProps,
  BoxProps,
} from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import { ArrowBackIcon, IconProps } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

interface PageData {
  graphCmsArticle: {
    title: string;
    content: string;
    slug: string;
  };
}

const BackButton = motion<BoxProps>(Box);
const Arrow = motion<IconProps>(ArrowBackIcon);

const BlogPage = ({ data: { graphCmsArticle: data } }: PageProps<PageData>) => {
  return (
    <Center m="10" flexDirection="column">
      <Container>
        <BackButton
          color="cyan.400"
          boxSize="fit-content"
          fontSize="2xl"
          whileHover="hover"
          variants={{
            hover: {
              scale: 1.2,
            },
          }}
        >
          <Link to="/">
            <Arrow
              mr="1"
              variants={{
                hover: {
                  rotate: 360,
                },
              }}
            />
            Home
          </Link>
        </BackButton>

        <Heading size="2xl" my="3">
          {data.title}
        </Heading>
        <ReactMarkdown children={data.content} />

        <Footer />
      </Container>
    </Center>
  );
};

export const pageQuery = graphql`
  query BlogPageQuery($slug: String!) {
    graphCmsArticle(slug: { eq: $slug }) {
      title
      content
      slug
    }
  }
`;

export default BlogPage;

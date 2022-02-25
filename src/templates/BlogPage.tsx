import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Heading,
  Box,
  Center,
  Container,
  Text,
  BoxProps,
  Divider,
} from '@chakra-ui/react';
import { graphql, Link, PageProps } from 'gatsby';
import { ArrowBackIcon, IconProps } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

interface PageData {
  graphCmsArticle: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
  };
}

const BackButton = motion<BoxProps>(Box);
const Arrow = motion<IconProps>(ArrowBackIcon);

const BlogPage = ({ data: { graphCmsArticle: data } }: PageProps<PageData>) => {
  return (
    <Center m="10" flexDirection="column" css={pageContainer}>
      <Helmet>
        <title>{data.title}</title>
        <meta
          name="description"
          content={data.content.substring(0, 100) + '...'}
        />
      </Helmet>
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
        <Text>
          Written{' '}
          {new Date(data.createdAt).toLocaleDateString('en-us', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </Text>

        <Divider my="4" />

        <ReactMarkdown children={data.content} />

        <Footer />
      </Container>
    </Center>
  );
};

const pageContainer = css`
  @media screen and (max-width: 600px) {
    margin: 2rem 0.1rem;
  }
`;

export const pageQuery = graphql`
  query BlogPageQuery($slug: String!) {
    graphCmsArticle(slug: { eq: $slug }) {
      title
      content
      slug
      createdAt
    }
  }
`;

export default BlogPage;

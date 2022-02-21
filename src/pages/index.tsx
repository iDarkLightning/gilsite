import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/layout';
import Links from '../components/Links';
// @ts-ignore
import * as styles from '../styles/index.module.css';
// @ts-ignore
import CatTypeGif from '../images/cat-type.gif';
import { Helmet } from 'react-helmet';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

interface PageData {
  // blog posts
  allGraphCmsArticle: {
    nodes: {
      content: string;
      title: string;
      slug: string;
      createdAt: string;
    }[];
  };
  // projects
  allGraphCmsProject: {
    nodes: {
      name: string;
      description: string;
      link: string;
      image: {
        url: string;
      };
    }[];
  };
}

const IndexPage = ({
  data: {
    allGraphCmsArticle: { nodes: blogData },
    allGraphCmsProject: { nodes: projectData },
  },
}: PageProps<PageData>) => {
  return (
    <Center m="10">
      <Helmet>
        <title>i'm gilbert</title>
        <meta name="description" content="this is my website yes" />
      </Helmet>

      <Container width="600px" maxWidth="600px">
        <Header />
        <Divider my="2" />

        {/* links section */}
        <Heading fontSize="3xl">Links</Heading>
        <Links />
        <Divider my="2" />

        {/* blog section */}
        <Heading fontSize="3xl">Blog</Heading>
        <Blog data={blogData} />
        <Divider my="2" />

        {/* projects section */}
        <Heading fontSize="3xl">Things I've Worked On</Heading>
        <Projects data={projectData} />

        <Footer />
      </Container>
    </Center>
  );
};

const Header = () => (
  <Flex justifyContent="space-between" className={styles.headerContainer}>
    <Box>
      {/* left */}
      <Heading>i'm gilbert</Heading>
      <Text>
        <br />⭐<strong>Accepting commissions</strong>
      </Text>

      <Flex alignItems="center" mt="4">
        <Text mr="1" fontSize="2rem">
          🏫
        </Text>
        <Text mt="10px" fontSize="1.2rem">
          Brooklyn Technical High School
        </Text>
      </Flex>
    </Box>

    {/* right */}
    <img
      src={CatTypeGif}
      width={200}
      height={200}
      alt="cat tap tap tap"
      style={{
        borderRadius: 20,
      }}
    />
  </Flex>
);

export const pageQuery = graphql`
  query AllArticlesAndProjects {
    allGraphCmsArticle {
      nodes {
        content
        title
        slug
        createdAt
      }
    }

    allGraphCmsProject {
      nodes {
        name
        description
        link
        image {
          url
        }
      }
    }
  }
`;

export default IndexPage;

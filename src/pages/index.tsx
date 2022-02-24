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
import { Helmet } from 'react-helmet';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import FancyAssLogo from '../components/FancyAssLogo';

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
        <title>Gilbert's Portfolio or Something</title>
        <meta name="description" content="this is my website yes" />
      </Helmet>

      <Container width="600px" maxWidth="600px">
        <Header />

        <SectionDivider>Links</SectionDivider>
        <Links />

        <SectionDivider>Blog</SectionDivider>
        <Blog data={blogData} />

        <SectionDivider>My Work</SectionDivider>
        <Projects data={projectData} />

        <Footer />
      </Container>
    </Center>
  );
};

const SectionDivider = ({ children }: { children: string }) => {
  return (
    <>
      <Divider my="6" />
      <Heading fontSize="3xl" mb="4">
        {children}
      </Heading>
    </>
  );
};

const Header = () => (
  <Box>
    <FancyAssLogo />
    <Heading mt="5">Hello! I'm Gilbert</Heading>

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

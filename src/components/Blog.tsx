import {
  Container,
  useColorModeValue,
  useColorMode,
  Text,
  ContainerProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import * as React from 'react';

const Blog = ({ data }: { data: BlogCardProps[] }) => {
  return (
    <>
      {data.map((v, i) => {
        return <BlogCard {...v} />;
      })}
    </>
  );
};

interface BlogCardProps {
  title: string;
  createdAt: string;
  slug: string;
}

const AnimatedContainer = motion<ContainerProps>(Container);

function BlogCard({ title, createdAt, slug }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`}>
      <AnimatedContainer
        borderColor="GrayText"
        borderWidth="1px"
        my="2"
        px="4"
        py="2"
        whileHover={{
          scale: 1.1,
        }}
        maxWidth="600px"
      >
        <Text fontWeight="bold">{title}</Text>{' '}
        {new Date(createdAt).toLocaleDateString('en-us', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </AnimatedContainer>
    </Link>
  );
}

export default Blog;

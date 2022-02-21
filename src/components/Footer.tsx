import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  useColorModeValue,
  useColorMode,
  Box,
  Text,
  Button,
  Divider,
  Link,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack alignItems="flex-start">
      <Divider my="5" />

      <Text>You reached the end.</Text>

      <Button onClick={() => toggleColorMode()}>
        Turn {colorMode === 'dark' ? 'on' : 'off'} the lights
      </Button>

      <Link
        isExternal
        href="https://github.com/giilbert/my-site"
        color="blue.400"
      >
        This page on GitHub <ExternalLinkIcon />
      </Link>
    </VStack>
  );
};

export default Footer;

import { CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Text,
  Code,
  Flex,
  IconProps,
  Link,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Links = () => {
  const { colorMode } = useColorMode();
  const link = useColorModeValue('blue.500', 'blue.400');

  return (
    <>
      <Flex alignItems="center" mt="4">
        {colorMode === 'light' ? <GitHubLogoDark /> : <GitHubLogoLight />}
        <Link
          fontSize="1.2rem"
          ml="2"
          color={link}
          isExternal
          href="https://www.github.com/giilbert/"
        >
          GitHub
          <ExternalLinkIcon ml={2} />
        </Link>
      </Flex>

      <Flex alignItems="center" mt="4">
        <StaticImage
          src="../images/instagram_logo.png"
          placeholder={null}
          width={30}
          height={30}
        />
        <Link
          fontSize="1.2rem"
          ml="2"
          color={link}
          isExternal
          href="https://www.instagram.com/notgiilbert/"
        >
          Instagram
          <ExternalLinkIcon ml={2} />
        </Link>
      </Flex>

      <DiscordLink link={link} />

      <Link
        href="mailto:giilbertpublic@gmail.com"
        fontSize="1.2rem"
        color={link}
      >
        <Text mt="5px">
          Mail to me <ExternalLinkIcon />
        </Text>
      </Link>
    </>
  );
};

const GitHubLogoLight = () => (
  <StaticImage
    src="../images/github_logo_light.png"
    placeholder={null}
    width={30}
    height={30}
  />
);

const GitHubLogoDark = () => (
  <StaticImage
    src="../images/github_logo_dark.png"
    placeholder={null}
    width={30}
    height={30}
  />
);

const SpinCheck = motion<IconProps>(CheckCircleIcon);
const DiscordLink = ({ link }: { link: string }) => {
  const [copiedTextActive, setCopiedTextActive] = useState(false);

  return (
    <Flex alignItems="center" mt="4">
      <StaticImage
        src="../images/discord_logo.png"
        placeholder={null}
        width={30}
        height={30}
        alt=""
      />
      <motion.div initial="rest" whileHover="hover">
        <Text
          fontSize="1.2rem"
          ml="2"
          color={link}
          _hover={{ cursor: 'pointer' }}
          onClick={() => {
            window.navigator.clipboard.writeText('gil#2252').then(() => {
              if (!copiedTextActive) setCopiedTextActive(true);
              setTimeout(() => {
                setCopiedTextActive(false);
              }, 3000);
            });
          }}
          userSelect="none"
        >
          Discord
          <motion.span
            variants={{
              rest: {
                opacity: 0,
              },
              hover: {
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              },
            }}
          >
            <Code mx="2">gil#2252</Code>
            {copiedTextActive ? (
              <>
                Copied
                <SpinCheck
                  ml="1"
                  color="cyan.400"
                  animate={{
                    rotate: 360,
                  }}
                />
              </>
            ) : (
              <Text color="gray.500" display="inline-block">
                Click to copy
              </Text>
            )}
          </motion.span>
        </Text>
      </motion.div>
    </Flex>
  );
};

export default Links;

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
          alt="Instagram Logo"
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

      <Flex alignItems="center" mt="4">
        <StaticImage
          src="../images/gmail_logo.png"
          alt="GMail Logo"
          placeholder={null}
          width={30}
          height={30}
        />

        <Link
          fontSize="1.2rem"
          ml="2"
          href="mailto:giilbertpublic@gmail.com"
          color={link}
        >
          Mail to me <ExternalLinkIcon />
        </Link>
      </Flex>
    </>
  );
};

const GitHubLogoLight = () => (
  <StaticImage
    src="../images/github_logo_light.png"
    alt="GitHub Logo"
    placeholder={null}
    width={30}
    height={30}
  />
);

const GitHubLogoDark = () => (
  <StaticImage
    src="../images/github_logo_dark.png"
    alt="GitHub Logo"
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
        alt="Discord Logo"
        placeholder={null}
        width={30}
        height={30}
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
                opacity: !isTouchDevice() ? 0 : undefined,
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
              <span
                style={{
                  color: '#aaa',
                  display: 'inline-block',
                }}
              >
                Click to copy
              </span>
            )}
          </motion.span>
        </Text>
      </motion.div>
    </Flex>
  );
};

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    //@ts-ignore
    navigator.msMaxTouchPoints > 0
  );
}

export default Links;

import * as React from 'react';
import { Email, FooterContainer, IconsContainer } from './styles';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IconLink } from './IconLink';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <a href="mailto:giilbertpublic@gmail.com">
        <Email>giilbertpublic@gmail.com</Email>
      </a>

      <IconsContainer>
        <IconLink url="https://github.com/giilbert" icon={FaGithub} />
        <IconLink url="https://instagram.com/notgiilbert" icon={FaInstagram} />
      </IconsContainer>
    </FooterContainer>
  );
};

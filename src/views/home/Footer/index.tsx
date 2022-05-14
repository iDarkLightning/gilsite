import * as React from 'react';
import { FooterContainer, IconsContainer } from './styles';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { IconLink } from './IconLink';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <a href="mailto:giilbertpublic@gmail.com">
        <h3>giilbertpublic@gmail.com</h3>
      </a>

      <IconsContainer>
        <IconLink url="https://github.com/giilbert" icon={FaGithub} />
        <IconLink url="https://instagram.com/notgiilbert" icon={FaInstagram} />
      </IconsContainer>
    </FooterContainer>
  );
};

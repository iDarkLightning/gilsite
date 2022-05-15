import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-bottom: 12rem;
`;

export const Email = styled.h3`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  font-size: max(3vw, 1.2rem);
`;

export const IconsContainer = styled.div`
  display: flex;

  a {
    margin-right: 1rem;
  }
`;

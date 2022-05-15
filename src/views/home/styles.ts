import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0.5rem 2rem;
  display: flex;
  justify-content: center;

  main {
    width: 70vw;
    max-width: 700px;
  }

  @media screen and (max-width: 600px) {
    margin: 0.5rem 2rem;

    main {
      width: 100%;
    }
  }
`;

export const Divider = styled.div`
  margin-bottom: 150vh;
`;

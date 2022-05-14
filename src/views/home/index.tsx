import * as React from 'react';
import SmoothScroll from '@components/SmoothScroll';
import { Divider, PageContainer } from './styles';
import { WhoAmiI } from './WhoAmI';
import { Footer } from './Footer';

export const IndexPage: React.FC = () => {
  return (
    <>
      <SmoothScroll />

      <PageContainer data-scroll-section>
        <main>
          <WhoAmiI />

          <Divider />

          <Footer />
        </main>
      </PageContainer>
    </>
  );
};

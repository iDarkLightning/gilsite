import { Cowsay } from "@components/cowsay";
import { Main, PageWrapper } from "@styles/index-page";
import { withMountOnFirstView } from "@utils/withMountOnFirstView";
import type { NextPage } from "next";
import { GlobalStyles } from "styles/global";
import { WindupChildren } from "windups";

const Windup = withMountOnFirstView(WindupChildren);

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <GlobalStyles />
      <Main>
        <Windup>
          <h1>Hello, I&apos;m Gilbert</h1>
          <p>
            This site is just a placeholder until I set up a CMS and a bunch of
            other things :)
          </p>

          <Cowsay />
        </Windup>
      </Main>
    </PageWrapper>
  );
};

export default Home;

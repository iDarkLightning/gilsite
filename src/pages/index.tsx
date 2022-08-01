import { Cowsay } from "@components/cowsay";
import { Main, PageWrapper } from "@styles/index-page";
import { withMountOnFirstView } from "@utils/withMountOnFirstView";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { GlobalStyles } from "styles/global";
import { clearInterval } from "timers";
import { WindupChildren } from "windups";

const Windup = withMountOnFirstView(WindupChildren);

const Home: NextPage = () => {
  const [day, setDay] = useState(0);

  const weee = () => {
    const text = document.querySelector("#text") as any;
    const cow = document.querySelector("#cow") as any;
    const subtext = document.querySelector("#subtext") as any;
    const buttons = document.querySelectorAll(".btn") as any;

    if (!text || !cow || !subtext || !buttons) return;

    buttons.forEach((btn: any) => (btn.style.display = "none"));

    const interval = () => {
      let [x, y, z] = [0, 0, 0];
      x = performance.now() / 3000;
      y = performance.now() / 4000;
      z = performance.now() / 3900;

      console.log(x);
      if (x > 3) x /= 2;
      if (y > 4) y /= 2;

      text.style.transform = `scaleX(${x}) rotateZ(${Math.sin(z)}deg)`;
      cow.style.transform = `scaleY(${y}) rotateZ(${
        Math.sin(z) * 280
      }deg) rotateY(${y * 980}deg) `;
      subtext.style.transform = `scale(${x}) rotateX(${
        Math.cos(x) * 360
      }deg) rotateZ(${Math.sin(y) * 220}deg)`;
    };

    const update = setInterval(interval);

    return () => clearInterval(update);
  };

  return (
    <PageWrapper>
      <GlobalStyles />
      <Main>
        <Windup>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h1 id="text">Welcome to Code Camp</h1>
            <button
              className="btn"
              style={{ height: "1.5rem" }}
              onClick={() => setDay((cur) => cur + 1)}
            >
              Up day
            </button>
            <button
              className="btn"
              style={{ height: "1.5rem" }}
              onClick={() => setDay((cur) => cur - 1)}
            >
              Down day
            </button>
          </div>
        </Windup>
        <p id="subtext">We will be beginning day {day} in a few minutes!</p>
        <div id="cow" onClick={weee}>
          <Cowsay />
        </div>
      </Main>
    </PageWrapper>
  );
};

export default Home;

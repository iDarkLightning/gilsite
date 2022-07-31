import { CowsayContainer } from "@styles/cowsay";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const COWSAY = `
 ____________________________________
/ this site is very cool, would come \\
\\ again                             /
 ------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     |
`;

export const Cowsay: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (!containerRef.current) return;

    gsap
      .timeline({ repeat: 999999999999, repeatDelay: 1 })
      .to(containerRef.current, {
        y: "-30",
        duration: 1,
      })
      .to(containerRef.current, {
        y: "0",
        duration: 1,
      });
  }, [containerRef]);

  return (
    <CowsayContainer ref={(el) => (containerRef.current = el)}>
      {COWSAY.split("\n").map((content, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{
            __html: content.replaceAll(" ", "&nbsp;"),
          }}
        />
      ))}
    </CowsayContainer>
  );
};

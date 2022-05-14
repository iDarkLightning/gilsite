// @ts-ignore
import LocomotiveScroll from 'locomotive-scroll';
import * as React from 'react';
import { createRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// @ts-ignore
import '@styles/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll: React.FC = ({ children }) => {
  useEffect(() => {
    // create locomotive scroll
    const locoScroll = new LocomotiveScroll({
      smooth: true,
      el: document.querySelector('#___gatsby'),
    });

    // @ts-ignore expose to window scope for convenience
    window.locoScroll = locoScroll;

    locoScroll.on('scroll', ScrollTrigger.update);

    // make gsap detect unjacked scroll y
    ScrollTrigger.scrollerProxy('#___gatsby', {
      scrollTop(value) {
        // logs a bunch of undefined
        // console.log(locoScroll.scroll.instance.scroll.y);
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },

      // window size things or smth
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },

      // mobile scroll things
      pinType: (document.querySelector('#___gatsby') as HTMLElement).style
        .transform
        ? 'transform'
        : 'fixed',
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;

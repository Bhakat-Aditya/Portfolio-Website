import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      // Text fade effect
      SplitText.create(".about-text", {
        type: "lines, chars",
        onSplit(self) {
          gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

          gsap.to(self.chars, {
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 40%",
              end: "center center",
              scrub: 1,
            },
          });
        },
      });
    },
    { scope: aboutRef }
  );

  return (
    <>
      <div
        ref={aboutRef}
        className="h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] relative z-10"
      >
        {/* Text container */}
        <div className="about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-[1.25]">
          I’m a final-year B.Com (Accounts) graduate with a strong analytical
          mindset, currently transitioning into web development. I specialize in
          creating responsive, user-friendly interfaces using HTML, CSS,
          JavaScript, React, and modern animation tools like GSAP to deliver
          smooth interactions and visually striking experiences. Continuously
          learning through hands-on projects, I’m now expanding my skills into
          backend development to become a full-stack developer. By combining
          financial knowledge with technical adaptability and a focus on clean
          code and meaningful design, I aim to build digital solutions that not
          only work efficiently but also connect with users in a valuable way.
        </div>
      </div>
    </>
  );
};

export default About;

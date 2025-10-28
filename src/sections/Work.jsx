import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import projects from "../components/projectsData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);
  const projectsRef = useRef(null);

  useGSAP(
    () => {
      // Horizontal scroll
      const projectsWidth = projectsRef.current.scrollWidth;
      const scrollDistance = projectsWidth - window.innerWidth;

      gsap.to(projectsRef.current, {
        x: -scrollDistance,
        ease: "linear",
        scrollTrigger: {
          trigger: workRef.current,
          start: "center center",
          end: () => `+=${projectsWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1, // prevents flicker on fast scroll
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: workRef }
  );

  return (
    <>
      <div
        ref={workRef}
        className="min-h-screen bg-[#006466] text-black py-24 lg:py-40 overflow-hidden"
      >
        {/* Title Wrapper */}
        <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
          <div className="max-w-xl">
            <h3 className="mb-3">Selected Work</h3>
            <p className="text-lg lg:text-xl">
              A showcase of my selected projects—designed to inspire, engage,
              and deliver real results.
            </p>
          </div>
          <GradientButton
            text="Explore All"
            link="/projects"
            className="btn-light"
          />
        </div>
        <div ref={projectsRef}>
          {/* Projects */}
          <div className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6">
            {projects.map(({ id, name, image, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                className="project-card rounded-2xl w-full min-w-[340px] lg:min-w-xl h-72 lg:h-96 block group"
              >
                <div className="project-border absolute inset-0 rounded-2xl"></div>

                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain bg-[#1b3a4b] transition-transform duration-300 group-hover:scale-105 cursor-pointer rounded-2xl"
                />

                <span className="absolute top-3 font-bold right-4 bg-white text-black text-sm lg:text-lg uppercase leading-[1.4] font-heading px-5 py-1 rounded-full">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;

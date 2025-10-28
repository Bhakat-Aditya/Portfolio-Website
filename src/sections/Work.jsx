import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import projects from "../components/projectsData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);
  const projectsWrapperRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".project-card");
    const totalWidth = containerRef.current.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: workRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
    });
  });

  return (
    <section
      ref={workRef}
      className="min-h-screen bg-white text-black overflow-hidden py-24 lg:py-40"
    >
      {/* Header */}
      <div className="main-container pb-10 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
        <div className="max-w-xl">
          <h3 className="mb-3">Selected Work</h3>
          <p className="text-lg lg:text-xl">
            A showcase of my selected projects—designed to inspire and deliver real results.
          </p>
        </div>
        <GradientButton text="Explore All" link="/projects" className="btn-light" />
      </div>

      {/* Horizontal Scroll Row */}
      <div ref={projectsWrapperRef} className="relative w-full overflow-visible">
        <div ref={containerRef} className="flex gap-6 px-6">
          {projects.map(({ id, name, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card min-w-[80vw] lg:min-w-[55vw] h-[70vh] rounded-2xl overflow-hidden relative group"
            >
              <iframe
                src={link}
                title={name}
                loading="lazy"
                className="w-full h-full pointer-events-none rounded-2xl
                scale-[1.03] group-hover:scale-[1.08]
                transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-5 left-5 bg-black/80 backdrop-blur text-white
                px-5 py-2 rounded-full uppercase font-heading text-sm lg:text-base">
                {name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

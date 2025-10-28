import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
  const sectionRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  useGSAP(
    () => {
      // Split animations
      const titleSplit = new SplitText(".contact-title", { type: "chars" });
      const textSplit = new SplitText(".contact-text", { type: "words" });

      gsap.set(
        [titleSplit.chars, textSplit.words, emailRef.current, phoneRef.current],
        { opacity: 0, y: 20 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(titleSplit.chars, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: "power2.out",
      })
        .to(
          textSplit.words,
          {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.45"
        )
        .to(
          [emailRef.current, phoneRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.4"
        );

      // Background icon floating animation ✅
      gsap.to(".floating-icon", {
        xPercent: -100,
        duration: 40,
        repeat: -1,
        ease: "linear",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center text-white px-6 lg:px-24 overflow-hidden"
    >
      {/* Floating Background Icons ✅ */}
      {/* Floating Tech Background Icons ✅ Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Row 1 */}
        <div className="floating-icon-row animate-tech-speed">
          <span>✉️</span>
          <span>📞</span>
          <span>💻</span>
          <span>🖥️</span>
          <span>⚙️</span>
          <span>🌐</span>
          <span>📡</span>
        </div>

        {/* Row 2 (Reverse for depth) */}
        <div className="floating-icon-row animate-tech-speed-reverse">
          <span>🔌</span>
          <span>💡</span>
          <span>🛰️</span>
          <span>🔒</span>
          <span>📱</span>
          <span>🤖</span>
          <span>🧠</span>
        </div>

        {/* Row 3 */}
        <div className="floating-icon-row animate-tech-speed">
          <span>🌐</span>
          <span>✉️</span>
          <span>📞</span>
          <span>⚙️</span>
          <span>💻</span>
          <span>📡</span>
          <span>🚀</span>
        </div>
      </div>

      <div className="relative max-w-4xl z-10">
        <h2 className="contact-title text-6xl font-heading font-bold tracking-tight">
          Let’s Work Together
        </h2>

        <p className="contact-text text-lg lg:text-2xl font-normal mt-5 w-[90%] opacity-70">
          Looking to bring your ideas to life? Whether you need a freelance
          developer, a creative partner for a project, or a dedicated teammate
          for a full-time or part-time role — I’d love to connect! I’m
          passionate about building clean, modern, and engaging digital
          experiences that make a real impact. Let’s create something awesome
          together! Drop me a message anytime — I’m always excited to
          collaborate.
        </p>

        <div className="contact-info mt-14 space-y-6 text-2xl lg:text-3xl font-heading tracking-wide">
          <a
            ref={emailRef}
            href="mailto:bhakataditya0@gmail.com"
            className="contact-link block"
          >
            <span className="icon">✉️</span>
            <span className="link-text">bhakataditya0@gmail.com</span>
          </a>

          <a
            ref={phoneRef}
            href="tel:+919476477956"
            className="contact-link block"
          >
            <span className="icon">📞</span>
            <span className="link-text">+91 9476477956</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

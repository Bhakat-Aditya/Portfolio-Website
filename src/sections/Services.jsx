import React from "react";

const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black">
        <div className="main-container pb-8 lg:pb-12">
          <h3>Services in Detail</h3>
        </div>
      </div>

      {/* Services List */}
      <div className="relative">
        <div className="bg-[#001523] text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Web Design <br /> & UI/UX
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Crafting modern, user-focused websites with clean layouts,
                thoughtful typography, and smooth interactions. Every design is
                tailored to deliver both aesthetic appeal and seamless
                usability.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#00253e] text-white pt-16 lg:pt-20 pb-[23rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                02
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Photo & Video <br /> Edits
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Transform your visuals with expert photo and video editing
                services. From color correction to retouching and dynamic video
                edits, I enhance your media to ensure it captivates and
                communicates your vision effectively.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#003a61] text-white py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Left side */}
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                03
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Graphic <br /> Design
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                Elevate your brand with custom graphic design services. From
                logos to marketing materials, I create visually compelling
                designs that communicate your message effectively and leave a
                lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

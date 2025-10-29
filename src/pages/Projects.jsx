import React from 'react'
import projects from '../components/projectsData'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <>
      <div className='bg-white text-black'>
        <div className='main-container py-28'>
          <h2 className='text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center'>
            Projects
          </h2>

          <div className='grid md:grid-cols-2 gap-8 mt-8 lg:mt-16'>
            {projects.map(({ id, name, link }) => (
              <div key={id} className="flex flex-col">
                
                {/* Clean iframe preview */}
                <div className="rounded-xl overflow-hidden border border-gray-300 h-[250px] lg:h-[350px]">
                  <iframe
                    src={link}
                    title={name}
                    className="w-full h-full"
                  />
                </div>

                {/* Project Name clickable */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase leading-[1.4] lg:text-2xl font-heading mt-4"
                >
                  {name}
                </a>

              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </>
  )
}

export default Projects

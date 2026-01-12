import React from 'react';
import Link from 'next/link';

const Portfolio = () => {
  const projects = [
    {
      title: "OsoEasy",
      category: "E-commerce",
      image: "bg-purple-100",
      imageSrc: "/Screenshot 2026-01-13 010500.png",
      link: "/projects/osoeasy"
    },
    {
      title: "EzyClean",
      category: "Web Application",
      image: "bg-blue-100",
      imageSrc: "/Screenshot 2026-01-13 011028.png",
      link: "/projects/ezyclean"
    },
    {
      title: "Nanda FinCap",
      category: "Finance Website",
      image: "bg-green-100",
      imageSrc: "/Screenshot 2026-01-13 010841.png",
      link: "/projects/nandafincap"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Portfolio</h2>
          <p className="text-gray-600 text-lg">
            Check out some of my recent projects and case studies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer block h-64">
              {project.imageSrc ? (
                 <div className="h-full w-full relative">
                   {/* Using img tag for simplicity with space in filename, normally next/image is better */}
                   <img 
                      src={project.imageSrc} 
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-blue-400 font-medium mb-2">{project.category}</span>
                      <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                      <span className="mt-4 inline-block text-white text-sm font-semibold underline decoration-blue-500 underline-offset-4">View Project &rarr;</span>
                   </div>
                 </div>
              ) : (
                <>
                  <div className={`h-full ${project.image} w-full transition-transform duration-500 group-hover:scale-110`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-blue-400 font-medium mb-2">{project.category}</span>
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                    <span className="mt-4 inline-block text-white text-sm font-semibold underline decoration-blue-500 underline-offset-4">View Project &rarr;</span>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

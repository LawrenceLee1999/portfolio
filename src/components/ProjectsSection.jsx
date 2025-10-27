import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-wrapper space-y-6 md:space-y-8">
      <h2 className="text-3xl sm:text-5xl lg:text-[76px] leading-tight text-center md:text-left mb-5">
        Featured Projects
      </h2>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-[600px] text-center md:text-left">
        Some projects I'm proud of — built with real users, real impact and a
        whole lot of learning.
      </p>
      <div className="flex flex-col space-y-12">
        <ProjectCard
          title="Desktop Application For SportSens"
          description="Teamed up with Scotia Biotech to build a web-based concussion management platform to support athletes, clinicians and coaches."
          year="2024"
          role="Full-stack Developer"
          liveUrl="https://www.sportsens.com/"
          githubUrl="https://github.com/LawrenceLee1999/sportsens"
          image="/sportsens-project.png"
        />
        <ProjectCard
          title="Personal Portfolio Website"
          description="Designed and developed a responsive portfolio site to showcase my projects, experience and skills."
          year="2025"
          role="Full-stack Developer"
          liveUrl="https://lawrencelee-portfolio.vercel.app/"
          githubUrl="https://github.com/LawrenceLee1999/portfolio"
          image="/portfolio-project.png"
        />
      </div>
    </section>
  );
}

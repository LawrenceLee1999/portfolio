export default function ExperienceSection() {
  const jobs = [
    {
      role: "Full-stack Developer",
      company: "Scotia Biotech",
      date: "Dec 2024 - Present",
      description: [
        "Developed Scotia Sense, a web-based concussion management platform using React, Node.js, Express and PostgreSQL",
        "Supported athletes, clinicians and coaches through real-time health tracking and injury recovery workflows by utilising Chart.js",
      ],
    },
    {
      role: "Software Developer Consultant",
      company: "FDM Group",
      date: "Mar 2023 - Feb 2024",
      description: [
        "Created a consultant portal web application using Java and Spring Boot, developing a REST API that saved account managers ~10 hours per week",
        "Designed and deployed a REST API using Python and Flask, integrating OpenAI's API to automate CV generation for consultants",
      ],
    },
    {
      role: "Research Assistant",
      company: "Chemistry Clinic (University of Strathclyde)",
      date: "Sep 2020 - Aug 2021",
      description: [
        "Aided small/medium sized businesses and larger companies to benefit their projects with scientific advice",
        `Analysed caffeine content for the client "Power Press Coffee" using techniques such as UV-vis and fluorescence spectroscopy, and chemically modified electrodes`,
        `Synthesised a novel bio-derived formulation for the client "Glaize" to reduce reliance on petroleum-based materials`,
      ],
    },
    {
      role: "Front of House",
      company: "Kwang Tung Chinese Restaurant",
      date: "Jun 2014 - Feb 2024",
      description: [
        "Led a team of 5 servers, streamlining coordination to reduce customer wait times and improve overall customer satisfaction",
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="section-wrapper flex flex-col xl:flex-row xl:justify-between gap-10"
    >
      <div>
        <h2 className="text-3xl sm:text-5xl lg:text-[76px] leading-tight text-center md:text-left">
          My Experience
        </h2>
      </div>
      <div className="xl:max-w-[704px] text-center md:text-left space-y-10">
        {jobs.map((job, index) => (
          <div key={index} className="space-y-2 ">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <h3 className="text-lg sm:text-2xl font-semibold">{job.role}</h3>
              <p className="text-sm sm:text-base">{job.date}</p>
            </div>
            <p className="!text-[var(--color-accent)] text-base sm:text-lg md:text-xl leading-relaxed font-semibold">
              {job.company}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              {job.description.map((point, idx) => (
                <li
                  key={idx}
                  className="text-base sm:text-lg md:text-xl leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

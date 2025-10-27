export default function SkillsGrid() {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "NODE.JS",
    "EXPRESS",
    "POSTGRESQL",
    "TAILWIND CSS",
    "BOOTSTRAP",
    "JAVA",
    "PYTHON",
    "GIT",
    "POSTMAN",
    "SPRINGBOOT",
    "SQL",
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-6 py-3 rounded-full border border-[#484848] text-white font-bold text-sm sm:text-base"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

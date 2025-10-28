export default function ProjectCard({
  title,
  description,
  image,
  year,
  role,
  liveUrl,
  githubUrl,
}) {
  return (
    <div className="flex flex-col xl:flex-row gap-10 mt-10">
      <div
        className="w-full xl:w-[600px] h-auto md:h-[600px] bg-[#1A1A1A] rounded-[var(--radius-lg)] flex items-center justify-center flex-shrink-0 transition-all duration-300 
             hover:-translate-y-2 hover:bg-[#2A2A2A]"
      >
        <img
          className="w-full max-w-[486px] h-auto md:h-[347px] rounded-lg object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col justify-center text-[var(--color-foreground)] w-full">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-3xl text-center md:text-left">
            {title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
            {description}
          </p>
        </div>
        <div className="mt-8">
          <h4 className="text-sm sm:text-base mb-2 font-semibold ">
            PROJECT INFO
          </h4>
          <div className="border-t border-[#484848] py-3 flex justify-between text-sm">
            <span className="font-semibold">Year</span>
            <span className="text-[var(--color-muted)]">{year}</span>
          </div>
          <div className="border-t border-[#484848] py-3 flex justify-between text-sm">
            <span className="font-semibold">Role</span>
            <span className="text-[var(--color-muted)]">{role}</span>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-4">
            <a
              className="group flex items-center whitespace-nowrap gap-1 text-sm sm:text-base text-[var(--color-accent)] font-bold border-b border-[var(--color-accent)]"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LIVE DEMO <span className="sr-only">for {title}</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 19L19 5M19 5H9M19 5V15"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              className="group flex items-center whitespace-nowrap gap-1 text-sm sm:text-base text-[var(--color-accent)] font-bold border-b border-[var(--color-accent)]"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              SEE ON GITHUB
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipule="evenodd"
                  d="M13.0282 2.16675C7.06008 2.16675 2.223 7.00383 2.223 12.9719C2.223 17.7451 5.31808 21.7957 9.61242 23.2257C10.153 23.3232 10.348 22.9906 10.348 22.7046C10.348 22.4478 10.3393 21.7675 10.3361 20.8673C7.32983 21.5194 6.695 19.4178 6.695 19.4178C6.20533 18.1698 5.49575 17.8372 5.49575 17.8372C4.51533 17.1666 5.5705 17.1818 5.5705 17.1818C6.656 17.2576 7.22475 18.2954 7.22475 18.2954C8.18892 19.9464 9.75542 19.4698 10.3686 19.1935C10.4672 18.4948 10.7488 18.0181 11.0565 17.7483C8.658 17.4764 6.136 16.5491 6.136 12.4075C6.136 11.2299 6.55742 10.2636 7.24533 9.50958C7.13592 9.2355 6.76217 8.13592 7.35258 6.64958C7.35258 6.64958 8.25933 6.35817 10.3231 7.75567C11.2045 7.51589 12.1137 7.3935 13.0271 7.39167C13.9405 7.39315 14.8498 7.51554 15.7311 7.75567C17.7959 6.35708 18.7016 6.64958 18.7016 6.64958C19.292 8.13592 18.9215 9.2355 18.8088 9.50958C19.5022 10.2636 19.9182 11.2288 19.9182 12.4075C19.9182 16.5599 17.394 17.4721 14.9868 17.7397C15.3714 18.0733 15.7181 18.732 15.7181 19.7395C15.7181 21.1847 15.7051 22.3503 15.7051 22.7046C15.7051 22.9938 15.8979 23.3297 16.4493 23.2235C20.7415 21.7913 23.8333 17.744 23.8333 12.9719C23.8333 7.00383 18.9963 2.16675 13.0282 2.16675Z"
                  fill="#D3E97A"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

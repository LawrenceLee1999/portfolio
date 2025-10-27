export default function Hero() {
  return (
    <section
      id="hero"
      className="section-wrapper flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-10"
    >
      <div className="w-full md:w-1/2 max-w-xl space-y-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-[80px] xl:text-[101px]leading-[0.9] max-w-full md:max-w-[544px]">
          Hey, I'm <br />
          LAWRENCE
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-full md:max-w-[544px]">
          I'm a full-stack developer who enjoys building real-world apps with
          clean, scalable code. Passionate about solving problems and always
          learning something new.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
          <a
            href="#contact"
            aria-label="Contact"
            className="group relative w-full max-w-[280px] sm:w-[187px] h-[54px] bg-[var(--color-accent)] text-black font-bold rounded-full flex items-center justify-center px-4 pr-12"
          >
            <span className="z-10">LET'S TALK</span>
            <span className="absolute right-4 w-4 h-4 bg-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-8 group-hover:h-8">
              <svg
                className="w-3 h-3 text-[var(--color-accent)] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </a>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/lawrence-lee-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-[54px] h-[54px] rounded-full bg-neutral-800 flex items-center justify-center"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z"
                  fill="#D3E97A"
                />
                <path
                  d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z"
                  fill="#D3E97A"
                />
              </svg>
            </a>
            <a
              href="https://github.com/LawrenceLee1999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-[54px] h-[54px] rounded-full bg-neutral-800 flex items-center justify-center"
            >
              <svg
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
      <div className="aspect-[4/5] w-full max-w-[500px] flex justify-center">
        <img
          src="/lawrence.jpeg"
          alt="Lawrence"
          className="w-full h-full rounded-[var(--radius-lg)] object-cover"
        />
      </div>
    </section>
  );
}

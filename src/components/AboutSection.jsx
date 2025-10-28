import SkillsGrid from "./SkillsGrid";

export default function AboutSection({
  showPhoto = true,
  showLink = true,
  showButtons = true,
  showTechStack = true,
}) {
  return (
    <section id="about" className="section-wrapper flex flex-col gap-20">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-10">
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-[76px] leading-tight text-center md:text-left">
            About Me
          </h2>
        </div>
        <div className="xl:max-w-[704px] text-center md:text-left">
          <h3 className="text-xl sm:text-3xl mb-5">
            Full-stack developer from Paisley with a science background
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10">
            I'm a full-stack developer based in Paisley with a background in
            Chemistry with drug discovery. I enjoy building real-world apps and
            figuring out how things work. Right now, I’m exploring React,
            Node.js and Express — and always keen to learn more. Outside of
            coding, you'll usually find me playing football, out on the golf
            course, or getting stuck into a good game.
          </p>
          {showLink && (
            <a
              href="/about"
              target="_blank"
              className="text-[var(--color-accent)] font-bold border-b border-[var(--color-accent)]"
            >
              MORE ABOUT ME
            </a>
          )}

          {showButtons && (
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="/Lawrence-Lee-Resume.pdf"
                download
                className="group relative w-full max-w-[280px] h-[54px] bg-[var(--color-accent)] text-black font-bold rounded-full flex items-center justify-center px-4 pr-12"
              >
                <span className="z-10">DOWNLOAD RESUME</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="absolute right-5 size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
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
          )}
        </div>
      </div>

      {showPhoto && (
        <img
          src="/10k-photo.jpeg"
          alt="Photo of me, cammy and uncle Jake after Glasgow 10k"
          className="w-full h-auto object-cover rounded-xl"
        />
      )}

      {showTechStack && (
        <div className="flex flex-col xl:flex-row xl:justify-between gap-10">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-[76px] leading-tight text-center md:text-left">
              Tech Stack
            </h2>
          </div>
          <div className="xl:max-w-[704px] text-center md:text-left">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Here's a look at some of the tools and technologies I've been
              working with lately — and I'm always up for learning new ones too:
            </p>
            <SkillsGrid />
          </div>
        </div>
      )}
    </section>
  );
}

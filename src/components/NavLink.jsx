"use client";

import { useRouter } from "next/navigation";

export default function NavLink({ href, children, className = "" }) {
  const router = useRouter();

  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();

      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      router.push("/");

      setTimeout(() => {
        const elAfter = document.querySelector(href);
        if (elAfter) {
          elAfter.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return;
    }

    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

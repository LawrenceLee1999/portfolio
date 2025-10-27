export default function Footer() {
  return (
    <footer>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed m-5">
        © {new Date().getFullYear()} Lawrence Lee.
      </p>
    </footer>
  );
}

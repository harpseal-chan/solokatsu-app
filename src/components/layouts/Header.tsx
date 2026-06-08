import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full bg-sk-secondary backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl text-sk-text hover:text-sk-text/50 transition-colors duration-300"
        >
          そろなび
        </Link>
      </header>
    </div>
  );
}

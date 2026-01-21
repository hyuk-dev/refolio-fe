import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-3">
      <Link href="/"><h1 className="text-xl sm:text-2xl font-semibold whitespace-nowrap">리폴리오</h1></Link>
    </header>
  );
}

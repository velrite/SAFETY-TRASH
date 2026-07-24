import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">Velrite</Link>
        <div className="flex gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="border-t mt-24 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
      © {new Date().getFullYear()} Velrite. All rights reserved.
    </footer>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          We Design Secure Cloud Platforms That Scale.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Velrite helps engineering-driven companies build reliable, secure, and automated infrastructure — from Kubernetes platforms to CI/CD pipelines to cloud security.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/contact" className="rounded-md bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700">
            Book a Discovery Call
          </Link>
          <Link href="/case-studies" className="rounded-md border px-6 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900">
            View Case Studies
          </Link>
        </div>
      </section>
    </main>
  );
}

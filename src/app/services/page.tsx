import Link from "next/link";

const services = [
  { slug: "platform-engineering", title: "Platform Engineering", desc: "Internal developer platforms, Kubernetes, and GitOps." },
  { slug: "devsecops", title: "DevSecOps", desc: "Security automation baked into your CI/CD pipeline." },
  { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Terraform-managed, reliable, and cost-optimized cloud." },
  { slug: "systems-engineering", title: "Systems Engineering", desc: "Linux infrastructure, observability, and reliability engineering." },
];

export default function Services() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Services</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        We help engineering teams build infrastructure that's secure, reliable, and built to scale.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-lg border p-6 hover:border-primary transition-colors"
          >
            <h2 className="font-medium text-lg">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

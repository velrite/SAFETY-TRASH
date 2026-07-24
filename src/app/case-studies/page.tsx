const caseStudies = [
  {
    title: "Cloud Migration",
    desc: "Migrating legacy infrastructure to a modern, containerized cloud environment with zero downtime.",
  },
  {
    title: "Platform Engineering",
    desc: "Building an internal developer platform to standardize deployments across engineering teams.",
  },
  {
    title: "DevSecOps Transformation",
    desc: "Embedding security scanning and policy enforcement directly into CI/CD pipelines.",
  },
  {
    title: "CI/CD Modernization",
    desc: "Replacing manual deployment processes with fully automated, tested release pipelines.",
  },
  {
    title: "Infrastructure Automation",
    desc: "Converting manually managed servers into version-controlled, reproducible Terraform infrastructure.",
  },
  {
    title: "Security Hardening",
    desc: "Auditing and hardening cloud infrastructure against common misconfigurations and attack vectors.",
  },
];

export default function CaseStudies() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Case Studies</h1>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Representative examples of the kind of infrastructure work we do. Specific client details are withheld or generalized for confidentiality.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {caseStudies.map((c) => (
          <div key={c.title} className="rounded-lg border p-6">
            <h2 className="font-medium text-lg">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

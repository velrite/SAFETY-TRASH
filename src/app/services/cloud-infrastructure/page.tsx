export default function CloudInfrastructure() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Cloud Infrastructure</h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        We design and manage cloud infrastructure using Infrastructure as Code, so
        every environment is reproducible, auditable, and version-controlled — not
        a collection of manual changes nobody remembers making.
      </p>

      <h2 className="mt-12 text-xl font-medium">What's included</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>Terraform-managed infrastructure across AWS, Azure, or GCP</li>
        <li>Multi-environment architecture (dev, staging, production)</li>
        <li>Cloud migration and modernization</li>
        <li>Cost optimization and right-sizing</li>
        <li>Disaster recovery and backup strategy</li>
      </ul>

      <h2 className="mt-12 text-xl font-medium">Why it matters</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Manually managed cloud infrastructure is fragile and hard to audit. Infrastructure
        as Code turns your cloud environment into something you can review, test, and roll
        back like software — reducing both operational risk and cloud spend.
      </p>
    </main>
  );
}

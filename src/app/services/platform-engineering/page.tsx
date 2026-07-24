export default function PlatformEngineering() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Platform Engineering</h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        We design and build internal developer platforms that let your engineering
        teams ship faster without needing deep infrastructure expertise. This means
        standardized deployments, self-service tooling, and golden paths that reduce
        cognitive load on product teams.
      </p>

      <h2 className="mt-12 text-xl font-medium">What's included</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>Internal developer platform design and implementation</li>
        <li>Kubernetes cluster architecture and management</li>
        <li>GitOps-based deployment workflows</li>
        <li>Developer self-service tooling and templates</li>
        <li>Platform documentation and onboarding</li>
      </ul>

      <h2 className="mt-12 text-xl font-medium">Why it matters</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Without a platform layer, every team reinvents infrastructure decisions on
        their own — leading to inconsistency, security gaps, and slower onboarding.
        A well-designed platform turns infrastructure into a paved road: consistent,
        secure by default, and easy for developers to use correctly.
      </p>
    </main>
  );
}

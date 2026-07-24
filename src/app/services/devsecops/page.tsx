export default function DevSecOps() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">DevSecOps</h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        We embed security directly into your CI/CD pipeline so vulnerabilities are
        caught before they reach production — not after. Security becomes a built-in
        part of the deployment process, not a separate gate that slows teams down.
      </p>

      <h2 className="mt-12 text-xl font-medium">What's included</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>Automated security scanning in CI/CD (SAST, dependency scanning, secrets detection)</li>
        <li>Container image scanning and hardening</li>
        <li>Policy-as-code enforcement</li>
        <li>Compliance automation (SOC 2, ISO 27001 readiness support)</li>
        <li>Incident response process design</li>
      </ul>

      <h2 className="mt-12 text-xl font-medium">Why it matters</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Security debt compounds silently until it becomes a breach, an audit failure,
        or a lost enterprise deal. Automating security checks into the pipeline catches
        issues while they're cheap to fix, and gives you evidence of due diligence when
        customers or auditors ask for it.
      </p>
    </main>
  );
}

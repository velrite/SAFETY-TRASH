export default function SystemsEngineering() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Systems Engineering</h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        We build the observability, reliability, and Linux infrastructure foundations
        that keep production systems running — and give your team the visibility to
        know why something broke before customers notice.
      </p>

      <h2 className="mt-12 text-xl font-medium">What's included</h2>
      <ul className="mt-4 space-y-3 text-muted-foreground">
        <li>Observability stack design (metrics, logs, traces)</li>
        <li>Linux infrastructure administration and hardening</li>
        <li>Container platform operations</li>
        <li>Incident response and on-call process design</li>
        <li>Reliability engineering and SLO definition</li>
      </ul>

      <h2 className="mt-12 text-xl font-medium">Why it matters</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        You can't fix what you can't see. Strong observability and reliability practices
        turn incidents from all-hands fire drills into routine, well-understood events —
        protecting both uptime and your team's time.
      </p>
    </main>
  );
}

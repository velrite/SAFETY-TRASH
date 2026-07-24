export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: July 2026</p>

      <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-lg font-medium text-foreground">Information We Collect</h2>
          <p className="mt-2">
            When you contact us through this website, we collect the information you
            provide directly — such as your name, email address, company, and the
            details of your inquiry. We do not collect this information through any
            other means.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">How We Use Information</h2>
          <p className="mt-2">
            Information submitted through our contact form is used solely to respond
            to your inquiry and to evaluate potential engagements. We do not sell or
            share your information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Cookies and Analytics</h2>
          <p className="mt-2">
            This site may use basic, privacy-respecting analytics to understand
            aggregate traffic patterns. No personally identifying advertising
            cookies are used.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Data Retention</h2>
          <p className="mt-2">
            Contact form submissions are retained only as long as necessary to
            respond to your inquiry or maintain a business relationship.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be directed to us via the contact form
            on this site.
          </p>
        </section>
      </div>
    </main>
  );
}

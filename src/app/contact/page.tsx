export default function Contact() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Let's talk about your infrastructure.</h1>
      <p className="mt-4 text-muted-foreground">
        We typically respond within 1 business day.
      </p>
      <form className="mt-10 space-y-4">
        <input className="w-full border rounded-md p-3 bg-background" placeholder="Name" />
        <input className="w-full border rounded-md p-3 bg-background" placeholder="Work Email" />
        <input className="w-full border rounded-md p-3 bg-background" placeholder="Company" />
        <textarea className="w-full border rounded-md p-3 bg-background" rows={5} placeholder="What are you looking to build?" />
        <button className="rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium">
          Send Message
        </button>
      </form>
    </main>
  );
}

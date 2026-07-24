const posts = [
  {
    slug: "hello-world",
    title: "Getting Started with Platform Engineering",
    excerpt: "Why platform engineering matters for teams scaling infrastructure.",
    date: "July 23, 2026",
  },
];

export default function Blog() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="mt-4 text-muted-foreground">
        Technical writing on platform engineering, DevSecOps, and cloud infrastructure.
      </p>
      <div className="mt-10 space-y-8">
        {posts.map((p) => (
          <div key={p.slug} className="border-b pb-8">
            <h2 className="text-xl font-medium">{p.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.date}</p>
            <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

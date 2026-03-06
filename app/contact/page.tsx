import Container from '@/components/container';
import SectionTitle from '@/components/section-title';

export default function ContactPage() {
  return (
    <Container>
      <section className="py-16">
        <SectionTitle title="Contact" subtitle="Open to research collaborations and thoughtful conversations in quantum computing and machine learning." />
        <form className="max-w-2xl space-y-4 rounded-2xl border border-border bg-muted/20 p-6" action="/api/contact" method="POST">
          <label className="block text-sm">Name
            <input name="name" required className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm">Email
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm">Message
            <textarea name="message" required rows={6} className="mt-1 w-full rounded-lg border border-border bg-transparent px-3 py-2" />
          </label>
          <button className="rounded-full border border-accent px-5 py-2 text-sm hover:bg-accent/10" type="submit">Send message</button>
          <p className="text-xs text-fg/70">If the form backend is unavailable, email directly at <a className="text-accent" href="mailto:sounak766@gmail.com">sounak766@gmail.com</a>.</p>
        </form>
      </section>
    </Container>
  );
}

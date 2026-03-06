import Link from "next/link";
import { profile } from "@/content/profile";
import { BlochMotif, CircuitMotif } from "@/components/QuantumMotifs";
import { ButtonLink } from "@/components/ui";

export function HeroScientist() {
  return (
    <section className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-20">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">Research Portfolio</p>
        <div className="space-y-3">
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">{profile.name}</h1>
          <h2 className="font-serif text-xl text-foreground/85 md:text-3xl">{profile.role}</h2>
        </div>
        <p className="max-w-3xl font-serif text-xl leading-relaxed text-foreground/90 md:text-2xl">{profile.tagline}</p>
        <p className="max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">{profile.summary}</p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/blog">Read my writing</ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            View research
          </ButtonLink>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
          <Link href={`mailto:${profile.email}`} className="hover:text-accent">
            Email
          </Link>
          <Link href={profile.linkedin} className="hover:text-accent">
            LinkedIn
          </Link>
          <Link href={profile.cvHref} className="hover:text-accent">
            Download CV
          </Link>
        </div>
      </div>
      <aside className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 h-36">
          <CircuitMotif />
        </div>
        <div className="h-36">
          <BlochMotif />
        </div>
      </aside>
    </section>
  );
}

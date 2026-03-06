import { profile } from "@/content/profile";

export function NowStrip() {
  return (
    <section className="my-10 rounded-xl border border-border bg-card px-6 py-4 text-sm text-foreground/80">
      <p>
        <span className="font-semibold text-foreground">Currently:</span> {profile.currently}
      </p>
      <p className="mt-1">
        <span className="font-semibold text-foreground">Focus:</span> {profile.focus}
      </p>
    </section>
  );
}

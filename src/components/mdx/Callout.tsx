import { ReactNode } from "react";

export function Callout({ title = "Note", children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="my-6 rounded-lg border border-accent/30 bg-accent/5 p-4">
      <p className="mb-1 text-sm font-semibold tracking-wide text-accent">{title}</p>
      <div className="text-sm text-foreground/80">{children}</div>
    </aside>
  );
}

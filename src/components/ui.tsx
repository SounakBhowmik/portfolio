import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6 space-y-2">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm text-foreground/75 md:text-base">{subtitle}</p> : null}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={cn("rounded-xl border border-border bg-card p-5 shadow-sm", className)}>{children}</article>;
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-border px-2.5 py-1 text-xs text-foreground/80">{children}</span>;
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost" }) {
  const styles = {
    primary: "bg-accent text-background hover:bg-accent/90",
    secondary: "border border-border bg-card hover:border-accent/40",
    ghost: "text-foreground/80 hover:text-accent"
  };

  return (
    <Link href={href} className={cn("inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors", styles[variant])}>
      {children}
    </Link>
  );
}

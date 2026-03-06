import { cn } from "@/lib/utils";

type MotifProps = {
  className?: string;
};

export function CircuitMotif({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={cn("h-full w-full text-accent/45", className)}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <line x1="22" y1="60" x2="298" y2="60" />
        <line x1="22" y1="110" x2="298" y2="110" />
        <line x1="22" y1="160" x2="298" y2="160" />
        <circle cx="110" cy="60" r="10" />
        <circle cx="190" cy="110" r="10" />
        <circle cx="250" cy="160" r="10" />
        <path d="M110 60 C146 30, 160 30, 190 110" />
        <path d="M190 110 C220 180, 226 180, 250 160" />
      </g>
    </svg>
  );
}

export function BlochMotif({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={cn("h-full w-full text-accent/35", className)}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="120" cy="120" r="80" />
        <ellipse cx="120" cy="120" rx="80" ry="32" />
        <ellipse cx="120" cy="120" rx="32" ry="80" />
        <line x1="120" y1="120" x2="168" y2="76" />
        <line x1="120" y1="40" x2="120" y2="200" />
        <line x1="40" y1="120" x2="200" y2="120" />
      </g>
    </svg>
  );
}

export function WaveMotif({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 400 48"
      className={cn("h-full w-full text-accent/30", className)}
      aria-hidden="true"
    >
      <path
        d="M0 24 C 40 4, 60 4, 100 24 C 140 44, 160 44, 200 24 C 240 4, 260 4, 300 24 C 340 44, 360 44, 400 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

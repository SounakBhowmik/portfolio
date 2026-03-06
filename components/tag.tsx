export default function Tag({ label }: { label: string }) {
  return <span className="rounded-full border border-border px-3 py-1 text-xs text-fg/80">{label}</span>;
}

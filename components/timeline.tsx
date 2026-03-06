type TimelineItem = { role: string; org: string; date: string; detail: string };

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-s border-border">
      {items.map((item) => (
        <li key={`${item.role}-${item.org}`} className="mb-8 ms-6">
          <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-accent" />
          <h3 className="font-medium">{item.role}</h3>
          <p className="text-sm text-fg/75">{item.org}</p>
          <p className="text-xs text-fg/60">{item.date}</p>
          <p className="mt-2 text-sm text-fg/80">{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}

import Link from "next/link";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-foreground/75 md:flex-row md:items-center md:justify-between">
        <p>{profile.bio}</p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link key={social.label} href={social.href} className="hover:text-accent">
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

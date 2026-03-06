import Container from './container';
import { profile } from '@/src/content/profile';
import { socials } from '@/src/content/socials';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border py-12">
      <Container>
        <p className="max-w-2xl text-sm text-fg/75">{profile.footerBio}</p>
        <div className="mt-4 flex gap-4">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-accent hover:underline">
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

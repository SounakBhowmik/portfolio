import Link from 'next/link';
import Container from './container';
import ThemeToggle from './theme-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="text-sm font-semibold tracking-wide">
            Sounak Bhowmik
          </Link>
          <div className="flex items-center gap-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-fg/80 hover:text-fg">
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}

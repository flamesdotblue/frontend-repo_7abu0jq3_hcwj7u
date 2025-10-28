import { useState } from 'react';
import { Menu, X, Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-fuchsia-500/30">
                <Rocket size={18} />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-white">
                Your Name
              </span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="ml-2 hidden items-center gap-3 md:flex">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
                >
                  <Mail size={16} />
                  Hire me
                </a>
              </div>
            </nav>

            <button
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white/80 md:hidden"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="grid gap-2 border-t border-white/10 px-4 py-3 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 p-2 text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
                >
                  <Mail size={16} />
                  Hire me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

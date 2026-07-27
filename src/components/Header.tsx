import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { key: 'nav.home',        path: '/',              external: false },
  { key: 'nav.menu',        path: '/images/Menu.pdf', external: true },
  { key: 'nav.booking',     path: '/booking',       external: false },
  { key: 'nav.meetings',    path: '/meetings',      external: false },
  { key: 'nav.rentAsVenue', path: '/rent-as-venue', external: false },
  { key: 'nav.about',       path: '/about',         external: false },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#111] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/fjosid_icon_row.png"
              alt="Fjósið"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ key, path, external }) =>
              external ? (
                <a
                  key={key}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors tracking-wide"
                >
                  {t(key)}
                </a>
              ) : (
                <Link
                  key={key}
                  to={path}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors',
                    isActive(path)
                      ? 'text-amber-400'
                      : 'text-stone-300 hover:text-amber-400'
                  )}
                >
                  {t(key)}
                </Link>
              )
            )}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Social (desktop only) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61551701065518"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/fjosid2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
            </div>

            {/* Language toggle */}
            <div className="flex rounded overflow-hidden border border-stone-600 text-xs">
              {(['fo', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                  className={cn(
                    'px-2.5 py-1 font-medium uppercase tracking-wider transition-colors',
                    i18n.language === lang
                      ? 'bg-amber-500 text-black'
                      : 'text-stone-300 hover:text-white'
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="text-stone-300 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto w-72 h-full bg-[#111] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-amber-400 font-display font-semibold text-lg">Fjósið</span>
              <button
                onClick={() => setOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
              {NAV_LINKS.map(({ key, path, external }) => (
                external ? (
                  <a
                    key={key}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-lg text-stone-200 hover:text-amber-400 hover:bg-white/5 transition-colors text-sm font-medium"
                  >
                    {t(key)}
                  </a>
                ) : (
                  <Link
                    key={key}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      isActive(path)
                        ? 'text-amber-400 bg-white/5'
                        : 'text-stone-200 hover:text-amber-400 hover:bg-white/5'
                    )}
                  >
                    {t(key)}
                  </Link>
                )
              ))}
            </nav>
            <div className="px-6 py-5 border-t border-white/10 flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61551701065518"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/fjosid2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

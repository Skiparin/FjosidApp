import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#111] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/">
            <img
              src="/images/fjosid_icon_row.png"
              alt="Fjósið"
              className="h-12 w-auto object-contain mb-4"
            />
          </Link>
          <p className="text-stone-400 text-sm leading-relaxed">
            A unique farm-to-table restaurant in Bøur, Faroe Islands.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=61551701065518"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-amber-400 transition-colors"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/fjosid2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-amber-400 transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Navigate
          </h3>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/' },
              { label: 'Menu', href: '/images/Menu.pdf' },
              { label: 'Booking', to: '/booking' },
              { label: 'Meetings', to: '/meetings' },
              { label: 'Rent as Venue', to: '/rent-as-venue' },
            ].map(({ label, to, href }) => (
              <li key={label}>
                {to ? (
                  <Link to={to} className="text-stone-400 hover:text-amber-400 text-sm transition-colors">
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Partners
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.Theview.fo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
              >
                {t('footer.theView')}
              </a>
            </li>
            <li>
              <a
                href="https://www.Bluegate.fo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
              >
                {t('footer.bluegate')}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-stone-400 text-sm">
              <MapPin size={15} className="mt-0.5 shrink-0 text-amber-500" />
              <span>
                {t('footer.address')}<br />
                {t('footer.city')}<br />
                {t('footer.country')}
              </span>
            </li>
            <li className="flex items-center gap-2 text-stone-400 text-sm">
              <Phone size={15} className="shrink-0 text-amber-500" />
              <span>{t('footer.phone')}</span>
            </li>
            <li className="flex items-center gap-2 text-stone-400 text-sm">
              <Mail size={15} className="shrink-0 text-amber-500" />
              <span className="lowercase">{t('footer.email')}</span>
            </li>
          </ul>
          <p className="text-stone-600 text-xs mt-4">{t('footer.cvr')}</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 text-center text-stone-600 text-xs">
        © {new Date().getFullYear()} Fjósið. All rights reserved.
      </div>
    </footer>
  );
}

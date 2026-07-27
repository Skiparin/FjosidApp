import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <section ref={ref} className={`will-animate ${className}`}>{children}</section>;
}

const OWNERS = [
  { img: '/images/jenny_heri.jpg',    name: 'Jenny & Heri',    textKey: 'about.jennyHeri' },
  { img: '/images/ellef_eystein.jpg', name: 'Eystein & Ellef', textKey: 'about.eydsteinEllef' },
  { img: '/images/eyðfinn_poula.jpg', name: 'Eyðfinn & Poula', textKey: 'about.eydfinnPoula' },
  { img: '/images/tórður.jpg',         name: 'Tórður',          textKey: 'about.tordur' },
  { img: '/images/trondur.jpg',        name: 'Tróndur',         textKey: 'about.trondur' },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* Hero */}
      <div className="relative bg-[#111] py-28 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/høli_11.jpg)' }}
        />
        <div className="relative z-10">
          <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-4">
            {t('about.pageTag')}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-white mb-5">
            {t('about.title')}
          </h1>
          <p className="text-stone-300 text-base max-w-xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>
      </div>

      {/* ── History: Jóan Hendrik ── */}
      <Section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-3">
              {t('about.historyTag')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-stone-900">
              {t('about.historyTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/joan_hendrik.jpg"
                alt="Jóan Hendrik Guttesen"
                className="w-full h-[500px] object-cover rounded shadow-md"
              />
              <div className="absolute -bottom-5 -left-5 bg-[#111] text-white px-5 py-4 shadow-lg rounded hidden md:block">
                <p className="font-display text-base font-semibold leading-none">1976</p>
                <p className="text-xs text-stone-400 mt-1">{t('about.joanBadge')}</p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-3xl font-semibold text-stone-900 mb-2">
                Jóan Hendrik Guttesen
              </h3>
              <p className="text-amber-600 text-sm font-medium mb-6">{t('about.joanRole')}</p>
              <p className="text-stone-500 text-base leading-relaxed mb-5">{t('about.joanText1')}</p>
              <p className="text-stone-500 text-base leading-relaxed">{t('about.joanText2')}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Divider ── */}
      <div className="bg-[#111] py-16 px-6 text-center">
        <p className="text-stone-400 text-sm max-w-2xl mx-auto leading-relaxed italic font-display text-lg">
          "{t('about.quote')}"
        </p>
      </div>

      {/* ── Owners ── */}
      <Section className="py-24 bg-[#fdfcf9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-3">
              {t('about.teamTag')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-stone-900">
              {t('about.teamTitle')}
            </h2>
            <p className="text-stone-400 text-base mt-4 max-w-xl mx-auto">{t('about.teamSubtitle')}</p>
          </div>

          {/* First row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {OWNERS.slice(0, 3).map(({ img, name, textKey }) => (
              <PersonCard key={name} img={img} name={name} text={t(textKey)} />
            ))}
          </div>
          {/* Second row: 2 cards centred */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
            {OWNERS.slice(3).map(({ img, name, textKey }) => (
              <PersonCard key={name} img={img} name={name} text={t(textKey)} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

function PersonCard({ img, name, text }: { img: string; name: string; text: string }) {
  return (
    <div className="group bg-white rounded shadow-sm overflow-hidden border border-stone-100 hover:shadow-md transition-shadow">
      <div className="relative h-72 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="px-6 py-5">
        <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">{name}</h3>
        <p className="text-stone-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

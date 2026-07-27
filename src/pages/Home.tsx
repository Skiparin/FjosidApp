import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return (
    <section ref={ref} className={`will-animate ${className}`}>
      {children}
    </section>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      {/* ── Hero: full height minus sticky header ── */}
      <div className="relative h-[calc(100vh-4rem)] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/høli_11.jpg"
          alt={t('home.imageTitle')}
          className="absolute inset-0 w-full h-full object-cover object-[50%_79%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/65" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            {t('home.location_tag')}
          </p>
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-display font-semibold leading-tight mb-6">
            {t('home.imageTitle')}
          </h1>
          <p className="text-stone-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {t('home.imageText')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/booking')}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-7 py-3 rounded-sm transition-colors text-sm tracking-wide"
            >
              {t('home.bookingButton')}
              <ArrowRight size={16} />
            </button>
            <a
              href="/images/Menu.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 border border-white/60 hover:border-white text-white hover:bg-white/10 font-medium px-7 py-3 rounded-sm transition-colors text-sm tracking-wide"
            >
              {t('home.menuButton')}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </div>

      {/* ── Detail sections ── */}
      {/* Section 1 */}
      <Section className="grid md:grid-cols-2 border-b border-stone-200">
        <div className="relative h-80 md:h-[520px] overflow-hidden">
          <img src="/images/høli_2.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-12 py-20 bg-[#fdfcf9]">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-4">
            {t('home.section1_tag')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-6 leading-snug">
            {t('home.detailsTitle1')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-10">{t('home.details1')}</p>
          <button
            onClick={() => navigate('/booking')}
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500 transition-colors group"
          >
            {t('home.bookingButton')}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Section>

      {/* Section 2 */}
      <Section className="grid md:grid-cols-2 border-b border-stone-200">
        <div className="flex flex-col justify-center px-12 py-20 bg-stone-50 order-2 md:order-1">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-4">
            {t('home.section2_tag')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-6 leading-snug">
            {t('home.detailsTitle2')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-10">{t('home.details2')}</p>
          <a
            href="/images/Menu.pdf"
            target="_blank"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500 transition-colors group"
          >
            {t('home.menuButton')}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="relative h-80 md:h-[520px] overflow-hidden order-1 md:order-2">
          <img src="/images/neyt_1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Section>

      {/* Section 3 */}
      <Section className="grid md:grid-cols-2 border-b border-stone-200">
        <div className="relative h-80 md:h-[520px] overflow-hidden">
          <img src="/images/eplir_1.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-12 py-20 bg-[#fdfcf9]">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-4">
            {t('home.section3_tag')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-6 leading-snug">
            {t('home.detailsTitle3')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-10">{t('home.details3')}</p>
          <button
            onClick={() => navigate('/gallery')}
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500 transition-colors group"
          >
            {t('home.galleryButton')}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Section>

      {/* ── What we offer ── */}
      <Section className="py-28 bg-stone-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-3">
              {t('home.offersTag')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white">
              {t('home.whatWeOffer')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <OfferCard img="/images/luttakarar_3_2.jpg" label={t('home.dining')}  href="/images/Menu.pdf" navigate={navigate} />
            <OfferCard img="/images/luttakarar_7.jpg"   label={t('home.events')}  to="/meetings"         navigate={navigate} />
            <OfferCard img="/images/matur_14.jpg"        label={t('home.venue')}   to="/rent-as-venue"    navigate={navigate} />
          </div>
        </div>
      </Section>

      {/* ── About us teaser ── */}
      <Section className="py-24 bg-[#fdfcf9] border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 2×2 image grid — taller images, offset stagger */}
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/jenny_heri.jpg"    alt="Jenny & Heri"    className="w-full h-64 object-cover rounded shadow-sm" />
              <img src="/images/eyðfinn_poula.jpg" alt="Eyðfinn & Poula" className="w-full h-64 object-cover rounded shadow-sm mt-8" />
              <img src="/images/tórður.jpg"         alt="Tórður"          className="w-full h-64 object-cover rounded shadow-sm" />
              <img src="/images/trondur.jpg"        alt="Tróndur"         className="w-full h-64 object-cover rounded shadow-sm mt-8" />
            </div>
            <div>
              <p className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-4">
                {t('home.teamTag')}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold text-stone-900 mb-6 leading-snug">
                {t('home.aboutUs')}
              </h2>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                {t('home.aboutTeaser')}
              </p>
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500 transition-colors group"
              >
                {t('home.aboutButton')}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Map — satellite view ── */}
      <Section className="border-t border-stone-200">
        <div className="text-center py-10 px-6 bg-stone-50">
          <p className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-2">
            {t('home.mapTag')}
          </p>
          <h2 className="font-display text-3xl font-semibold text-stone-800">
            {t('home.location')}
          </h2>
        </div>
        <div className="w-full h-[480px]">
          <iframe
            title={t('home.location')}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488.4!2d-7.371621!3d62.086239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjLCsDA1JzEwLjUiTiA3wrAyMicxNy44Ilc!5e1!3m2!1sen!2sfo!4v1680000000000!5m2!1sen!2sfo"
          />
        </div>
      </Section>
    </div>
  );
}

function OfferCard({
  img, label, href, to, navigate,
}: {
  img: string; label: string; href?: string; to?: string;
  navigate: (path: string) => void;
}) {
  const inner = (
    <div className="group relative overflow-hidden cursor-pointer rounded-sm">
      <div className="relative h-80 overflow-hidden">
        <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/55 transition-colors" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-white text-xl font-semibold">{label}</h3>
        <div className="h-0.5 bg-amber-400 w-8 mt-2 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <div onClick={() => navigate(to!)}>{inner}</div>;
}

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Projector, Coffee, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <section ref={ref} className={`will-animate ${className}`}>{children}</section>;
}

export default function Meetings() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      {/* Page header */}
      <div className="bg-[#111] py-20 px-6 text-center">
        <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-3">
          Corporate & private
        </p>
        <h1 className="font-display text-5xl font-semibold text-white">{t('meetings.title')}</h1>
      </div>

      {/* Intro */}
      <Section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-10 py-16 bg-[#fdfcf9]">
          <p className="text-stone-500 text-[15px] leading-relaxed">{t('meetings.text')}</p>
        </div>
        <div className="relative h-72 md:h-auto overflow-hidden">
          <img src="/images/luttakarar_13.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Section>

      {/* Features strip */}
      <Section className="bg-stone-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Projector, title: 'AV Equipment', desc: 'Overhead projector, loudspeaker and flipboard included in all meeting rentals.' },
            { icon: Coffee, title: 'Catering', desc: 'Coffee, tea and water throughout the day. Optional breakfast, lunch or cake — order in advance.' },
            { icon: Clock, title: 'Flexible Duration', desc: 'Half-day 3,000 DKK (excl. VAT) · Full day 6,000 DKK (excl. VAT).' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-5">
              <div className="mt-1 shrink-0 p-2.5 rounded bg-amber-50 text-amber-600">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 mb-1">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Meeting venue details */}
      <Section className="grid md:grid-cols-2">
        <div className="relative h-72 md:h-auto overflow-hidden">
          <img src="/images/luttakarar_12.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-10 py-16 bg-[#fdfcf9]">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-3">Meetings</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-5 leading-snug">
            {t('meetings.title2')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-3">{t('meetings.text2')}</p>
          <p className="text-stone-400 text-sm">{t('meetings.text2b')}</p>
        </div>
      </Section>

      {/* Private events */}
      <Section className="grid md:grid-cols-2 bg-stone-50">
        <div className="flex flex-col justify-center px-10 py-16 order-2 md:order-1">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-3">Private events</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-5 leading-snug">
            {t('meetings.title3')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-3">{t('meetings.text3')}</p>
          <p className="text-stone-400 text-sm">{t('meetings.text3b')}</p>
        </div>
        <div className="relative h-72 md:h-auto overflow-hidden order-1 md:order-2">
          <img src="/images/luttakarar_7.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Section>

      {/* Booking CTA */}
      <Section className="grid md:grid-cols-2">
        <div className="relative h-72 md:h-auto overflow-hidden">
          <img src="/images/luttakarar_6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-10 py-16 bg-[#fdfcf9]">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-3">Reserve</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-5 leading-snug">
            {t('meetings.title4')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-8">{t('meetings.text4')}</p>
          <button
            onClick={() => navigate('/booking')}
            className="self-start inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-7 py-3 rounded-sm transition-colors text-sm"
          >
            {t('meetings.bookingButton')}
            <ArrowRight size={16} />
          </button>
        </div>
      </Section>
    </div>
  );
}

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

  const features = [
    { icon: Projector, titleKey: 'meetings.feature1_title', descKey: 'meetings.feature1_desc' },
    { icon: Coffee, titleKey: 'meetings.feature2_title', descKey: 'meetings.feature2_desc' },
    { icon: Clock, titleKey: 'meetings.feature3_title', descKey: 'meetings.feature3_desc' },
  ];

  return (
    <div className="bg-[#fdfcf9]">
      <div className="bg-[#111] py-20 px-6 text-center">
        <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-3">
          {t('meetings.pageTag')}
        </p>
        <h1 className="font-display text-5xl font-semibold text-white">{t('meetings.title')}</h1>
      </div>

      {/* Intro */}
      <Section className="grid md:grid-cols-2 border-b border-stone-200">
        <div className="flex flex-col justify-center px-12 py-20 bg-[#fdfcf9] order-2 md:order-1">
          <p className="text-stone-500 text-[15px] leading-relaxed">{t('meetings.text')}</p>
        </div>
        <div className="relative h-80 md:h-[520px] overflow-hidden order-1 md:order-2">
          <img src="/images/luttakarar_13.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Section>

      {/* Feature strip */}
      <Section className="bg-stone-50 py-20 px-6 border-b border-stone-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="flex gap-5 p-5 bg-white border border-stone-100 rounded-sm shadow-sm">
              <div className="mt-1 shrink-0 p-2.5 rounded bg-amber-50 text-amber-600">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 mb-1">{t(titleKey)}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Meeting venue */}
      <Section className="grid md:grid-cols-2 border-b border-stone-200">
        <div className="relative h-80 md:h-[520px] overflow-hidden">
          <img src="/images/luttakarar_12.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-12 py-20 bg-[#fdfcf9]">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-4">
            {t('meetings.section1_tag')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-6 leading-snug">
            {t('meetings.title2')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-4">{t('meetings.text2')}</p>
          <p className="text-stone-400 text-sm">{t('meetings.text2b')}</p>
        </div>
      </Section>

      {/* Private events */}
      <Section className="grid md:grid-cols-2 border-b border-stone-200">
        <div className="flex flex-col justify-center px-12 py-20 bg-stone-50 order-2 md:order-1">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-4">
            {t('meetings.section2_tag')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-6 leading-snug">
            {t('meetings.title3')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-4">{t('meetings.text3')}</p>
          <p className="text-stone-400 text-sm">{t('meetings.text3b')}</p>
        </div>
        <div className="relative h-80 md:h-[520px] overflow-hidden order-1 md:order-2">
          <img src="/images/luttakarar_7.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Section>

      {/* Booking CTA */}
      <Section className="py-24 bg-[#fdfcf9]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-stone-200 rounded-sm shadow-sm p-10 sm:p-12 text-center">
            <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-4 block">
              {t('meetings.section3_tag')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-6 leading-snug">
              {t('meetings.title4')}
            </h2>
            <p className="text-stone-500 text-[15px] leading-relaxed mb-10 max-w-2xl mx-auto">{t('meetings.text4')}</p>
            <button
              onClick={() => navigate('/booking')}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-7 py-3 rounded-sm transition-colors text-sm"
            >
              {t('meetings.bookingButton')}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

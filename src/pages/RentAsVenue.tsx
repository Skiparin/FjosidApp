import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Clock, DollarSign, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <section ref={ref} className={`will-animate ${className}`}>{children}</section>;
}

export default function RentAsVenue() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      {/* Page header */}
      <div className="bg-[#111] py-20 px-6 text-center">
        <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-3">
          Your celebration
        </p>
        <h1 className="font-display text-5xl font-semibold text-white">{t('rentAsVenue.title')}</h1>
      </div>

      {/* Intro */}
      <Section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-10 py-16 bg-[#fdfcf9]">
          <p className="text-stone-500 text-[15px] leading-relaxed">{t('rentAsVenue.text')}</p>
        </div>
        <div className="relative h-72 md:h-auto overflow-hidden">
          <img src="/images/luttakarar_8.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Section>

      {/* Pricing cards */}
      <Section className="bg-stone-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-xs uppercase tracking-widest font-medium">Simple pricing</span>
            <h2 className="font-display text-4xl font-semibold text-stone-800 mt-3">{t('rentAsVenue.title3')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Half Day', price: '3,000', unit: 'DKK', desc: 'Perfect for shorter gatherings and celebrations.' },
              { label: 'Full Day', price: '6,000', unit: 'DKK', desc: 'Exclusive all-day access from setup to cleanup.' },
            ].map(({ label, price, unit, desc }) => (
              <div key={label} className="bg-white border border-stone-100 rounded p-8 text-center shadow-sm">
                <p className="text-stone-400 text-sm uppercase tracking-widest mb-3">{label}</p>
                <p className="font-display text-5xl font-semibold text-stone-800 mb-1">
                  {price} <span className="text-2xl text-stone-400">{unit}</span>
                </p>
                <p className="text-stone-400 text-xs mb-5">VAT included</p>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Highlights */}
      <Section className="py-16 px-6 bg-[#fdfcf9]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Clock, title: 'Flexible Hours', desc: t('rentAsVenue.text2') },
            { icon: Star, title: 'Unique Setting', desc: 'A carefully renovated barn with rustic charm in the heart of Bøur.' },
            { icon: DollarSign, title: 'Transparent Pricing', desc: t('rentAsVenue.text3') },
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

      {/* Sections */}
      <Section className="grid md:grid-cols-2">
        <div className="relative h-72 md:h-auto overflow-hidden">
          <img src="/images/luttakarar_9.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-10 py-16 bg-[#fdfcf9]">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-3">Options</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-5 leading-snug">
            {t('rentAsVenue.title2')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed">{t('rentAsVenue.text2')}</p>
        </div>
      </Section>

      {/* Booking CTA */}
      <Section className="grid md:grid-cols-2 bg-stone-50">
        <div className="flex flex-col justify-center px-10 py-16 order-2 md:order-1">
          <span className="text-amber-600 text-xs uppercase tracking-widest font-medium mb-3">Book now</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-stone-800 mb-5 leading-snug">
            {t('rentAsVenue.title4')}
          </h2>
          <p className="text-stone-500 text-[15px] leading-relaxed mb-8">{t('rentAsVenue.text4')}</p>
          <button
            onClick={() => navigate('/booking')}
            className="self-start inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-7 py-3 rounded-sm transition-colors text-sm"
          >
            {t('rentAsVenue.bookingButton')}
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="relative h-72 md:h-auto overflow-hidden order-1 md:order-2">
          <img src="/images/luttakarar_5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Section>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { Mail, Users, CalendarDays, MessageSquare } from 'lucide-react';

export default function Booking() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#fdfcf9]">
      {/* Hero */}
      <div className="bg-[#111] py-20 px-6 text-center">
        <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-3">
          {t('booking.pageTag')}
        </p>
        <h1 className="font-display text-5xl font-semibold text-white">{t('booking.title')}</h1>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="/images/høli_1.jpg"
              alt={t('booking.imageAlt')}
              className="w-full h-[520px] object-cover rounded shadow-md"
            />
            <div className="absolute -bottom-5 -right-5 bg-amber-500 text-black px-5 py-4 shadow-lg rounded hidden md:block">
              <p className="font-display text-lg font-semibold leading-none">{t('booking.badgeGuests')}</p>
              <p className="text-xs font-medium mt-1 opacity-80">{t('booking.badgeSub')}</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-amber-600 text-xs uppercase tracking-widest font-semibold mb-4">
              {t('booking.sectionTag')}
            </p>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mb-6 leading-snug">
              {t('booking.heading')}
            </h2>
            <p className="text-stone-500 text-base leading-relaxed mb-8">
              {t('booking.intro')}
            </p>

            {/* Info cards */}
            <div className="space-y-4 mb-10">
              <InfoCard icon={<Users size={18} className="text-amber-500" />} text={t('booking.infoGuests')} />
              <InfoCard icon={<CalendarDays size={18} className="text-amber-500" />} text={t('booking.infoAppointment')} />
              <InfoCard icon={<MessageSquare size={18} className="text-amber-500" />} text={t('booking.infoDescription')} />
            </div>

            {/* CTA */}
            <div className="bg-stone-100 rounded p-6 border border-stone-200">
              <p className="text-xs text-stone-400 uppercase tracking-widest font-semibold mb-2">
                {t('booking.ctaLabel')}
              </p>
              <a
                href="mailto:fjosid2023@gmail.com"
                className="inline-flex items-center gap-2 text-stone-800 font-semibold text-lg hover:text-amber-600 transition-colors"
              >
                <Mail size={20} className="text-amber-500 shrink-0" />
                fjosid2023@gmail.com
              </a>
              <p className="text-stone-400 text-sm mt-3 leading-relaxed">
                {t('booking.ctaNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-4 bg-white border border-stone-100 rounded px-5 py-4 shadow-sm">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <p className="text-stone-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

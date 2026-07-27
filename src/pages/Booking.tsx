import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { format, startOfToday } from 'date-fns';
import { CalendarDays, Users, ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const GUESTS = Array.from({ length: 33 }, (_, i) => `${i + 8}`);
const STORAGE_KEY = 'fjosid_blocked_dates';

function loadBlockedDates(): Date[] {
  try {
    const stored: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return stored.map((d) => new Date(d));
  } catch {
    return [];
  }
}

export default function Booking() {
  const { t } = useTranslation();
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { setBlockedDates(loadBlockedDates()); }, []);

  const schema = z.object({
    date: z.date({ required_error: t('booking.date') }),
    guests: z.string().min(1, t('booking.guestsRequired')),
    firstName: z.string().min(1, t('booking.firstNameRequired')),
    lastName: z.string().min(1, t('booking.lastNameRequired')),
    email: z.string().min(1, t('booking.emailRequired')).email(t('booking.emailInvalid')),
    phone: z.string().min(1, t('booking.phoneRequired')).regex(/^[+\d\s().-]{6,}$/, t('booking.phoneInvalid')),
    message: z.string().optional(),
  });

  type FormValues = z.infer<typeof schema>;

  const { control, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Booking submitted:', data);
    // TODO: integrate email service (e.g. EmailJS or backend endpoint)
    reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fdfcf9] px-6">
        <div className="text-center max-w-md">
          <CheckCircle2 size={56} className="text-green-500 mx-auto mb-5" />
          <h2 className="font-display text-3xl font-semibold text-stone-800 mb-3">
            {t('booking.successTitle')}
          </h2>
          <p className="text-stone-500 leading-relaxed">{t('booking.success')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-[#111] py-20 px-6 text-center">
        <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-3">
          {t('booking.pageTag')}
        </p>
        <h1 className="font-display text-5xl font-semibold text-white">{t('booking.title')}</h1>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Date + Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                {t('booking.date')}
              </label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setCalendarOpen((o) => !o)}
                      className={cn(
                        'w-full flex items-center gap-3 border rounded-sm px-4 py-3 text-sm text-left transition-colors',
                        errors.date ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-white hover:border-stone-400'
                      )}
                    >
                      <CalendarDays size={16} className="text-amber-500 shrink-0" />
                      <span className={field.value ? 'text-stone-800' : 'text-stone-400'}>
                        {field.value ? format(field.value, 'dd MMM yyyy') : t('booking.datePickerPlaceholder')}
                      </span>
                    </button>
                    {calendarOpen && (
                      <div className="absolute z-20 mt-1 bg-white border border-stone-200 rounded-sm shadow-xl p-3">
                        <DayPicker
                          mode="single"
                          selected={field.value}
                          onSelect={(d) => { field.onChange(d); setCalendarOpen(false); }}
                          disabled={[{ before: startOfToday() }, ...blockedDates]}
                          classNames={{
                            selected: '!bg-amber-500 !text-black !rounded',
                            today: 'text-amber-600 font-semibold',
                          }}
                        />
                      </div>
                    )}
                    {errors.date && <p className="mt-1 text-xs text-red-500">{String(errors.date.message)}</p>}
                  </div>
                )}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                {t('booking.numberOfGuests')}
              </label>
              <Controller
                name="guests"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" />
                    <select
                      {...field}
                      className={cn(
                        'w-full appearance-none border rounded-sm pl-10 pr-10 py-3 text-sm transition-colors bg-white',
                        errors.guests ? 'border-red-400' : 'border-stone-200 hover:border-stone-400',
                        !field.value && 'text-stone-400'
                      )}
                    >
                      <option value="" disabled>{t('booking.guestsPlaceholder')}</option>
                      {GUESTS.map((g) => (
                        <option key={g} value={g}>{g} {t('booking.numberOfGuests')}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
                    {errors.guests && <p className="mt-1 text-xs text-red-500">{errors.guests.message}</p>}
                  </div>
                )}
              />
            </div>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field name="firstName" label={t('booking.firstName')} control={control} errors={errors} />
            <Field name="lastName"  label={t('booking.lastName')}  control={control} errors={errors} />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field name="email" label={t('booking.email')} type="email" control={control} errors={errors} />
            <Field name="phone" label={t('booking.phone')} type="tel"   control={control} errors={errors} />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              {t('booking.message')}
            </label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={5}
                  placeholder={t('booking.messagePlaceholder')}
                  className="w-full border border-stone-200 hover:border-stone-400 focus:border-amber-400 focus:outline-none rounded-sm px-4 py-3 text-sm resize-none transition-colors bg-white"
                />
              )}
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-semibold py-3.5 rounded-sm transition-colors text-sm tracking-wide"
          >
            {t('booking.reserve')}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ name, label, type = 'text', control, errors }: {
  name: string; label: string; type?: string; control: any; errors: any;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">{label}</label>
      <Controller
        name={name as any}
        control={control}
        render={({ field }) => (
          <>
            <input
              {...field}
              type={type}
              className={cn(
                'w-full border rounded-sm px-4 py-3 text-sm transition-colors bg-white focus:outline-none focus:border-amber-400',
                errors[name] ? 'border-red-400 bg-red-50' : 'border-stone-200 hover:border-stone-400'
              )}
            />
            {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name]?.message}</p>}
          </>
        )}
      />
    </div>
  );
}

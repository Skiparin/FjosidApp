import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { format, startOfToday } from 'date-fns';
import { Plus, Trash2, Search } from 'lucide-react';

const STORAGE_KEY = 'fjosid_blocked_dates';

function loadDates(): string[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
}
function saveDates(dates: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
}

export default function Admin() {
  const { t } = useTranslation();
  const [dates, setDates] = useState<string[]>([]);
  const [selected, setSelected] = useState<Date | undefined>();
  const [search, setSearch] = useState('');

  useEffect(() => { setDates(loadDates()); }, []);

  const addDate = () => {
    if (!selected) return;
    const key = format(selected, 'yyyy-MM-dd');
    if (dates.includes(key)) return;
    const updated = [...dates, key].sort();
    setDates(updated);
    saveDates(updated);
    setSelected(undefined);
  };

  const removeDate = (key: string) => {
    const updated = dates.filter((d) => d !== key);
    setDates(updated);
    saveDates(updated);
  };

  const blockedDates = dates.map((d) => new Date(d));

  const filtered = dates.filter((d) =>
    format(new Date(d), 'dd/MM/yyyy').includes(search)
  );

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-[#111] py-16 px-6 text-center">
        <h1 className="font-display text-4xl font-semibold text-white">{t('admin.title')}</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Calendar picker */}
        <div className="bg-white border border-stone-100 rounded shadow-sm p-6">
          <h2 className="font-semibold text-stone-800 mb-4 text-sm uppercase tracking-wider">
            {t('admin.addDate')}
          </h2>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            disabled={[{ before: startOfToday() }, ...blockedDates]}
            classNames={{
              selected: '!bg-amber-500 !text-black !rounded',
              today: 'text-amber-600 font-semibold',
            }}
          />
          <button
            onClick={addDate}
            disabled={!selected}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-semibold py-2.5 rounded-sm transition-colors text-sm"
          >
            <Plus size={16} />
            {t('admin.addDate')}
          </button>
        </div>

        {/* Dates table */}
        <div className="bg-white border border-stone-100 rounded shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
            <p className="text-sm font-semibold text-stone-700">{t('admin.datesTitle')}</p>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder={t('admin.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-stone-200 rounded-sm pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
          <div className="overflow-auto max-h-[400px]">
            {filtered.length === 0 ? (
              <p className="text-center text-stone-400 text-sm py-10">No blocked dates</p>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-stone-50 text-xs uppercase tracking-wider text-stone-400 border-b border-stone-100">
                  <tr>
                    <th className="px-5 py-3 text-left">{t('admin.date')}</th>
                    <th className="px-5 py-3 text-right" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50">
                  {filtered.map((d) => (
                    <tr key={d} className="hover:bg-stone-50 transition-colors">
                      <td className="px-5 py-3 text-stone-700">
                        {format(new Date(d), 'dd MMM yyyy')}
                      </td>
                      <td className="px-5 py-3 text-right">
                        <button
                          onClick={() => removeDate(d)}
                          className="text-stone-300 hover:text-red-400 transition-colors"
                          aria-label="Remove date"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

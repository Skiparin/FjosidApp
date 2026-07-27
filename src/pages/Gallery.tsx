import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const IMAGES = [
    { src: '/images/høli_1.jpg',         altKey: 'gallery.alts.interior1' },
    { src: '/images/høli_2.jpg',         altKey: 'gallery.alts.interior2' },
    { src: '/images/høli_3.jpg',         altKey: 'gallery.alts.interior3' },
    { src: '/images/matur_1.jpg',        altKey: 'gallery.alts.food1' },
    { src: '/images/matur_2.jpg',        altKey: 'gallery.alts.food2' },
    { src: '/images/matur_14.jpg',       altKey: 'gallery.alts.food3' },
    { src: '/images/eplir_1.jpg',        altKey: 'gallery.alts.apples1' },
    { src: '/images/eplir_2.jpg',        altKey: 'gallery.alts.apples2' },
    { src: '/images/neyt_1.jpg',         altKey: 'gallery.alts.cattle' },
    { src: '/images/uttanfyri_1.jpg',    altKey: 'gallery.alts.outside1' },
    { src: '/images/uttanfyri_2.jpg',    altKey: 'gallery.alts.outside2' },
    { src: '/images/vesi_1.jpg',         altKey: 'gallery.alts.water' },
    { src: '/images/luttakarar_3_2.jpg', altKey: 'gallery.alts.guests' },
    { src: '/images/luttakarar_7.jpg',   altKey: 'gallery.alts.event' },
    { src: '/images/luttakarar_12.jpg',  altKey: 'gallery.alts.meeting' },
  ];

  const prev = () => setLightbox((i) => (i! - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setLightbox((i) => (i! + 1) % IMAGES.length);

  return (
    <div>
      <div className="bg-[#111] py-20 px-6 text-center">
        <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-3">
          {t('gallery.pageTag')}
        </p>
        <h1 className="font-display text-5xl font-semibold text-white">{t('gallery.title')}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {IMAGES.map((img, i) => (
            <div
              key={img.src}
              className="break-inside-avoid cursor-zoom-in overflow-hidden rounded group"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={t(img.altKey)}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white/60 hover:text-white" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={IMAGES[lightbox].src}
            alt={t(IMAGES[lightbox].altKey)}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-4 text-white/40 text-sm">
            {t('gallery.counter', { current: lightbox + 1, total: IMAGES.length })}
          </div>
        </div>
      )}
    </div>
  );
}

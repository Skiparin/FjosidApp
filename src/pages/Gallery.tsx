import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { src: '/images/høli_1.jpg',       alt: 'Fjósið interior' },
  { src: '/images/høli_2.jpg',       alt: 'The barn' },
  { src: '/images/høli_3.jpg',       alt: 'Dining area' },
  { src: '/images/matur_1.jpg',      alt: 'Food' },
  { src: '/images/matur_2.jpg',      alt: 'Dish' },
  { src: '/images/matur_14.jpg',     alt: 'Seasonal dish' },
  { src: '/images/eplir_1.jpg',      alt: 'Apples' },
  { src: '/images/eplir_2.jpg',      alt: 'Harvest' },
  { src: '/images/neyt_1.jpg',       alt: 'Cattle' },
  { src: '/images/uttanfyri_1.jpg',  alt: 'Outside view' },
  { src: '/images/uttanfyri_2.jpg',  alt: 'Bøur' },
  { src: '/images/vesi_1.jpg',       alt: 'Water' },
  { src: '/images/luttakarar_3_2.jpg', alt: 'Guests dining' },
  { src: '/images/luttakarar_7.jpg', alt: 'Event' },
  { src: '/images/luttakarar_12.jpg', alt: 'Meeting' },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i! - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setLightbox((i) => (i! + 1) % IMAGES.length);

  return (
    <div>
      {/* Header */}
      <div className="bg-[#111] py-20 px-6 text-center">
        <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mb-3">
          Photos
        </p>
        <h1 className="font-display text-5xl font-semibold text-white">{t('gallery.title')}</h1>
      </div>

      {/* Masonry-style grid */}
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
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white"
            onClick={() => setLightbox(null)}
          >
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
            alt={IMAGES[lightbox].alt}
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
            {lightbox + 1} / {IMAGES.length}
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const IMAGES = [
  { src: '/images/høli_1.jpg', alt: 'Fjósið interior' },
  { src: '/images/matur_1.jpg', alt: 'Food' },
  { src: '/images/eplir_1.jpg', alt: 'Apples' },
  { src: '/images/høli_2.jpg', alt: 'Fjósið interior 2' },
  { src: '/images/eplir_2.jpg', alt: 'Apples 2' },
  { src: '/images/høli_3.jpg', alt: 'Fjósið interior 3' },
  { src: '/images/uttanfyri_1.jpg', alt: 'Outside 1' },
  { src: '/images/uttanfyri_2.jpg', alt: 'Outside 2' },
  { src: '/images/vesi_1.jpg', alt: 'Water' },
  { src: '/images/høli_4.jpg', alt: 'Fjósið interior 4' },
  { src: '/images/matur_2.jpg', alt: 'Food 2' },
  { src: '/images/luttakarar_1.jpg', alt: 'Participants' },
  { src: '/images/luttakarar_7.jpg', alt: 'Participants 7' },
  { src: '/images/matur_14.jpg', alt: 'Food 14' },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setCurrent((c) => (c + 1) % IMAGES.length);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
      <Typography
        component="h2"
        sx={{ fontWeight: 600, fontSize: 40, lineHeight: 1.2, color: '#333', mb: 3 }}
      >
        {t('gallery.title')}
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 1100,
          height: { xs: 300, sm: 500, md: 700 },
          mb: 2,
          overflow: 'hidden',
          background: '#111',
        }}
      >
        <Box
          component="img"
          src={IMAGES[current].src}
          alt={IMAGES[current].alt}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Prev arrow */}
        <IconButton
          onClick={prev}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            '&:hover': { background: 'rgba(0,0,0,0.8)' },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Next arrow */}
        <IconButton
          onClick={next}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            '&:hover': { background: 'rgba(0,0,0,0.8)' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Bullet indicators */}
      <Box sx={{ display: 'flex', gap: 0.5, mb: 6 }}>
        {IMAGES.map((_, i) => (
          <IconButton
            key={i}
            size="small"
            onClick={() => setCurrent(i)}
            sx={{ p: 0.25, color: i === current ? '#333' : '#bbb' }}
          >
            <FiberManualRecordIcon sx={{ fontSize: 10 }} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

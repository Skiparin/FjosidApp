import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Typography } from '@mui/material';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedSection({
  children,
  sx,
  className,
}: {
  children: React.ReactNode;
  sx?: object;
  className?: string;
}) {
  const ref = useScrollAnimation();
  return (
    <Box ref={ref} className={`section-to-animate${className ? ' ' + className : ''}`} sx={sx}>
      {children}
    </Box>
  );
}

export default function RentAsVenue() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Intro */}
      <Box className="intro-section">
        <Box className="intro-section__text-wrapper">
          <Typography component="h2" className="intro-section__title">
            {t('rentAsVenue.title')}
          </Typography>
          <Typography className="intro-section__text">{t('rentAsVenue.text')}</Typography>
        </Box>
        <Box className="intro-section__image-wrapper">
          <Box
            component="img"
            src="/images/luttakarar_8.jpg"
            alt=""
            className="details-section__image"
          />
        </Box>
      </Box>

      {/* Details */}
      <Box className="details-section">
        {/* Section 1 */}
        <Box className="details-section__text-image-section">
          <Box className="details-section__image-wrapper">
            <Box
              component="img"
              src="/images/luttakarar_9.jpg"
              alt=""
              className="details-section__image"
            />
          </Box>
          <Box className="details-section__text-wrapper">
            <Typography className="details-section__title">{t('rentAsVenue.title2')}</Typography>
            <Typography className="details-section__text">{t('rentAsVenue.text2')}</Typography>
          </Box>
        </Box>

        {/* Section 2 */}
        <AnimatedSection sx={{ background: '#fff' }}>
          <Box className="details-section__text-image-section-2">
            <Box className="details-section__text-wrapper">
              <Typography className="details-section__title">{t('rentAsVenue.title3')}</Typography>
              <Typography className="details-section__text">{t('rentAsVenue.text3')}</Typography>
            </Box>
            <Box className="details-section__image-wrapper">
              <Box
                component="img"
                src="/images/luttakarar_5.jpg"
                alt=""
                className="details-section__image"
              />
            </Box>
          </Box>
        </AnimatedSection>

        {/* Section 3 */}
        <AnimatedSection>
          <Box className="details-section__text-image-section">
            <Box className="details-section__image-wrapper">
              <Box
                component="img"
                src="/images/luttakarar_6.jpg"
                alt=""
                className="details-section__image"
              />
            </Box>
            <Box className="details-section__text-wrapper">
              <Typography className="details-section__title">{t('rentAsVenue.title4')}</Typography>
              <Typography className="details-section__text">{t('rentAsVenue.text4')}</Typography>
              <Box className="details-section__button-wrapper" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate('/booking')}
                  sx={{ background: '#000', color: 'goldenrod', '&:hover': { background: '#222' } }}
                >
                  {t('rentAsVenue.bookingButton')}
                </Button>
              </Box>
            </Box>
          </Box>
        </AnimatedSection>
      </Box>
    </Box>
  );
}

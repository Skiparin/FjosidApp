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

export default function Meetings() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Intro */}
      <Box className="intro-section">
        <Box className="intro-section__text-wrapper">
          <Typography component="h2" className="intro-section__title">
            {t('meetings.title')}
          </Typography>
          <Typography className="intro-section__text">{t('meetings.text')}</Typography>
        </Box>
        <Box className="intro-section__image-wrapper">
          <Box
            component="img"
            src="/images/luttakarar_13.jpg"
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
              src="/images/luttakarar_12.jpg"
              alt=""
              className="details-section__image"
            />
          </Box>
          <Box className="details-section__text-wrapper">
            <Typography className="details-section__title">{t('meetings.title2')}</Typography>
            <Typography className="details-section__text">{t('meetings.text2')}</Typography>
            <Typography className="details-section__text" sx={{ mt: 1 }}>
              {t('meetings.text2b')}
            </Typography>
          </Box>
        </Box>

        {/* Section 2 */}
        <AnimatedSection sx={{ background: '#fff' }}>
          <Box className="details-section__text-image-section-2">
            <Box className="details-section__text-wrapper">
              <Typography className="details-section__title">{t('meetings.title3')}</Typography>
              <Typography className="details-section__text">{t('meetings.text3')}</Typography>
              <Typography className="details-section__text" sx={{ mt: 1 }}>
                {t('meetings.text3b')}
              </Typography>
            </Box>
            <Box className="details-section__image-wrapper">
              <Box
                component="img"
                src="/images/luttakarar_7.jpg"
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
              <Typography className="details-section__title">{t('meetings.title4')}</Typography>
              <Typography className="details-section__text">{t('meetings.text4')}</Typography>
              <Box className="details-section__button-wrapper" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate('/booking')}
                  sx={{ background: '#000', color: 'goldenrod', '&:hover': { background: '#222' } }}
                >
                  {t('meetings.bookingButton')}
                </Button>
              </Box>
            </Box>
          </Box>
        </AnimatedSection>
      </Box>
    </Box>
  );
}

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

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero */}
      <Box className="intro-image-container">
        <Box
          component="img"
          src="/images/høli_11.jpg"
          alt="Fjósið"
          className="intro-image"
          sx={{ objectPosition: '50% 79%' }}
        />
        <Box className="intro-image-text-container">
          <Typography component="h1" className="intro-image-title">
            {t('home.imageTitle')}
          </Typography>
          <Typography component="h2" className="intro-image-text">
            {t('home.imageText')}
          </Typography>
        </Box>
      </Box>

      {/* Details sections */}
      <Box sx={{ mb: '6rem' }}>
        {/* Section 1 */}
        <Box className="details-section__text-image-section">
          <Box className="details-section__image-wrapper">
            <Box
              component="img"
              src="/images/høli_2.jpg"
              alt=""
              className="details-section__image"
            />
          </Box>
          <Box className="details-section__text-wrapper">
            <Typography className="details-section__title">{t('home.detailsTitle1')}</Typography>
            <Typography className="details-section__text">{t('home.details1')}</Typography>
            <Box className="details-section__button-wrapper" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/booking')}
                sx={{ background: '#000', color: 'goldenrod', '&:hover': { background: '#222' } }}
              >
                {t('home.bookingButton')}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Section 2 */}
        <AnimatedSection sx={{ background: '#fff' }}>
          <Box className="details-section__text-image-section-2">
            <Box className="details-section__text-wrapper">
              <Typography className="details-section__title">{t('home.detailsTitle2')}</Typography>
              <Typography className="details-section__text">{t('home.details2')}</Typography>
              <Box className="details-section__button-wrapper" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  component="a"
                  href="/images/Menu.pdf"
                  target="_blank"
                  sx={{ background: '#000', color: 'goldenrod', '&:hover': { background: '#222' } }}
                >
                  {t('home.menuButton')}
                </Button>
              </Box>
            </Box>
            <Box className="details-section__image-wrapper">
              <Box
                component="img"
                src="/images/neyt_1.jpg"
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
                src="/images/eplir_1.jpg"
                alt=""
                className="details-section__image"
              />
            </Box>
            <Box className="details-section__text-wrapper">
              <Typography className="details-section__title">{t('home.detailsTitle3')}</Typography>
              <Typography className="details-section__text">{t('home.details3')}</Typography>
              <Box className="details-section__button-wrapper" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => navigate('/gallery')}
                  sx={{ background: '#000', color: 'goldenrod', '&:hover': { background: '#222' } }}
                >
                  {t('home.galleryButton')}
                </Button>
              </Box>
            </Box>
          </Box>
        </AnimatedSection>
      </Box>

      {/* Offers section */}
      <AnimatedSection className="offers-section">
        <Box className="offers-section-wrapper">
          <Typography className="offers-title">{t('home.whatWeOffer')}</Typography>
          <Box className="offers-section__contant-wrapper">
            <Box
              component="a"
              href="/images/Menu.pdf"
              target="_blank"
              sx={{ color: 'goldenrod', textDecoration: 'none' }}
            >
              <Box className="offers-section__offer-section">
                <Box
                  component="img"
                  src="/images/luttakarar_3_2.jpg"
                  alt=""
                  className="offers-section__offer-image"
                />
                <Typography component="h4" className="offers-section__offer-title">
                  {t('home.dining')}
                </Typography>
              </Box>
            </Box>
            <Box
              className="offers-section__offer-section"
              onClick={() => navigate('/meetings')}
              sx={{ cursor: 'pointer' }}
            >
              <Box
                component="img"
                src="/images/luttakarar_7.jpg"
                alt=""
                className="offers-section__offer-image"
              />
              <Typography component="h4" className="offers-section__offer-title">
                {t('home.events')}
              </Typography>
            </Box>
            <Box
              className="offers-section__offer-section"
              onClick={() => navigate('/rent-as-venue')}
              sx={{ cursor: 'pointer' }}
            >
              <Box
                component="img"
                src="/images/matur_14.jpg"
                alt=""
                className="offers-section__offer-image"
              />
              <Typography component="h4" className="offers-section__offer-title">
                {t('home.venue')}
              </Typography>
            </Box>
          </Box>
        </Box>
      </AnimatedSection>

      {/* About us */}
      <AnimatedSection sx={{ display: 'grid', mb: '6rem' }}>
        <Box sx={{ display: 'grid' }}>
          <Typography className="about-us-title" sx={{ justifySelf: 'center' }}>
            {t('home.aboutUs')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box className="about-us-section__image-wrapper">
            <Box className="about-us-section__two-image-wrapper">
              <Box className="about-us-section__image-text-wrapper">
                <Box
                  component="img"
                  src="/images/jenny_heri.jpg"
                  alt="Jenny & Heri"
                  className="about-us-section__image"
                />
                <Typography className="intro-section__text">{t('home.jennyHeri')}</Typography>
              </Box>
              <Box className="about-us-section__image-text-wrapper">
                <Box
                  component="img"
                  src="/images/ellef_eystein.jpg"
                  alt="Ellef & Eystein"
                  className="about-us-section__image"
                />
                <Typography className="intro-section__text">{t('home.eydsteinEllef')}</Typography>
              </Box>
            </Box>
            <Box className="about-us-section__two-image-wrapper">
              <Box className="about-us-section__image-text-wrapper">
                <Box
                  component="img"
                  src="/images/eyðfinn_poula.jpg"
                  alt="Eyðfinn & Poula"
                  className="about-us-section__image"
                />
                <Typography className="intro-section__text">{t('home.eydfinnPoula')}</Typography>
              </Box>
              <Box className="about-us-section__image-text-wrapper">
                <Box
                  component="img"
                  src="/images/tórður.jpg"
                  alt="Tórður"
                  className="about-us-section__image"
                />
                <Typography className="intro-section__text">{t('home.tordur')}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </AnimatedSection>

      {/* Map */}
      <AnimatedSection className="map" sx={{ mb: 0 }}>
        <Typography className="offers-title">{t('home.location')}</Typography>
        <Box sx={{ width: '100%', maxWidth: 900, height: 450, mb: 0 }}>
          <iframe
            title="Fjósið location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1488.4!2d-7.371621!3d62.086239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjLCsDA1JzEwLjUiTiA3wrAyMicxNy44Ilc!5e0!3m2!1sen!2sfo!4v1680000000000!5m2!1sen!2sfo"
          />
        </Box>
      </AnimatedSection>
    </Box>
  );
}

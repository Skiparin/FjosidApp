import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        background: '#000',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
        p: 3,
        mt: 'auto',
      }}
    >
      {/* Logo */}
      <Box component={Link} to="/">
        <Box
          component="img"
          src="/images/fjosid_icon_row.png"
          alt="Fjósið"
          sx={{ width: 170 }}
        />
      </Box>

      {/* Contact info */}
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'center', md: 'left' } }}>
        {[
          'Fjósið',
          t('footer.address'),
          t('footer.city'),
          t('footer.country'),
          t('footer.phone'),
          t('footer.email'),
          t('footer.cvr'),
        ].map((line) => (
          <Typography key={line} sx={{ color: 'goldenrod', fontSize: '0.85rem' }}>
            {line}
          </Typography>
        ))}
      </Box>

      {/* Links */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[
          { label: 'Fjósið', href: '/', internal: true },
          { label: t('footer.theView'), href: 'https://www.Theview.fo' },
          { label: t('footer.bluegate'), href: 'https://www.Bluegate.fo' },
        ].map(({ label, href, internal }) => (
          internal ? (
            <Box
              key={label}
              component={Link}
              to={href as string}
              sx={{ color: 'goldenrod', textDecoration: 'none' }}
            >
              {label}
            </Box>
          ) : (
            <Box
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'goldenrod', textDecoration: 'none' }}
            >
              {label}
            </Box>
          )
        ))}
      </Box>

      {/* Social icons */}
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box
          component="a"
          href="https://www.facebook.com/profile.php?id=61551701065518"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'goldenrod' }}
        >
          <FacebookIcon sx={{ fontSize: 36 }} />
        </Box>
        <Box
          component="a"
          href="https://www.instagram.com/fjosid2023/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'goldenrod' }}
        >
          <InstagramIcon sx={{ fontSize: 36 }} />
        </Box>
      </Box>
    </Box>
  );
}

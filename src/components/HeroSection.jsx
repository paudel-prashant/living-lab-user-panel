import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'

function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        background:
          'radial-gradient(1200px 500px at 10% -10%, rgba(34, 211, 238, 0.35), transparent), radial-gradient(900px 480px at 90% 0%, rgba(124, 58, 237, 0.22), transparent), linear-gradient(180deg, #e0f2fe 0%, #f4f8fb 55%, #f8fafc 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: '0.2em',
                color: 'primary.dark',
                fontWeight: 700,
              }}
            >
              Innovation · Community · Co-creation
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mt: 1.5,
                mb: 2,
                fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
              }}
            >
              Living Lab User Panel
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: 560,
                mb: 3,
              }}
            >
              Co-create the future by participating in real-life innovation testing, sharing
              feedback, and shaping solutions that matter.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Button
                component={RouterLink}
                to="/survey"
                variant="contained"
                color="primary"
                size="large"
              >
                Take the survey
              </Button>
              <Button
                href="#about"
                variant="outlined"
                color="primary"
                size="large"
                sx={{ borderWidth: 2, '&:hover': { borderWidth: 2 } }}
              >
                Learn more
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.75))',
                border: '1px solid',
                borderColor: 'rgba(14, 116, 144, 0.15)',
                boxShadow: '0 24px 60px rgba(15, 23, 42, 0.08)',
              }}
            >
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, fontWeight: 600 }}>
                Why join in?
              </Typography>
              {[
                {
                  icon: <Groups2OutlinedIcon color="primary" />,
                  title: 'Real people, real contexts',
                  text: 'Activities are grounded in everyday life—not a distant lab.',
                },
                {
                  icon: <LightbulbOutlinedIcon color="secondary" />,
                  title: 'Shape what gets built',
                  text: 'Your perspective steers prototypes and services toward what works.',
                },
                {
                  icon: <HandshakeOutlinedIcon color="primary" />,
                  title: 'Collaborate openly',
                  text: 'Researchers, companies, and residents learn together.',
                },
              ].map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    py: 1.5,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    '&:first-of-type': { borderTop: 'none', pt: 0 },
                  }}
                >
                  <Box sx={{ mt: 0.25 }}>{item.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSection

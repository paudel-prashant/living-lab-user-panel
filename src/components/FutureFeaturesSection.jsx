import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'

const roadmap = [
  {
    label: 'Member profiles & activity history',
    icon: AccountCircleOutlinedIcon,
  },
  {
    label: 'Workshop calendar & sign-up',
    icon: CalendarMonthOutlinedIcon,
  },
  {
    label: 'Secure messaging with organizers',
    icon: ForumOutlinedIcon,
  },
  {
    label: 'API-ready submission pipeline',
    icon: HubOutlinedIcon,
  },
]

function FutureFeaturesSection() {
  return (
    <Box
      component="section"
      id="future-features"
      sx={{
        py: { xs: 8, md: 10 },
        scrollMarginTop: { xs: 72, md: 80 },
        background:
          'radial-gradient(700px 260px at 5% -10%, rgba(34, 211, 238, 0.2), transparent), radial-gradient(600px 220px at 95% 0%, rgba(124, 58, 237, 0.14), transparent), linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
      }}
    >
      <Container maxWidth="md">
        <Stack direction="row" spacing={1.5} sx={{ mb: 1.5, alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'rgba(14, 116, 144, 0.12)',
              color: 'primary.main',
            }}
          >
            <RocketLaunchOutlinedIcon />
          </Box>
          <Typography variant="h3" component="h2" sx={{ fontSize: { xs: '1.65rem', md: '2rem' } }}>
            Future features
          </Typography>
        </Stack>
        <Typography
          variant="overline"
          sx={{ display: 'block', textAlign: 'center', color: 'primary.dark', fontWeight: 700, letterSpacing: '0.14em' }}
        >
          Roadmap preview
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 4, mt: 1, lineHeight: 1.8, maxWidth: 640, mx: 'auto' }}
        >
          This prototype focuses on storytelling and the survey experience. Upcoming releases will connect
          to a backend so you can manage participation end-to-end.
        </Typography>
        <Grid container spacing={2}>
          {roadmap.map((item) => {
            const Icon = item.icon
            return (
              <Grid key={item.label} size={{ xs: 12, sm: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'rgba(255, 255, 255, 0.78)',
                    display: 'flex',
                    gap: 1.5,
                    alignItems: 'center',
                    minHeight: 76,
                    transition: 'all 180ms ease',
                    '&:hover': {
                      borderColor: 'primary.light',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 26px rgba(14, 116, 144, 0.12)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      bgcolor: 'rgba(14, 116, 144, 0.1)',
                      color: 'primary.main',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.4 }}>
                    {item.label}
                  </Typography>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default FutureFeaturesSection

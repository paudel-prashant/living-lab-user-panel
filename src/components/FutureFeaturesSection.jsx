import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'

const roadmap = [
  'Member profiles & activity history',
  'Workshop calendar & sign-up',
  'Secure messaging with organizers',
  'API-ready submission pipeline',
]

function FutureFeaturesSection() {
  return (
    <Box
      component="section"
      id="future-features"
      sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper', scrollMarginTop: { xs: 72, md: 80 } }}
    >
      <Container maxWidth="md">
        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
          <RocketLaunchOutlinedIcon color="primary" />
          <Typography variant="h3" component="h2" sx={{ fontSize: { xs: '1.65rem', md: '2rem' } }}>
            Future features
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 4, lineHeight: 1.8, maxWidth: 640, mx: 'auto' }}
        >
          This prototype focuses on storytelling and the survey experience. Upcoming releases will connect
          to a backend so you can manage participation end-to-end.
        </Typography>
        <Stack direction="row" gap={1} flexWrap="wrap" justifyContent="center">
          {roadmap.map((label) => (
            <Chip
              key={label}
              label={label}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: 600, borderWidth: 2, '&:hover': { bgcolor: 'primary.main', color: 'white' } }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default FutureFeaturesSection

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import PollOutlinedIcon from '@mui/icons-material/PollOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'

const features = [
  {
    title: 'Surveys & interviews',
    body: 'Participate in surveys and interviews',
    icon: <PollOutlinedIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Workshops & co-creation',
    body: 'Join workshops and co-creation sessions',
    icon: <GroupsOutlinedIcon fontSize="large" color="secondary" />,
  },
  {
    title: 'Prototype testing',
    body: 'Test prototypes and services',
    icon: <ScienceOutlinedIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Your feedback',
    body: 'Provide valuable feedback',
    icon: <FeedbackOutlinedIcon fontSize="large" color="secondary" />,
  },
]

function UserPanelSection() {
  return (
    <Box
      component="section"
      id="user-panel"
      sx={{
        scrollMarginTop: { xs: 72, md: 80 },
        py: { xs: 8, md: 10 },
        background:
          'linear-gradient(180deg, rgba(224, 242, 254, 0.55) 0%, rgba(248, 250, 252, 1) 40%, #f4f8fb 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{ mb: 2, textAlign: 'center', fontSize: { xs: '1.65rem', md: '2rem' } }}
        >
          Living Lab User Panel
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            maxWidth: 720,
            mx: 'auto',
            mb: 5,
            lineHeight: 1.8,
            fontSize: '1.05rem',
          }}
        >
          The User Panel is a community of participants who engage in testing, workshops, surveys, and
          co-creation activities.
        </Typography>

        <Grid container spacing={3}>
          {features.map((f) => (
            <Grid key={f.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{f.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {f.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default UserPanelSection

import { Box, Container, Divider, Paper, Typography } from '@mui/material'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'

function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default', scrollMarginTop: { xs: 72, md: 80 } }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            background: 'linear-gradient(180deg, #ffffff 0%, #fafbff 100%)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <AutoStoriesOutlinedIcon color="primary" fontSize="large" />
            <Typography variant="h3" component="h2" sx={{ fontSize: { xs: '1.65rem', md: '2rem' } }}>
              What is Living Lab?
            </Typography>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem', lineHeight: 1.85 }}>
            A Living Lab is an open innovation ecosystem where users, researchers, companies, and public
            organizations collaborate in real-life environments to co-create and test new ideas. It bridges
            the gap between innovation and real-world application by involving users directly in the
            development process.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}

export default AboutSection

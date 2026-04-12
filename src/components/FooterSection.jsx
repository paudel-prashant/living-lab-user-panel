import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function FooterSection() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    setOpen(false)
    setEmail('')
  }

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #0c4a6e 0%, #0e7490 45%, #155e75 100%)',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="overline" sx={{ opacity: 0.9, letterSpacing: '0.18em', fontWeight: 700 }}>
          Stay involved
        </Typography>
        <Typography variant="h3" component="h2" sx={{ mt: 1, mb: 2, color: 'inherit', fontWeight: 700 }}>
          Connect with us
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.92, lineHeight: 1.75, maxWidth: 520 }}>
          Be the first to hear about workshops, testing rounds, and ways to collaborate. Subscribe is a
          placeholder for now—no data leaves your browser.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
          <Button variant="contained" color="secondary" size="large" onClick={() => setOpen(true)}>
            Subscribe
          </Button>
          <Button
            component={RouterLink}
            to="/survey"
            variant="outlined"
            size="large"
            sx={{
              color: 'common.white',
              borderColor: 'rgba(255,255,255,0.55)',
              '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.08)' },
            }}
          >
            Open survey
          </Button>
        </Box>
      </Container>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm" aria-labelledby="subscribe-title">
        <DialogTitle id="subscribe-title">Subscribe (prototype)</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Enter an email to simulate subscribing. Nothing is sent or stored on a server yet.
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleSubscribe} variant="contained" disabled={!email.trim()}>
            Save (local only)
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default FooterSection

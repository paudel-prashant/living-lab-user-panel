import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const SUBSCRIBE_ENDPOINT = 'https://formspree.io/f/xvzdlkvo'

function FooterSection() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' })

  const handleSubscribe = async () => {
    if (!email.trim()) return
    setIsSubmitting(true)
    try {
      const res = await fetch(SUBSCRIBE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Living Lab Subscribe — ${new Date().toISOString()}`,
          email: email.trim(),
          message: `Subscribe request from: ${email.trim()}`,
        }),
      })

      if (!res.ok) {
        throw new Error('Subscription request failed')
      }

      setOpen(false)
      setEmail('')
      setSnack({
        open: true,
        severity: 'success',
        message: 'Thank you! You have been subscribed.',
      })
    } catch {
      setSnack({
        open: true,
        severity: 'error',
        message: 'Could not submit right now. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
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
          Be the first to hear about workshops, testing rounds, and ways to collaborate.
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

      <Dialog
        open={open}
        onClose={() => !isSubmitting && setOpen(false)}
        fullWidth
        maxWidth="sm"
        aria-labelledby="subscribe-title"
      >
        <DialogTitle id="subscribe-title">Subscribe</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Enter your email to receive updates from Living Lab User Panel.
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
          <Button onClick={() => setOpen(false)} color="inherit" disabled={isSubmitting}>
            Cancel
          </Button>
          <Button onClick={handleSubscribe} variant="contained" disabled={!email.trim() || isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          severity={snack.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default FooterSection

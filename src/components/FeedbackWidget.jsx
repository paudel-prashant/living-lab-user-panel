import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import { useLocation } from 'react-router-dom'

const FEEDBACK_ENDPOINT = 'https://formspree.io/f/mzdyodln'

const initialFeedback = {
  name: '',
  email: '',
  message: '',
}

function FeedbackWidget() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState(initialFeedback)
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' })

  const setField = (key, value) => setFeedback((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const payload = {
        _subject: `Living Lab feedback — ${new Date().toISOString()}`,
        message: [
          `Page: ${location.pathname}${location.hash || ''}`,
          `Name: ${feedback.name || '-'}`,
          `Email: ${feedback.email || '-'}`,
          '',
          feedback.message,
        ].join('\n'),
      }

      const res = await fetch(FEEDBACK_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Feedback submission failed')

      setOpen(false)
      setFeedback(initialFeedback)
      setSnack({
        open: true,
        severity: 'success',
        message: 'Thanks! Your feedback has been sent.',
      })
    } catch {
      setSnack({
        open: true,
        severity: 'error',
        message: 'Could not send feedback right now. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          right: { xs: 16, sm: 24 },
          bottom: { xs: 16, sm: 24 },
          zIndex: (theme) => theme.zIndex.tooltip,
          boxShadow: '0 14px 32px rgba(124, 58, 237, 0.35)',
          '&:hover': { boxShadow: '0 18px 36px rgba(124, 58, 237, 0.45)' },
        }}
      >
        <FeedbackOutlinedIcon sx={{ mr: 1 }} />
        Feedback
      </Fab>

      <Dialog open={open} onClose={() => !isSubmitting && setOpen(false)} fullWidth maxWidth="sm">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>Share feedback</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tell us what works, what feels unclear, or what you would improve.
            </Typography>
            <TextField
              label="Name (optional)"
              value={feedback.name}
              onChange={(e) => setField('name', e.target.value)}
              margin="dense"
              fullWidth
            />
            <TextField
              label="Email (optional)"
              type="email"
              value={feedback.email}
              onChange={(e) => setField('email', e.target.value)}
              margin="dense"
              fullWidth
            />
            <TextField
              label="Your feedback"
              value={feedback.message}
              onChange={(e) => setField('message', e.target.value)}
              margin="dense"
              fullWidth
              multiline
              minRows={4}
              required
            />
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={() => setOpen(false)} color="inherit" disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={isSubmitting || !feedback.message.trim()}>
              {isSubmitting ? 'Submitting...' : 'Submit feedback'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnack((prev) => ({ ...prev, open: false }))}
          severity={snack.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default FeedbackWidget

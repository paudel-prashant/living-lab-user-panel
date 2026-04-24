import { useCallback, useMemo, useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Link,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { Link as RouterLink } from 'react-router-dom'

const initialAnswers = {
  q1: '',
  q2: '',
  q2Other: '',
  q3: '',
  q4: '',
  q5: '',
  q6: [],
  q7: [],
  q7Other: '',
  q8: [],
  q8Other: '',
  q9: [],
  q9Other: '',
  q10: [],
  q10Other: '',
  q11: [],
  q12: '',
}

const Q1 = [
  { v: 'under18', l: 'Under 18' },
  { v: '18-24', l: '18-24' },
  { v: '25-34', l: '25-34' },
  { v: '35-44', l: '35-44' },
  { v: '45-54', l: '45-54' },
  { v: '55-64', l: '55-64' },
  { v: '65+', l: '65 or over' },
]

const Q2 = [
  { v: 'studying', l: 'I am studying' },
  { v: 'working', l: 'I am working' },
  { v: 'job_seeking', l: 'I am looking for a job' },
  { v: 'at_home', l: 'I am at home (e.g. on parental leave)' },
  { v: 'other', l: 'Other: ............' },
]

const Q3 = [
  { v: '<1', l: 'Less than 1 year' },
  { v: '1-3', l: '1-3 years' },
  { v: '3-5', l: '3-5 years' },
  { v: '>5', l: 'More than 5 years' },
]

const Q5 = [
  { v: 'none', l: "I can't use the language at all" },
  { v: 'little', l: 'A little' },
  { v: 'moderate', l: 'Moderately' },
  { v: 'very_well', l: 'Very well' },
]

const Q6 = [
  { v: 'learn_finnish', l: "I'd like to learn Finnish" },
  { v: 'services_voice', l: 'I want to have a say in the services I use every day' },
  { v: 'community', l: "I'm looking for something to do or a community to be part of" },
  { v: 'help', l: "I'd like to help people out" },
  { v: 'unsure', l: "I'm not really sure what I'm looking for yet" },
]

const Q7 = [
  { v: 'language', l: 'Learning the language' },
  { v: 'services', l: 'Learning how everyday services work (e.g. school healthcare, public services)' },
  { v: 'people', l: 'Meeting new people' },
  { v: 'work_study', l: 'Work or study' },
  { v: 'other', l: 'Other: .........' },
]

const Q8 = [
  { v: 'learn', l: 'I learn new things' },
  { v: 'say', l: 'I can have a say in the services I use' },
  { v: 'meet', l: 'I meet other people' },
  { v: 'support', l: 'I get support in everyday life' },
  { v: 'easy', l: 'Participation is easy and clear' },
  { v: 'impact', l: 'I see the impact of participating' },
  { v: 'other', l: 'Other: .........' },
]

const Q9 = [
  { v: 'language', l: 'The language seems difficult' },
  { v: 'awareness', l: "I don't know what's going on" },
  { v: 'time', l: "I don't have time" },
  { v: 'useful', l: "I'm not sure if this will be useful" },
  { v: 'excited', l: "I'm excited to participate" },
  { v: 'other', l: 'Other: .......' },
]

const Q10 = [
  { v: 'clear_lang', l: 'Clear and easy language' },
  { v: 'own_lang', l: 'My own language or support if needed' },
  { v: 'small_groups', l: 'Small groups' },
  { v: 'online', l: 'Possibility to participate online' },
  { v: 'friend', l: 'Can come with a friend' },
  { v: 'guidance', l: 'Clear guidance and support' },
  { v: 'other', l: 'Other: ......' },
]

const Q11 = [
  { v: 'workshops', l: 'Workshops (discussion and doing things together)' },
  { v: 'surveys', l: 'Short surveys' },
  { v: 'chat', l: 'WhatsApp or chat group' },
  { v: 'testing', l: 'Testing new services' },
  { v: 'discussion', l: 'Group discussion' },
]

const Q12 = [
  { v: 'yes', l: 'Yes, I want to attend' },
  { v: 'maybe', l: 'Maybe, but I want more information' },
  { v: 'not_now', l: 'Not now' },
]

const getSingleLabel = (options, value) => options.find((o) => o.v === value)?.l || value || '-'
const getMultiLabel = (options, values) =>
  values?.length ? values.map((v) => options.find((o) => o.v === v)?.l || v).join(', ') : '-'

function SurveyPage() {
  const [answers, setAnswers] = useState(initialAnswers)
  const [q8Hint, setQ8Hint] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' })

  const setField = useCallback((key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }, [])

  const toggleMulti = useCallback((key, value, max) => {
    setAnswers((prev) => {
      const list = prev[key]
      if (list.includes(value)) {
        return { ...prev, [key]: list.filter((x) => x !== value) }
      }
      if (max != null && list.length >= max) {
        if (key === 'q8') setQ8Hint('You can choose up to 3 options for this question.')
        return prev
      }
      return { ...prev, [key]: [...list, value] }
    })
    if (key === 'q8') setQ8Hint('')
  }, [])

  const payload = useMemo(
    () => ({
      ...answers,
      submittedAt: new Date().toISOString(),
    }),
    [answers],
  )

  const formattedMessage = useMemo(
    () =>
      [
        `Submitted At: ${payload.submittedAt}`,
        '',
        `Q1: ${getSingleLabel(Q1, payload.q1)}`,
        `Q2: ${getSingleLabel(Q2, payload.q2)}${payload.q2Other ? ` | Other: ${payload.q2Other}` : ''}`,
        `Q3: ${getSingleLabel(Q3, payload.q3)}`,
        `Q4: ${payload.q4 || '-'}`,
        `Q5: ${getSingleLabel(Q5, payload.q5)}`,
        `Q6: ${getMultiLabel(Q6, payload.q6)}`,
        `Q7: ${getMultiLabel(Q7, payload.q7)}${payload.q7Other ? ` | Other: ${payload.q7Other}` : ''}`,
        `Q8: ${getMultiLabel(Q8, payload.q8)}${payload.q8Other ? ` | Other: ${payload.q8Other}` : ''}`,
        `Q9: ${getMultiLabel(Q9, payload.q9)}${payload.q9Other ? ` | Other: ${payload.q9Other}` : ''}`,
        `Q10: ${getMultiLabel(Q10, payload.q10)}${payload.q10Other ? ` | Other: ${payload.q10Other}` : ''}`,
        `Q11: ${getMultiLabel(Q11, payload.q11)}`,
        `Q12: ${getSingleLabel(Q12, payload.q12)}`,
      ].join('\n'),
    [payload],
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/mjgjlgjp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Living Lab User Survey — ${payload.submittedAt}`,
          message: formattedMessage,
        }),
      })

      if (!response.ok) {
        throw new Error('Formspree submission failed')
      }

      setSnack({
        open: true,
        severity: 'success',
        message: 'Thank you! Your survey response has been submitted.',
      })
      setAnswers(initialAnswers)
      setQ8Hint('')
    } catch {
      setSnack({
        open: true,
        severity: 'error',
        message: 'Sorry, something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const section = (title, children) => (
    <Paper key={title} elevation={0} sx={{ p: { xs: 2.5, sm: 3 }, mb: 3, border: '1px solid', borderColor: 'divider' }}>
      <Typography variant="h6" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
        {title}
      </Typography>
      {children}
    </Paper>
  )

  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.default', minHeight: '70vh' }}>
      <Container maxWidth="md">
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackOutlinedIcon />}
          sx={{ mb: 2 }}
          color="inherit"
        >
          Back to home
        </Button>
        <Typography variant="h3" component="h1" sx={{ mb: 1, fontSize: { xs: '1.75rem', sm: '2.25rem' } }}>
          Living Lab User Survey
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
          This is a frontend-only prototype. Answers stay in React state until you submit; then they are logged
          to the browser console. Replace this flow with an API call when your backend is ready.{' '}
          <Link component={RouterLink} to="/">
            Return to landing page
          </Link>
          .
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          {section(
            'Q1: What is your age group?',
            <FormControl>
              <RadioGroup value={answers.q1} onChange={(e) => setField('q1', e.target.value)} name="q1">
                {Q1.map((o) => (
                  <FormControlLabel key={o.v} value={o.v} control={<Radio />} label={o.l} />
                ))}
              </RadioGroup>
            </FormControl>,
          )}

          {section(
            'Q2: What best describes your current situation?',
            <Stack spacing={2}>
              <FormControl>
                <RadioGroup value={answers.q2} onChange={(e) => setField('q2', e.target.value)} name="q2">
                  {Q2.map((o) => (
                    <FormControlLabel key={o.v} value={o.v} control={<Radio />} label={o.l} />
                  ))}
                </RadioGroup>
              </FormControl>
              {answers.q2 === 'other' && (
                <TextField
                  label="Please specify"
                  value={answers.q2Other}
                  onChange={(e) => setField('q2Other', e.target.value)}
                  fullWidth
                />
              )}
            </Stack>,
          )}

          {section(
            'Q3: How long have you lived in Finland?',
            <FormControl>
              <RadioGroup value={answers.q3} onChange={(e) => setField('q3', e.target.value)} name="q3">
                {Q3.map((o) => (
                  <FormControlLabel key={o.v} value={o.v} control={<Radio />} label={o.l} />
                ))}
              </RadioGroup>
            </FormControl>,
          )}

          {section(
            'Q4: What is your mother language?',
            <TextField
              label="Your answer"
              value={answers.q4}
              onChange={(e) => setField('q4', e.target.value)}
              fullWidth
              multiline
              minRows={2}
            />,
          )}

          {section(
            'Q5: How well do you know Finnish language?',
            <FormControl>
              <RadioGroup value={answers.q5} onChange={(e) => setField('q5', e.target.value)} name="q5">
                {Q5.map((o) => (
                  <FormControlLabel key={o.v} value={o.v} control={<Radio />} label={o.l} />
                ))}
              </RadioGroup>
            </FormControl>,
          )}

          {section(
            'Q6: Which best describes you? Choose one or more.',
            <FormGroup>
              {Q6.map((o) => (
                <FormControlLabel
                  key={o.v}
                  control={
                    <Checkbox
                      checked={answers.q6.includes(o.v)}
                      onChange={() => toggleMulti('q6', o.v)}
                      name={o.v}
                    />
                  }
                  label={o.l}
                />
              ))}
            </FormGroup>,
          )}

          {section(
            'Q7: In what areas do you need the most support in everyday life? Select one or more',
            <Stack spacing={2}>
              <FormGroup>
                {Q7.map((o) => (
                  <FormControlLabel
                    key={o.v}
                    control={
                      <Checkbox
                        checked={answers.q7.includes(o.v)}
                        onChange={() => toggleMulti('q7', o.v)}
                        name={o.v}
                      />
                    }
                    label={o.l}
                  />
                ))}
              </FormGroup>
              {answers.q7.includes('other') && (
                <TextField
                  label="Other (please specify)"
                  value={answers.q7Other}
                  onChange={(e) => setField('q7Other', e.target.value)}
                  fullWidth
                />
              )}
            </Stack>,
          )}

          {section(
            'Q8: What would make you participate in a workshop or user panel? Choose up to 3',
            <Stack spacing={1}>
              <FormControl error={Boolean(q8Hint)} component="fieldset">
                <FormLabel component="legend">Select up to 3</FormLabel>
                <FormGroup>
                  {Q8.map((o) => (
                    <FormControlLabel
                      key={o.v}
                      control={
                        <Checkbox
                          checked={answers.q8.includes(o.v)}
                          onChange={() => toggleMulti('q8', o.v, 3)}
                          name={o.v}
                        />
                      }
                      label={o.l}
                    />
                  ))}
                </FormGroup>
                {q8Hint ? <FormHelperText>{q8Hint}</FormHelperText> : null}
              </FormControl>
              {answers.q8.includes('other') && (
                <TextField
                  label="Other (please specify)"
                  value={answers.q8Other}
                  onChange={(e) => setField('q8Other', e.target.value)}
                  fullWidth
                />
              )}
            </Stack>,
          )}

          {section(
            'Q9: What might prevent you from participating? Select one or more',
            <Stack spacing={2}>
              <FormGroup>
                {Q9.map((o) => (
                  <FormControlLabel
                    key={o.v}
                    control={
                      <Checkbox
                        checked={answers.q9.includes(o.v)}
                        onChange={() => toggleMulti('q9', o.v)}
                        name={o.v}
                      />
                    }
                    label={o.l}
                  />
                ))}
              </FormGroup>
              {answers.q9.includes('other') && (
                <TextField
                  label="Other (please specify)"
                  value={answers.q9Other}
                  onChange={(e) => setField('q9Other', e.target.value)}
                  fullWidth
                />
              )}
            </Stack>,
          )}

          {section(
            'Q10: What would make it easier to participate? Select one or more',
            <Stack spacing={2}>
              <FormGroup>
                {Q10.map((o) => (
                  <FormControlLabel
                    key={o.v}
                    control={
                      <Checkbox
                        checked={answers.q10.includes(o.v)}
                        onChange={() => toggleMulti('q10', o.v)}
                        name={o.v}
                      />
                    }
                    label={o.l}
                  />
                ))}
              </FormGroup>
              {answers.q10.includes('other') && (
                <TextField
                  label="Other (please specify)"
                  value={answers.q10Other}
                  onChange={(e) => setField('q10Other', e.target.value)}
                  fullWidth
                />
              )}
            </Stack>,
          )}

          {section(
            'Q11: How would you like to participate? Select one or more',
            <FormGroup>
              {Q11.map((o) => (
                <FormControlLabel
                  key={o.v}
                  control={
                    <Checkbox
                      checked={answers.q11.includes(o.v)}
                      onChange={() => toggleMulti('q11', o.v)}
                      name={o.v}
                    />
                  }
                  label={o.l}
                />
              ))}
            </FormGroup>,
          )}

          {section(
            'Q12: Would you like to attend the first workshop?',
            <FormControl>
              <RadioGroup value={answers.q12} onChange={(e) => setField('q12', e.target.value)} name="q12">
                {Q12.map((o) => (
                  <FormControlLabel key={o.v} value={o.v} control={<Radio />} label={o.l} />
                ))}
              </RadioGroup>
            </FormControl>,
          )}

          <Divider sx={{ my: 3 }} />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'flex-end' }}>
            <Button
              type="button"
              variant="outlined"
              color="inherit"
              onClick={() => setAnswers(initialAnswers)}
              disabled={isSubmitting}
            >
              Reset form
            </Button>
            <Button type="submit" variant="contained" color="primary" size="large" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit survey'}
            </Button>
          </Stack>
        </Box>
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
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

export default SurveyPage

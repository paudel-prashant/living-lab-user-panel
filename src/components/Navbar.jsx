import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'User Panel', id: 'user-panel' },
  { label: 'Future Features', id: 'future-features' },
]

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = location.pathname === '/'

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goToSection = (id) => {
    setMobileOpen(false)
    if (!isHome) {
      navigate({ pathname: '/', hash: `#${id}` })
      return
    }
    scrollToSection(id)
  }

  return (
    <AppBar position="sticky" elevation={0} component="nav" sx={{ top: 0, zIndex: (t) => t.zIndex.drawer + 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, gap: 1 }}>
          <Box
            component={RouterLink}
            to="/"
            onClick={() => setMobileOpen(false)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              color: 'inherit',
              mr: 'auto',
              '&:hover .brand-mark': { color: 'primary.main' },
            }}
          >
            <ScienceOutlinedIcon className="brand-mark" sx={{ color: 'primary.main' }} />
            <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
              Living Lab
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => goToSection(item.id)}
                sx={{
                  borderRadius: 2,
                  px: 1.5,
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main', bgcolor: 'action.hover' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            aria-label="open navigation menu"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }} role="presentation">
          <Typography variant="subtitle2" sx={{ px: 2, pb: 1, color: 'text.secondary' }}>
            Navigate
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.id} onClick={() => goToSection(item.id)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar

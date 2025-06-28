import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          URL Shortener
        </Typography>
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          disabled={location.pathname === '/'}
        >
          Shorten
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/statistics"
          disabled={location.pathname === '/statistics'}
        >
          Statistics
        </Button>
      </Toolbar>
    </AppBar>
  );
}

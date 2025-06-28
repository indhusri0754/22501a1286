import { useState } from 'react';
import { Container, Snackbar, Alert } from '@mui/material';
import ShortenForm from '../components/ShortenForm';
import ShortenedUrlCard from '../components/ShortenedUrlCard';
import { UrlService } from '../services/UrlService';
import { useLinks } from '../store/LinkContext';

export default function UrlShortenerPage() {
  const { state, dispatch } = useLinks();
  const [snack, setSnack] = useState(null);

  const handleShorten = async (items) => {
    try {
      const results = await Promise.all(items.map(UrlService.create));
      dispatch({ type: 'ADD_LINKS', payload: results });
      setSnack({
        severity: 'success',
        text: 'URLs shortened successfully!',
      });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
      setSnack({ severity: 'error', text: err.message });
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <ShortenForm onSubmit={handleShorten} />
      {state.links
        .slice()
        .reverse()
        .map((link) => (
          <ShortenedUrlCard key={link.shortCode} item={link} />
        ))}
      <Snackbar
        open={!!snack}
        autoHideDuration={4000}
        onClose={() => setSnack(null)}
      >
        {snack && (
          <Alert
            onClose={() => setSnack(null)}
            severity={snack.severity}
          >
            {snack.text}
          </Alert>
        )}
      </Snackbar>
    </Container>
  );
}

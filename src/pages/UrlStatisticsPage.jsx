import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { AnalyticsService } from '../services/AnalyticsService';
import StatisticsTable from '../components/StatisticsTable';
import ClickDetailsModal from '../components/ClickDetailsModal';
import { useLinks } from '../store/LinkContext';

export default function UrlStatisticsPage() {
  const { state, dispatch } = useLinks();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await AnalyticsService.listAll();
        dispatch({ type: 'SET_LINKS', payload: data });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      }
    };
    load();
  }, [dispatch]);

  const showClicks = async (link) => {
    try {
      const data = await AnalyticsService.clicks(link.shortCode);
      setSelected({ link, clicks: data });
    } catch (err) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <StatisticsTable links={state.links} onShowClicks={showClicks} />
      <ClickDetailsModal
        open={!!selected}
        onClose={() => setSelected(null)}
        clicks={selected?.clicks}
      />
    </Container>
  );
}

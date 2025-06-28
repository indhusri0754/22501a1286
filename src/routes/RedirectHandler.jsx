import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { UrlService } from '../services/UrlService';

export default function RedirectHandler() {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const go = async () => {
      try {
        const data = await UrlService.resolve(shortcode);
        window.location.href = data.originalUrl;
      } catch {
        navigate('/');
      }
    };
    go();
  }, [shortcode, navigate]);

  return <div style={{ padding: 40 }}>Redirecting…</div>;
}

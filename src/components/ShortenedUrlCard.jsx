import { Card, CardContent, Typography, Link } from '@mui/material';

export default function ShortenedUrlCard({ item }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography>Original: {item.originalUrl}</Typography>
        <Typography>
          Short:{' '}
          <Link
            href={`/${item.shortCode}`}
            target="_blank"
            rel="noopener"
          >
            {window.location.origin}/{item.shortCode}
          </Link>
        </Typography>
        <Typography variant="body2">
          Expires: {new Date(item.expiresAt).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}

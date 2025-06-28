import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function StatisticsTable({ links, onShowClicks }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Short</TableCell>
          <TableCell>Original</TableCell>
          <TableCell>Created</TableCell>
          <TableCell>Expires</TableCell>
          <TableCell>Clicks</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {links.map((l) => (
          <TableRow key={l.shortCode}>
            <TableCell>
              {window.location.origin}/{l.shortCode}
            </TableCell>
            <TableCell>{l.originalUrl}</TableCell>
            <TableCell>
              {new Date(l.createdAt).toLocaleString()}
            </TableCell>
            <TableCell>
              {new Date(l.expiresAt).toLocaleString()}
            </TableCell>
            <TableCell>{l.clickCount}</TableCell>
            <TableCell>
              <IconButton onClick={() => onShowClicks(l)}>
                <VisibilityIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

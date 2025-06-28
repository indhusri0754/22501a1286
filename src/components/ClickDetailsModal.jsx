import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export default function ClickDetailsModal({ open, onClose, clicks = [] }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Click Details</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clicks.map((c, i) => (
              <TableRow key={i}>
                <TableCell>
                  {new Date(c.timestamp).toLocaleString()}
                </TableCell>
                <TableCell>{c.referrer || 'Direct'}</TableCell>
                <TableCell>{c.location || 'Unknown'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}

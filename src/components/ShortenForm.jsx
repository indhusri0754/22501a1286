import { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  isValidUrl,
  isPositiveInt,
  isValidShortcode,
} from '../utils/validators';

const emptyRow = { url: '', validity: '', code: '', errors: {} };

export default function ShortenForm({ onSubmit }) {
  const [rows, setRows] = useState([{ ...emptyRow }]);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const addRow = () => {
    if (rows.length < 5) setRows([...rows, { ...emptyRow }]);
  };

  const removeRow = (idx) => setRows(rows.filter((_, i) => i !== idx));

  const validate = () => {
    let ok = true;
    const newRows = rows.map((row) => {
      const errors = {};
      if (!isValidUrl(row.url)) {
        errors.url = 'Invalid URL';
        ok = false;
      }
      if (row.validity && !isPositiveInt(row.validity)) {
        errors.validity = 'Must be positive int';
        ok = false;
      }
      if (row.code && !isValidShortcode(row.code)) {
        errors.code = 'Alphanumeric only';
        ok = false;
      }
      return { ...row, errors };
    });
    setRows(newRows);
    return ok;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(
      rows.map((r) => ({
        originalUrl: r.url,
        validityMinutes: r.validity,
        customCode: r.code,
      }))
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {rows.map((row, idx) => (
          <Grid item xs={12} key={idx}>
            <Paper sx={{ p: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={5}>
                  <TextField
                    fullWidth
                    label="Long URL"
                    value={row.url}
                    error={!!row.errors.url}
                    helperText={row.errors.url || ''}
                    onChange={(e) =>
                      handleChange(idx, 'url', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label="Validity (minutes)"
                    value={row.validity}
                    error={!!row.errors.validity}
                    helperText={row.errors.validity || ''}
                    onChange={(e) =>
                      handleChange(idx, 'validity', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label="Custom code"
                    value={row.code}
                    error={!!row.errors.code}
                    helperText={row.errors.code || ''}
                    onChange={(e) =>
                      handleChange(idx, 'code', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} md={1}>
                  {rows.length > 1 && (
                    <IconButton onClick={() => removeRow(idx)}>
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={addRow}
            disabled={rows.length >= 5}
          >
            Add URL
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Shorten
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

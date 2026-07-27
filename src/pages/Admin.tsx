import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const STORAGE_KEY = 'fjosid_blocked_dates';

function loadDates(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveDates(dates: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dates));
}

export default function Admin() {
  const { t } = useTranslation();
  const [dates, setDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [search, setSearch] = useState('');

  useEffect(() => {
    setDates(loadDates());
  }, []);

  const addDate = () => {
    if (!selectedDate) return;
    const dateStr = selectedDate.format('YYYY-MM-DD');
    if (dates.includes(dateStr)) return;
    const updated = [...dates, dateStr].sort();
    setDates(updated);
    saveDates(updated);
    setSelectedDate(null);
  };

  const removeDate = (dateStr: string) => {
    const updated = dates.filter((d) => d !== dateStr);
    setDates(updated);
    saveDates(updated);
  };

  const isDateBlocked = (d: Dayjs) => dates.includes(d.format('YYYY-MM-DD'));

  const filtered = dates.filter((d) =>
    dayjs(d).format('DD/MM/YYYY').includes(search)
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className="admin-content">
        <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
          {t('admin.title')}
        </Typography>

        {/* Add date row */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <DatePicker
            label={t('booking.date')}
            value={selectedDate}
            onChange={setSelectedDate}
            minDate={dayjs()}
            shouldDisableDate={isDateBlocked}
            slotProps={{ textField: { size: 'small' } }}
          />
          <Button variant="outlined" onClick={addDate} disabled={!selectedDate}>
            {t('admin.addDate')}
          </Button>
        </Box>

        {/* Table */}
        <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 500 }}>{t('admin.datesTitle')}</Typography>
            <TextField
              size="small"
              placeholder={t('admin.search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>{t('admin.date')}</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map((d) => (
                <TableRow key={d} hover>
                  <TableCell>{dayjs(d).format('DD/MM/YYYY')}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={() => removeDate(d)} aria-label="delete">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={2} align="center" sx={{ color: 'text.secondary' }}>
                    —
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </LocalizationProvider>
  );
}

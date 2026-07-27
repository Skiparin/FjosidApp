import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Alert,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const GUESTS = Array.from({ length: 33 }, (_, i) => `${i + 8} Guests`);
const BLOCKED_DATES_KEY = 'fjosid_blocked_dates';

function loadBlockedDates(): string[] {
  try {
    return JSON.parse(localStorage.getItem(BLOCKED_DATES_KEY) || '[]');
  } catch {
    return [];
  }
}

export default function Booking() {
  const { t } = useTranslation();
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    setBlockedDates(loadBlockedDates());
  }, []);

  const schema = z.object({
    date: z.instanceof(Object).refine((v) => v !== null, { message: t('booking.date') }),
    guests: z.string().min(1, t('booking.guestsRequired')),
    firstName: z.string().min(1, t('booking.firstNameRequired')),
    lastName: z.string().min(1, t('booking.lastNameRequired')),
    email: z.string().min(1, t('booking.emailRequired')).email(t('booking.emailInvalid')),
    phone: z
      .string()
      .min(1, t('booking.phoneRequired'))
      .regex(/^[+\d\s()-]{6,}$/, t('booking.phoneInvalid')),
    message: z.string().optional(),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      date: dayjs(),
      guests: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const isDateBlocked = (date: Dayjs) =>
    blockedDates.some((d) => dayjs(d).isSame(date, 'day'));

  const onSubmit = (data: FormValues) => {
    console.log('Booking submitted:', data);
    // TODO: Integrate email service (e.g. EmailJS or backend endpoint)
    reset();
    setSnackOpen(true);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: 'flex', justifyContent: 'center', background: '#f7f7f7', minHeight: '80vh' }}>
        <Box className="booking-section-wrapper">
          <Typography component="h2" className="booking-section__title">
            {t('booking.title')}
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} className="booking-section">
            <Box className="booking-section__info-wrapper">
              <Box className="booking-section__info-wrapper-two">
                <Box sx={{ width: '100%' }}>
                  {/* Row 1: Date + Guests */}
                  <Box className="booking-section__info-item-wrapper" sx={{ mb: 1 }}>
                    <Box sx={{ flex: 1 }}>
                      <Controller
                        name="date"
                        control={control}
                        render={({ field }) => (
                          <DatePicker
                            label={t('booking.date')}
                            value={field.value as Dayjs}
                            onChange={field.onChange}
                            minDate={dayjs()}
                            shouldDisableDate={isDateBlocked}
                            slotProps={{
                              textField: {
                                fullWidth: true,
                                error: !!errors.date,
                                helperText: errors.date?.message as string,
                                sx: { mb: 1 },
                              },
                            }}
                          />
                        )}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Controller
                        name="guests"
                        control={control}
                        render={({ field }) => (
                          <FormControl fullWidth error={!!errors.guests} sx={{ mb: 1 }}>
                            <InputLabel>{t('booking.numberOfGuests')}</InputLabel>
                            <Select {...field} label={t('booking.numberOfGuests')}>
                              {GUESTS.map((g) => (
                                <MenuItem key={g} value={g}>{g}</MenuItem>
                              ))}
                            </Select>
                            {errors.guests && (
                              <FormHelperText>{errors.guests.message}</FormHelperText>
                            )}
                          </FormControl>
                        )}
                      />
                    </Box>
                  </Box>

                  {/* Row 2: First + Last name */}
                  <Box className="booking-section__info-item-wrapper" sx={{ mb: 1 }}>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('booking.firstName')}
                          fullWidth
                          error={!!errors.firstName}
                          helperText={errors.firstName?.message}
                          sx={{ mb: 1 }}
                        />
                      )}
                    />
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('booking.lastName')}
                          fullWidth
                          error={!!errors.lastName}
                          helperText={errors.lastName?.message}
                          sx={{ mb: 1 }}
                        />
                      )}
                    />
                  </Box>

                  {/* Row 3: Email + Phone */}
                  <Box className="booking-section__info-item-wrapper" sx={{ mb: 1 }}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('booking.email')}
                          type="email"
                          fullWidth
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          sx={{ mb: 1 }}
                        />
                      )}
                    />
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('booking.phone')}
                          fullWidth
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                          sx={{ mb: 1 }}
                        />
                      )}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Message */}
            <Box className="booking-section__info-text-field-wrapper">
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t('booking.message')}
                    multiline
                    rows={5}
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                  />
                )}
              />
            </Box>

            {/* Submit */}
            <Box className="booking-section__info-button-wrapper">
              <Box className="booking-section__info-button-wrapper-two">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!isValid}
                  color="success"
                >
                  {t('booking.reserve')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="info" onClose={() => setSnackOpen(false)}>
          {t('booking.success')}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}

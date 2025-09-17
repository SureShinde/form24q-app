import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const FormHeader = () => {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h5" gutterBottom>
        Form 24Q
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Quarterly statement of deduction of tax under sub-section (3) of section 200 of the Income-tax Act, 1961
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Financial Year: 2023-24
        </Typography>
        <Typography variant="body1">
          Quarter: Q2 (July to September)
        </Typography>
      </Box>
    </Paper>
  );
};

export default FormHeader;
import React from 'react';
import { Box, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material';
import FormHeader from './FormHeader';
import TdsDetailsGrid from './TdsDetailsGrid';
import ChallanDetailsGrid from './ChallanDetailsGrid';

const Form24Q = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <FormHeader />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Form 24Q tabs">
            <Tab label="Form Details" value="1" />
            <Tab label="Challan Details" value="2" />
            <Tab label="Annexure I (Deductee details)" value="3" />
            <Tab label="Other Services of TIN" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TdsDetailsGrid />
        </TabPanel>
        <TabPanel value="2">
          <ChallanDetailsGrid />
        </TabPanel>
        <TabPanel value="3">
          <Typography>Deductee Details Coming Soon</Typography>
        </TabPanel>
        <TabPanel value="4">
          <Typography>TIN Services Coming Soon</Typography>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Form24Q;
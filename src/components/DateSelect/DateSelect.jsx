import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { months, years } from './transactionsPeriod';
import './selectStyle.scss';

function DateSelect({ month, year, handleChange }) {
  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <Select
          name="month"
          value={month}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {months.map(({ number, name }) => (
            <MenuItem key={number} value={number}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }}>
        <Select
          name="year"
          value={year}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {years.map(year => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default DateSelect;

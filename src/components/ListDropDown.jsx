import React from 'react';
import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Stack } from "@mui/system";

const ListDropDown = ({ text, list, handleChangeInputs, name }) => {
  return (
    <Grid item xs={12} md={12}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 2, sm: 2, md: 2 }}>
        <InputLabel
          variant="filled"
          sx={{ color: "black" }}
        >
          <h1 className='text-xs text-center mb-3 font-black uppercase'>
            {text}
          </h1>
        </InputLabel>
        <Select
          fullWidth={true}
          name={name}
          variant="filled"
          onChange={handleChangeInputs}
        >
          {list.length > 0 && list.map((e, index) => (
            <MenuItem value={e.value || e.tCodigoPais} key={index}>
              {e.text || e.tDescripcionPais}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </Grid>
  );
}

export default ListDropDown;
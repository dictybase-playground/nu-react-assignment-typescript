import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Search = () => {

    const [searchText, setText] = useState<String | String>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
      };
  return (
    <React.Fragment>
      <Box display="flex"
        sx={ {flexDirection: 'row'}}
        alignItems="center"
        justifyContent="center"
        bgcolor="#D6D2CB"
      >
        <TextField
          id="outlined-basic"
          label="Item Name"
          variant="outlined"
          value={searchText}
          onChange={handleChange}
          placeholder="Ex: CSS"
        />
        <Button variant="outlined" color="secondary" /* onClick={handleButtonAdd} */>
          Add Item
        </Button>
      </Box>
    </React.Fragment>
  );
};
export default Search;

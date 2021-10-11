import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { ReducerContext } from '../App';

const Search = () => {

    const [searchText, setText] = useState<String | String>("");
    const { state, dispatch } = useContext(ReducerContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
      };

    const createItemData = () => {
      const new_id = itemList.length + 1 + Math.floor(Math.random() * 9999);
      dispatch("Add Item", {id: new_id, name: searchText});
      return; 
    }
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
        <Button variant="outlined" color="secondary" onClick={createItemData()} >
          Add Item
        </Button>
      </Box>
    </React.Fragment>
  );
};
export default Search;

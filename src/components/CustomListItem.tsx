import React, { useContext } from "react";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { ReducerContext } from '../App';
import {ItemData} from '../App';

const CustomListItem = ({itemProp}: {itemProp: ItemData}) => {
  const { state, dispatch } = useContext(ReducerContext);

  return (
    <Box bgcolor="#C28D9F">
      <ListItem divider>
        <ListItemText primary={itemProp.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              dispatch({type:"Delete Item", payload: itemProp});
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Box>
  );
};

export default CustomListItem;

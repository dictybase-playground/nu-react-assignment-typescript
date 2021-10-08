import React from "react";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

const CustomListItem = () => {
  return (
    <Box bgcolor="#C28D9F">
      <ListItem divider>
        {/* <ListItemText primary={item.name} /> */}
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              // handleItemDelete(item.id);
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

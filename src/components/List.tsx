import React, { FC, useContext } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import CustomListItem from "./CustomListItem";
import Box from "@mui/material/Box";
import { ItemData, ReducerContext } from "../App";

const ListSection = () => {

  const { state, dispatch } = useContext(ReducerContext);
  console.debug("ListSection: ", state);
  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="#DECAA1"
      >
        <Typography variant="h3" gutterBottom>
          My Items {state.length}
        </Typography>
        <List>
          {state.map((item: ItemData) => {
            return (
              <React.Fragment key={item.id}>
                <CustomListItem
                  itemProp={item}
                ></CustomListItem>
              </React.Fragment>
            );
          })}
        </List>
      </Box>
    </React.Fragment>
  );
};
export default ListSection;

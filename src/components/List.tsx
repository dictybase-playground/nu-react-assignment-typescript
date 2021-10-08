import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import CustomListItem from "./CustomListItem";
import Box from "@mui/material/Box";

interface ItemData {
    id: number,
    name: String
}

const ListSection: FC<ItemData[]> = ({itemList}) => {

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
          My Items {itemList.length}
        </Typography>
        <List>
          {itemList.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <CustomListItem
                //   item={item}
                //   handleItemDelete={handleItemDelete}
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

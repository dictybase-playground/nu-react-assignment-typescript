import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const header = () => {
  // hooks and any non jsx code
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h3" gutterBottom>
        Manage my items
      </Typography>
    </Box>
  );
};

export default header;

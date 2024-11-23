import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useLocation } from "react-router-dom";

const DynamicPage = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return !data ? (<Typography variant="h6">No data available</Typography>) :
    (<Container maxWidth="md">
      <Box sx={{ padding: 3 }}>
        <Typography variant="h3" gutterBottom>
          {data?.title}
        </Typography>
        <Typography variant="body1" paragraph>
          Description for {data?.description}
        </Typography>
        <Box>{data.content || "No content available"}</Box>
      </Box>
    </Container>)
};

export default DynamicPage;

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { PageTypes } from "../types";


// Define the type for the data prop
const DynamicPage: React.FC = () => {
  const location = useLocation();
  const { data }: { data?: PageTypes } = location.state || {};

  if (!data) {
    return (
      <Container maxWidth="md">
        <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
          No data available
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ padding: 3 }}>
        {/* Display image if available */}
        {data.imageUrl && (
          <Box sx={{ textAlign: "center", marginBottom: 3 }}>
            <img
              src={data.imageUrl}
              alt={data.title}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </Box>
        )}

        {/* Title */}
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 600 }}>
          {data.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          paragraph
          sx={{
            marginBottom: 3,
            color: "text.secondary",
            fontSize: "1.1rem",
            lineHeight: 1.8,
          }}
        >
          {data.description}
        </Typography>

        {/* Content */}
        {data.content ? (
          <Typography
            variant="body2"
            component="div"
            sx={{
              lineHeight: 1.8,
              fontSize: "1rem",
              whiteSpace: "pre-line",
              color: "text.primary",
            }}
          >
            {data.content}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No content available
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default DynamicPage;

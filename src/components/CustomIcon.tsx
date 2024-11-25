import React from "react";
import { Grid } from "@mui/material";
import {LocalBar as LocalBarIcon, Search as SearchIcon, QuestionMark as QuestionMarkIcon, AdminPanelSettings as AdminPanelSettingsIcon, Liquor as LiquorIcon, Book as BookIcon} from "@mui/icons-material";

interface CustomIconProps {
  name: string; // Card object containing the name
  isDevice: boolean; // Boolean to adjust icon size for mobile
}

const getIconByCardName = (name?: string) => {
  switch (name) {
    case "search":
      return <SearchIcon />;
    case "book":
      return <BookIcon />;
    case "story":
      return <AdminPanelSettingsIcon />;
    case "whiskey":
      return <LiquorIcon />;
    default:
      return <QuestionMarkIcon />; // Default icon
  }
};

const CustomIcon: React.FC<CustomIconProps> = ({ name, isDevice }) => {
  return (
    <Grid>
      {React.cloneElement(getIconByCardName(name), {
        fontSize: isDevice ? "small" : "large", // Adjust icon size for devices
        sx: { color: "primary.dark" }, // Add styles
      })}
    </Grid>
  );
};

export default CustomIcon;

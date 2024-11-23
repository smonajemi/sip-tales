import { Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LocalBar as LocalBarIcon } from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { useResponsiveness } from "../../../components/hooks/useResponsiveness";
import { useState } from "react";
import { CocktailCardTypes } from "../../../types";

interface CocktailCardProps {
  cardData: {
    title: string;
    url: string;
  }[];
}

const CocktailCard: React.FC<CocktailCardProps> = ({ cardData }) => {
  const navigate = useNavigate();
  const {isDevice} = useResponsiveness()
  const [isCocktailCard, setCocktailCard] = useState<CocktailCardTypes | null>(null);
  const handleCocktailCard = (data: any, id: number) => {
    if (data) {
      navigate(`/cocktail/${id}`, { state: { data } });
    } else {
      alert('Data is null or undefined. Cannot navigate.');
    }
  };
  return (
    <Grid
    container
    spacing={2}
    sx={{ mt: 2 }}
    justifyContent="center"
    alignItems="center"
  >
    {cardData.map((card, index) => (
      <Grid
        key={index}
        size={{xs: isDevice ? 4 : 12, sm: 4, md: 4, lg: 2}}
        display="flex"
        justifyContent="center"
      >
        <Card
          variant="outlined"
          sx={{
            width: isDevice ? 100 : { xs: 120, sm: 300 }, // Smaller width for mobile
            height: isDevice ? 100 : { xs: 120, sm: 200 }, // Smaller height for mobile
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 32px 30px 14px hsla(210, 100%, 25%, 0.3)",
            },
          }}
          onClick={() => {
            handleCocktailCard({ title: card.title, content: `Content for ${card.title}` }, index);
          }}
        >
          <CardContent
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {/* Icon positioned above the title */}
              <Grid>
                <LocalBarIcon
                  fontSize={isDevice ? "small" : "large"} // Smaller icon size for mobile
                  sx={{ color: "primary.main" }}
                />
              </Grid>
  
              {/* Title aligned below the icon */}
              <Grid sx={{ mt: 1 }}>
                <Typography
                  variant={isDevice ? "body2" : "h6"} // Smaller font size for mobile
                  component="div"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%",
                    textAlign: "center",
                    fontSize: isDevice ? "0.75rem" : "1rem", // Additional size adjustment
                  }}
                >
                  {card.title || "Cocktail Title"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  
  );
};

export default CocktailCard;

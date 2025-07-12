"use client";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import { Heart } from "lucide-react";

export function SavedItemCard({ savedItem, onToggleLike, onView }) {
  const isLiked = true; // Items in SavedSection are inherently liked/saved

  // Determine background image/color and main text based on item type
  let backgroundImage = "/images/saved-shop-card-bg.png"; // Default to shop background
  let categoryLabel = "";
  const mainTitle = savedItem.title;
  const subTitle = savedItem.subtitle;
  let showProgress = false;
  let viewButtonText = "View";

  if (savedItem.type === "list") {
    backgroundImage = savedItem.color ? "" : "/images/saved-shop-card-bg.png"; // Use color if available, else default image
    categoryLabel = "List";
    showProgress = true;
    viewButtonText = "View List";
  } else if (savedItem.type === "post") {
    backgroundImage = savedItem.image || "/images/saved-shop-card-bg.png";
    categoryLabel = "Post";
    viewButtonText = "View Post";
  } else if (savedItem.type === "shop") {
    backgroundImage = savedItem.image || "/images/saved-shop-card-bg.png";
    categoryLabel = savedItem.data?.category || "Shop";
    viewButtonText = "View Shop";
  }

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        width: "100%",
        paddingBottom: "100%", // Creates a square aspect ratio
        height: 0,
        bgcolor:
          savedItem.type === "list" && savedItem.color
            ? savedItem.color
            : "transparent", // Use list color if available
        boxShadow: "none",
      }}
      onClick={() => onView(savedItem)}
    >
      {/* Background Image/Emoji */}
      {savedItem.type === "list" && savedItem.image && !savedItem.color ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6rem", // Large emoji
            background: "rgba(0,0,0,0.3)", // Dark overlay for emoji background
            borderRadius: "12px",
          }}
        >
          {savedItem.image}
        </Box>
      ) : (
        <Box
          component="img"
          src={backgroundImage}
          alt={mainTitle}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      )}

      {/* Overlay Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "1rem",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
        }}
      >
        {/* Heart Icon */}
        <Box
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            bgcolor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <Heart
            className={`w-6 h-6 cursor-pointer transition-colors ${
              isLiked ? "text-yellow-500 fill-yellow-500" : "text-yellow-500"
            }`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click when heart is clicked
              onToggleLike(savedItem.id, savedItem.type, savedItem.data);
            }}
            style={{ fill: isLiked ? "#FFD700" : "none", stroke: "#FFD700" }}
          />
        </Box>

        {/* Text Content */}
        <Chip
          label={categoryLabel}
          size="small"
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            marginBottom: "0.5rem",
            fontSize: "0.75rem",
            fontWeight: "bold",
            borderRadius: "4px",
            paddingX: "0.5rem",
            alignSelf: "flex-start",
          }}
        />
        <h3
          className="font-bold text-white mb-1"
          sx={{ fontSize: "1.25rem" }} // Larger font size for main title
        >
          {mainTitle}
        </h3>
        <p className="text-sm text-gray-200 mb-2">{subTitle}</p>

        {showProgress && (
          <LinearProgress
            variant="determinate"
            value={savedItem.progress}
            sx={{
              height: "0.5rem",
              bgcolor: "rgba(255,255,255,0.3)",
              "& .MuiLinearProgress-bar": { bgcolor: "#A78BFA" },
              marginBottom: "0.75rem",
              borderRadius: "4px",
            }}
          />
        )}

        <Button
          variant="text"
          size="small"
          sx={{
            color: "white",
            textTransform: "none",
            padding: "0",
            minWidth: "auto",
            alignSelf: "flex-start",
            "&:hover": {
              bgcolor: "transparent",
              textDecoration: "underline",
            },
            textDecoration: "underline",
            fontWeight: "bold",
            fontSize: "0.875rem",
          }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when button is clicked
            onView(savedItem);
          }}
        >
          {viewButtonText}
        </Button>
      </Box>
    </Card>
  );
}

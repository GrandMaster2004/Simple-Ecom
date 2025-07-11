"use client";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box"; // Import Box for flexible layout
import Chip from "@mui/material/Chip";
import { Heart } from "lucide-react";
import shop1 from "../assets/images/full-card.png";
// import shop2 from "../assets/images/full-shot.png";
export function ShopCard({ shop, isLiked, onToggleLike, onShopClick }) {
  return (
    <Card
      sx={{
        position: "relative", // For absolute positioning of children
        borderRadius: "12px", // Rounded corners for the card
        overflow: "hidden", // Ensures image and content stay within bounds
        width: "100%",
        paddingBottom: "100%", // Creates a square aspect ratio (adjust as needed)
        height: 0, // Required for paddingBottom trick
        bgcolor: "transparent", // No background color for the card itself
        boxShadow: "none", // Remove default shadow
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={shop1} // Use the provided image or fallback
        alt={shop.name}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Cover the entire area
          borderRadius: "12px", // Match card's border radius
        }}
      />

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
          justifyContent: "flex-end", // Align content to the bottom
          padding: "1rem",
          // Optional: Add a gradient overlay for better text readability
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
            bgcolor: "white", // White circle background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.2)", // Subtle shadow for the circle
          }}
        >
          <Heart
            className={`w-6 h-6 cursor-pointer transition-colors ${
              isLiked ? "text-yellow-500 fill-yellow-500" : "text-yellow-500" // Always golden, fill if liked
            }`}
            onClick={() => onToggleLike(shop.id, "shop", shop)}
            style={{ fill: isLiked ? "#FFD700" : "none", stroke: "#FFD700" }} // Golden fill for liked, golden stroke for unliked
          />
        </Box>

        {/* Text Content */}
        <Chip
          label={shop.category}
          size="small"
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white background
            color: "white",
            marginBottom: "0.5rem",
            fontSize: "0.75rem",
            fontWeight: "bold",
            borderRadius: "4px",
            paddingX: "0.5rem",
            alignSelf: "flex-start", // Align chip to the left
          }}
        />
        <h3
          className="font-bold text-white mb-1 cursor-pointer"
          onClick={() => onShopClick(shop)}
          sx={{ fontSize: "1.25rem" }} // Larger font size for shop name
        >
          {shop.name}
        </h3>
        <p className="text-sm text-gray-200">{shop.location}</p>
      </Box>
    </Card>
  );
}

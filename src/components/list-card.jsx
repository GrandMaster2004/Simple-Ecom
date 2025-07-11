"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"; // For the image container
import { Package, CheckSquare } from "lucide-react"; // Import new icons

export function ListCard({ category, onView }) {
  return (
    <Card
      sx={{
        bgcolor: "#F8F8F8", // Light background
        borderColor: "transparent",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", // Subtle shadow
        borderRadius: "12px", // Rounded corners
        overflow: "hidden", // Crucial for containing absolute image
        position: "relative", // Context for absolute image
        display: "flex", // Use flex to stack content and image
        flexDirection: "column",
        height: "auto", // Allow height to adjust
        minHeight: "220px", // Minimum height to accommodate content and image
      }}
    >
      <CardContent sx={{ padding: "1rem", flexGrow: 1, paddingBottom: "70px" }}>
        {/* Added paddingBottom for image */}
        <h3
          className="font-semibold"
          style={{ color: "#333", fontSize: "1rem", marginBottom: "0.5rem" }}
        >
          {category.title}
        </h3>
        <div
          className="flex flex-col space-y-1 text-sm"
          style={{ color: "#666", marginBottom: "1rem" }}
        >
          <div className="flex items-center space-x-1">
            <Package className="w-4 h-4" />
            <span style={{ color: "#3D3D3D" }}>{category.items} Items</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckSquare className="w-4 h-4" />
            <span style={{ color: "#3D3D3D" }}>{category.progress}% done</span>
          </div>
        </div>
        <Button
          variant="contained" // Use contained variant for solid background
          size="small"
          sx={{
            bgcolor: "#FDD835", // Yellow/gold background
            color: "#333", // Dark text
            textTransform: "none",
            fontWeight: "medium",
            boxShadow: "none", // Remove default button shadow
            borderRadius: "8px", // Rounded button corners
            "&:hover": {
              bgcolor: "#FBC02D", // Darker yellow on hover
              boxShadow: "none",
            },
          }}
          onClick={() => onView(category)}
        >
          View
        </Button>
      </CardContent>

      {/* Product Image at the bottom */}
      <Box
        component="img"
        src={"/images/list-card-image.png"} // Reference the added image asset
        alt="Fresh picks"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "80px", // Fixed height for the image section
          objectFit: "contain", // Fit image within its bounds
          objectPosition: "bottom", // Align image to the bottom of its container
          zIndex: 0, // Ensure it's in the background, behind text if any accidental overlap
        }}
      />
    </Card>
  );
}

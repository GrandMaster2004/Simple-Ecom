"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { X } from "lucide-react";

export function CreateShop({ onClose }) {
  // Removed uploadedImages, triggerImageUpload props
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4"
        style={{ backgroundColor: "#1A1A1A", color: "#FFD700" }}
      >
        <h1 className="text-xl font-semibold">New Shop</h1>
        <Button
          variant="text"
          onClick={onClose}
          sx={{ minWidth: "auto", padding: "0.5rem", color: "white" }}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Form Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
          backgroundColor: "#FFF8E1", // Cream/beige background
          borderRadius: "12px", // Rounded corners
          border: "1px solid #E0E0E0", // Subtle border
          margin: "1rem", // Margin from screen edges
          boxShadow: "0px 4px 10px rgba(0,0,0,0.05)", // Subtle shadow
          alignItems: "center", // Center content horizontally
          justifyContent: "center", // Center content vertically
        }}
      >
        <div className="space-y-6 w-full max-w-sm">
          {/* Shop Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">
              Shop Name:
            </label>
            <TextField
              placeholder="Name of the shop"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  bgcolor: "white",
                  color: "#333",
                  borderRadius: "8px",
                  "& fieldset": { borderColor: "#E6C677", borderWidth: "1px" },
                  "&:hover fieldset": { borderColor: "#D4AF37" },
                  "&.Mui-focused fieldset": { borderColor: "#D4AF37" },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#999",
                  opacity: 1,
                },
              }}
            />
          </div>
          {/* Shop Type */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">
              Shop Type:
            </label>
            <TextField
              placeholder="Enter type of the shop(supermarket,clothing...)"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  bgcolor: "white",
                  color: "#333",
                  borderRadius: "8px",
                  "& fieldset": { borderColor: "#E6C677", borderWidth: "1px" },
                  "&:hover fieldset": { borderColor: "#D4AF37" },
                  "&.Mui-focused fieldset": { borderColor: "#D4AF37" },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#999",
                  opacity: 1,
                },
              }}
            />
          </div>
          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">
              Location:
            </label>
            <TextField
              placeholder="Enter location of the shop"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  bgcolor: "white",
                  color: "#333",
                  borderRadius: "8px",
                  "& fieldset": { borderColor: "#E6C677", borderWidth: "1px" },
                  "&:hover fieldset": { borderColor: "#D4AF37" },
                  "&.Mui-focused fieldset": { borderColor: "#D4AF37" },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#999",
                  opacity: 1,
                },
              }}
            />
          </div>

          {/* Add Shop Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#E6C677", // Golden button
              color: "#333", // Dark text
              paddingY: "0.75rem",
              textTransform: "none",
              fontWeight: "medium",
              fontSize: "1rem",
              borderRadius: "8px",
              marginTop: "2rem",
              "&:hover": { bgcolor: "#D4AF37" },
              boxShadow: "none",
            }}
          >
            Add Shop
          </Button>
        </div>
      </Box>
    </div>
  );
}

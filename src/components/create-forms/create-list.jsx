"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { X } from "lucide-react";

export function CreateList({ onClose }) {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4"
        style={{ backgroundColor: "#1A1A1A", color: "#FFD700" }}
      >
        <h1 className="text-xl font-semibold">New List</h1>
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
          backgroundColor: "#FFF8E1",
          borderRadius: "12px",
          border: "1px solid #E0E0E0",
          margin: "20px auto",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
          alignItems: "center",
          justifyContent: "center",
          width: {
            xs: "90%", // Extra-small devices (phones)
            sm: "80%", // Small devices (tablets)
            md: "60%", // Medium devices
            lg: "50%", // Large devices
            xl: "40%", // Extra-large screens
          },
        }}
      >
        <div className="space-y-6 w-full max-w-sm">
          {/* List Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">
              List Name:
            </label>
            <TextField
              placeholder="Enter list name"
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

          {/* Add List Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#E6C677",
              color: "#333",
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
            Add list
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default CreateList;

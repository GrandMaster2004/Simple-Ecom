"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { X } from "lucide-react";

export function CreateList({ onClose }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex items-center justify-between p-4 border-b border-gray-700  bg-gray-900 text-white">
        <h1 className="text-xl font-semibold">New List</h1>
        <Button
          variant="text"
          onClick={onClose}
          sx={{ minWidth: "auto", padding: "0.5rem", color: "white" }}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="p-4 space-y-6 bg-white text-black">
        <div>
          <label className="block text-sm font-medium mb-2">List Name:</label>
          <TextField
            placeholder="Enter list name"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: "#fff",
                color: "black",
                borderColor: "#4B5563",
                "& fieldset": { borderColor: "#4B5563" },
                "&:hover fieldset": { borderColor: "#A78BFA" },
                "&.Mui-focused fieldset": { borderColor: "#A78BFA" },
              },
            }}
          />
        </div>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#8B5CF6",
            color: "white",
            paddingY: "0.75rem",
            "&:hover": { bgcolor: "#7C3AED" },
          }}
        >
          Add list
        </Button>
      </div>
    </div>
  );
}

export default CreateList;

"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { X, Upload } from "lucide-react";

export function CreateShop({ onClose, uploadedImages, triggerImageUpload }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">New Shop</h1>
        <Button
          variant="text"
          onClick={onClose}
          sx={{ minWidth: "auto", padding: "0.5rem", color: "white" }}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Shop Name:</label>
          <TextField
            placeholder="Enter shop name"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: "#1F2937",
                color: "white",
                borderColor: "#4B5563",
                "& fieldset": { borderColor: "#4B5563" },
                "&:hover fieldset": { borderColor: "#A78BFA" },
                "&.Mui-focused fieldset": { borderColor: "#A78BFA" },
              },
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Shop Category:
          </label>
          <TextField
            placeholder="e.g., Grocery, Clothing, Electronics"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: "#1F2937",
                color: "white",
                borderColor: "#4B5563",
                "& fieldset": { borderColor: "#4B5563" },
                "&:hover fieldset": { borderColor: "#A78BFA" },
                "&.Mui-focused fieldset": { borderColor: "#A78BFA" },
              },
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Shop Location:
          </label>
          <TextField
            placeholder="Enter location (e.g., City | Distance)"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: "#1F2937",
                color: "white",
                borderColor: "#4B5563",
                "& fieldset": { borderColor: "#4B5563" },
                "&:hover fieldset": { borderColor: "#A78BFA" },
                "&.Mui-focused fieldset": { borderColor: "#A78BFA" },
              },
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Upload Shop Image:
          </label>
          <div
            className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition-colors"
            onClick={() => triggerImageUpload("shop-image")}
          >
            {uploadedImages["shop-image"] ? (
              <div className="space-y-4">
                <img
                  src={uploadedImages["shop-image"] || "/placeholder.svg"}
                  alt="Shop Image"
                  className="w-full h-48 object-cover rounded-lg mx-auto"
                />
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "transparent",
                    color: "white",
                    borderColor: "#4B5563",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#A78BFA",
                      bgcolor: "rgba(167, 139, 250, 0.08)",
                    },
                  }}
                >
                  Change image
                </Button>
              </div>
            ) : (
              <>
                <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400 mb-2">Upload your shop image</p>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "transparent",
                    color: "white",
                    borderColor: "#4B5563",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#A78BFA",
                      bgcolor: "rgba(167, 139, 250, 0.08)",
                    },
                  }}
                >
                  Change image
                </Button>
              </>
            )}
          </div>
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
          Create Shop
        </Button>
      </div>
    </div>
  );
}

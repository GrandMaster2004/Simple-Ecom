"use client"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { X, Camera } from "lucide-react"

export function CreatePost({ onClose, uploadedImages, triggerImageUpload }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">Create New Post</h1>
        <Button variant="text" onClick={onClose} sx={{ minWidth: "auto", padding: "0.5rem", color: "white" }}>
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Upload Image:</label>
          <div
            className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition-colors"
            onClick={() => triggerImageUpload("post-image")}
          >
            {uploadedImages["post-image"] ? (
              <div className="space-y-4">
                <img
                  src={uploadedImages["post-image"] || "/placeholder.svg"}
                  alt="Uploaded"
                  className="w-full h-48 object-cover rounded-lg mx-auto"
                />
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "transparent",
                    color: "white",
                    borderColor: "#4B5563",
                    textTransform: "none",
                    "&:hover": { borderColor: "#A78BFA", bgcolor: "rgba(167, 139, 250, 0.08)" },
                  }}
                >
                  Change image
                </Button>
              </div>
            ) : (
              <>
                <Camera className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-400 mb-2">Upload your image</p>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "transparent",
                    color: "white",
                    borderColor: "#4B5563",
                    textTransform: "none",
                    "&:hover": { borderColor: "#A78BFA", bgcolor: "rgba(167, 139, 250, 0.08)" },
                  }}
                >
                  Change image
                </Button>
              </>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description:</label>
          <TextField
            placeholder="Enter description here...."
            multiline
            rows={4}
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
              "& .MuiInputBase-input": {
                minHeight: "100px",
              },
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Add Shop:</label>
          <TextField
            placeholder="Add shop/store"
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
          <label className="block text-sm font-medium mb-2">Add Mention:</label>
          <TextField
            placeholder="Enter location of the shop"
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

        <Button
          variant="contained"
          fullWidth
          sx={{ bgcolor: "#8B5CF6", color: "white", paddingY: "0.75rem", "&:hover": { bgcolor: "#7C3AED" } }}
        >
          Create Post
        </Button>
      </div>
    </div>
  )
}

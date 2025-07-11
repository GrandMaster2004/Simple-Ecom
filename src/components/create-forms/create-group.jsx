"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { X, Upload } from "lucide-react";

export function CreateGroup({ onClose, uploadedImages, triggerImageUpload }) {
  const members = ["Dad", "Mom", "Sis", "Raya"];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className=" bg-gray-900 text-white flex items-center justify-between p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">New Group</h1>
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
          <label className="block text-sm font-medium mb-2">Group Name:</label>
          <TextField
            placeholder="Enter your group"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                bgcolor: "#fff",
                color: "balck",
                borderColor: "#4B5563",
                "& fieldset": { borderColor: "#4B5563" },
                "&:hover fieldset": { borderColor: "#A78BFA" },
                "&.Mui-focused fieldset": { borderColor: "#A78BFA" },
              },
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 ">Group Icon:</label>
          <div
            className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 transition-colors"
            onClick={() => triggerImageUpload("group-icon")}
          >
            {uploadedImages["group-icon"] ? (
              <div className="space-y-4">
                <img
                  src={uploadedImages["group-icon"] || "/placeholder.svg"}
                  alt="Group Icon"
                  className="w-20 h-20 object-cover rounded-full mx-auto"
                />
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    bgcolor: "transparent",
                    color: "black",
                    borderColor: "none",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#A78BFA",
                      bgcolor: "rgba(167, 139, 250, 0.08)",
                    },
                  }}
                >
                  Change icon
                </Button>
              </div>
            ) : (
              <>
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-400 text-sm mb-2">
                  Upload your group icon
                </p>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    bgcolor: "transparent",
                    color: "black",
                    borderColor: "#4B5563",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#A78BFA",
                      bgcolor: "rgba(167, 139, 250, 0.08)",
                    },
                  }}
                >
                  Change icon
                </Button>
              </>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-4 text-black">
            Add Members:
          </label>
          <div className="space-y-3">
            {members.map((member) => (
              <div
                key={member}
                className="flex items-center justify-between p-3 bg-white border rounded-lg text-black"
              >
                <span>{member}</span>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ bgcolor: "#8B5CF6", "&:hover": { bgcolor: "#7C3AED" } }}
                >
                  Add
                </Button>
              </div>
            ))}
          </div>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              bgcolor: "transparent",
              color: "black",
              borderColor: "#4B5563",
              textTransform: "none",
              marginTop: "1rem",
              "&:hover": {
                borderColor: "#A78BFA",
                bgcolor: "rgba(167, 139, 250, 0.08)",
              },
            }}
          >
            Add Members
          </Button>
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
          Create Group
        </Button>
      </div>
    </div>
  );
}

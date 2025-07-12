"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"; // Import Box for styling
import Avatar from "@mui/material/Avatar"; // Import Avatar for member icons
import { X, Upload, UserPlus } from "lucide-react"; // Import UserPlus for "Add Members"

export function CreateGroup({ onClose, uploadedImages, triggerImageUpload }) {
  const members = [
    { name: "Dad", avatar: "/placeholder.svg?height=24&width=24&text=D" },
    { name: "Mom", avatar: "/placeholder.svg?height=24&width=24&text=M" },
    { name: "Sis", avatar: "/placeholder.svg?height=24&width=24&text=S" },
    { name: "Raya", avatar: "/placeholder.svg?height=24&width=24&text=R" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4"
        style={{ backgroundColor: "#1A1A1A", color: "#FFD700" }}
      >
        <h1 className="text-xl font-semibold">New Group</h1>
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
        }}
      >
        <div className="space-y-6 flex-grow">
          {/* Group Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">
              Group Name:
            </label>
            <TextField
              placeholder="Enter your group"
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

          {/* Group Icon Upload */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-800">
              Group Icon:
            </label>
            <div
              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors"
              style={{ borderColor: "#E6C677" }} // Golden dashed border
              onClick={() => triggerImageUpload("group-icon")}
            >
              {uploadedImages["group-icon"] ? (
                <div className="space-y-4">
                  <img
                    src={uploadedImages["group-icon"] || "/placeholder.svg"}
                    alt="Group Icon"
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                  />
                </div>
              ) : (
                <>
                  <Upload
                    className="h-8 w-8 mx-auto mb-2"
                    style={{ color: "#999" }}
                  />{" "}
                  {/* Gray icon */}
                  <p className="text-sm mb-2" style={{ color: "#999" }}>
                    Upload your group icon
                  </p>
                </>
              )}
            </div>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: "white", // White background
                color: "#333", // Dark text
                borderColor: "#E6C677", // Golden border
                textTransform: "none",
                marginTop: "1rem",
                borderRadius: "8px",
                "&:hover": { borderColor: "#D4AF37", bgcolor: "#F5F5F5" },
              }}
            >
              Change icon
            </Button>
          </div>

          {/* Add Members */}
          <div>
            <label className="block text-sm font-medium mb-4 text-gray-800">
              Add Members:
            </label>
            <div className="space-y-3">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar
                      src={member.avatar}
                      alt={member.name}
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: "#E0E0E0",
                        color: "#666",
                      }} // Gray avatar
                    />
                    <span style={{ color: "#333" }}>{member.name}</span>
                  </div>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      bgcolor: "#E6C677", // Golden button
                      color: "#333", // Dark text
                      textTransform: "none",
                      boxShadow: "none",
                      borderRadius: "8px",
                      "&:hover": { bgcolor: "#D4AF37" },
                    }}
                  >
                    Add
                  </Button>
                </div>
              ))}
              {/* Add Members row */}
              <div
                className="flex items-center p-3 rounded-lg"
                style={{ backgroundColor: "white" }}
              >
                <div className="flex items-center space-x-3">
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "#E0E0E0",
                      color: "#666",
                    }} // Gray avatar
                  >
                    <UserPlus className="w-5 h-5" />
                  </Avatar>
                  <span style={{ color: "#333" }}>Add Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Create Group Button */}
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
          Create Group
        </Button>
      </Box>
    </div>
  );
}

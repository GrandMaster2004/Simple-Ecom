"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import { Calendar, Clock, Package, PackageCheck, PackageX, Edit, Trash2 } from "lucide-react"

export function GroupCard({ group }) {
  return (
    <Card
      sx={{
        bgcolor: "#F8F0E3", // Light beige background
        borderColor: "transparent",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Subtle shadow
        borderRadius: "12px", // Rounded corners
        overflow: "hidden", // Ensures content stays within bounds
        color: "#333", // Default text color
        width: "100%", // Ensure card takes full width
      }}
    >
      <CardContent sx={{ padding: "1rem" }}>
        <div className="flex items-start space-x-4 mb-4">
          {/* Group Image */}
          <Box
            component="img"
            src={group.image || "/images/group-card-picnic.png"} // Use group image or fallback
            alt={group.title}
            sx={{
              width: 96, // Fixed width
              height: 96, // Fixed height
              borderRadius: "8px", // Slightly rounded corners for the image
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold" style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>
              {" "}
              {/* Adjusted font size to 14px */}
              {group.title}
            </h3>
            <div
              className="flex items-center space-x-1"
              style={{ color: "#8B5CF6", fontSize: "0.75rem", marginBottom: "0.125rem" }}
            >
              {" "}
              {/* Adjusted font size to 12px */}
              <Calendar className="w-3 h-3" />
              <span>{group.date}</span>
            </div>
            <div
              className="flex items-center space-x-1"
              style={{ color: "#8B5CF6", fontSize: "0.75rem", marginBottom: "0.5rem" }}
            >
              {" "}
              {/* Adjusted font size to 12px */}
              <Clock className="w-3 h-3" />
              <span className="flex-1">{group.time}</span>
              <span style={{ color: "#666", fontSize: "0.625rem" }}>
                {" "}
                {/* Adjusted font size to 10px */}
                Created on: {group.createdOn}
              </span>
            </div>
          </div>
        </div>

        {/* Items Summary Section */}
        <Box
          sx={{
            bgcolor: "white", // White background for this section
            borderRadius: "8px",
            padding: "0.75rem 1rem",
            marginBottom: "1rem",
            boxShadow: "0px 2px 5px rgba(0,0,0,0.05)", // Lighter shadow
            border: "1px solid #E0E0E0", // Subtle border
          }}
        >
          <div
            className="flex items-center justify-between font-medium overflow-x-auto whitespace-nowrap"
            style={{ fontSize: "0.75rem" }}
          >
            {" "}
            {/* Adjusted font size to 12px */}
            <span style={{ color: "#666", flexShrink: 0 }}>Items:</span>
            <div className="flex items-center space-x-3 flex-shrink-0">
              {" "}
              {/* Reduced space-x */}
              <div className="flex items-center space-x-1" style={{ color: "#333" }}>
                <Package className="w-3 h-3" />
                <span>{group.items} Items</span>
              </div>
              <div className="flex items-center space-x-1" style={{ color: "#22C55E" }}>
                <PackageCheck className="w-3 h-3" />
                <span>{group.taken} taken</span>
              </div>
              <div className="flex items-center space-x-1" style={{ color: "#EF4444" }}>
                <PackageX className="w-3 h-3" />
                <span>{group.cancelled} Cancelled</span>
              </div>
            </div>
          </div>
        </Box>

        {/* Participants and Actions */}
        <div className="flex items-center justify-between overflow-x-auto whitespace-nowrap">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="flex -space-x-2">
              {group.participants.slice(0, 3).map((participant, index) => (
                <Avatar
                  key={index}
                  src={`/placeholder.svg?height=24&width=24&text=${participant.charAt(0)}`} // Placeholder avatars
                  alt={participant}
                  sx={{
                    width: 22, // Reduced avatar size
                    height: 22, // Reduced avatar size
                    border: "2px solid #F8F0E3", // Border matches card background
                    bgcolor: "#8B5CF6", // Purple fallback background
                    fontSize: "0.6rem", // Reduced font size for initials
                    color: "white",
                  }}
                />
              ))}
              {group.moreParticipants > 0 && (
                <Avatar
                  sx={{
                    width: 22, // Reduced avatar size
                    height: 22, // Reduced avatar size
                    border: "2px solid #F8F0E3",
                    bgcolor: "#FFD700", // Golden background for +more
                    fontSize: "0.6rem", // Reduced font size for +more
                    color: "#333", // Dark text for +more
                  }}
                >
                  +{group.moreParticipants}
                </Avatar>
              )}
            </div>
            <span style={{ fontSize: "0.75rem", color: "#666" }}>
              {" "}
              {/* Adjusted font size to 12px */}
              {group.participants.join(", ")} {group.moreParticipants > 0 && `+${group.moreParticipants} more`}
            </span>
          </div>
          <div className="flex items-center space-x-2 flex-shrink-0">
            {" "}
            {/* Reduced space-x */}
            <Edit className="w-4 h-4 cursor-pointer" style={{ color: "#666" }} />
            <Trash2 className="w-4 h-4 cursor-pointer" style={{ color: "#666" }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

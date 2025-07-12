"use client";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box"; // Import Box for positioning
import {
  Heart,
  Rss,
  Users,
  ShoppingBag,
  MapPin,
  Globe,
  Settings,
  LogOut,
  Edit,
  ChevronRight,
  Camera,
} from "lucide-react"; // Import Camera and Bell

export function ProfileSection() {
  const profileOptions = [
    { icon: Heart, label: "Saved", hasChevron: true },
    { icon: Rss, label: "My lists", hasChevron: true },
    { icon: Users, label: "My groups", hasChevron: true },
    { icon: ShoppingBag, label: "Shops", hasChevron: true }, // Changed Home to ShoppingBag for Shops
    { icon: MapPin, label: "Location", hasChevron: true },
    { icon: Globe, label: "Language", hasChevron: true },
    { icon: Settings, label: "Settings", hasChevron: true },
    { icon: LogOut, label: "Log Out", hasChevron: true }, // Log Out also has chevron in image
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Profile Info Section */}
      <div className="flex items-start py-8 px-4">
        <Box
          sx={{ position: "relative", marginRight: "1.5rem", flexShrink: 0 }}
        >
          {" "}
          {/* Added marginRight and flexShrink */}
          <Avatar
            src={"/images/profile-avatar.png"}
            alt="Koyal Mathew"
            sx={{
              width: 120,
              height: 120,
              bgcolor: "#FFD700",
              border: "3px solid #FFD700",
              boxSizing: "border-box",
              fontSize: "2rem",
            }}
          >
            KM
          </Avatar>
          {/* Camera Icon Overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              bgcolor: "white",
              borderRadius: "50%",
              padding: "0.3rem",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Camera className="w-5 h-5 text-gray-600" />
          </Box>
        </Box>
        <div className="flex flex-col items-start">
          {" "}
          {/* New container for text and button */}
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Koyal Mathew
          </h2>
          <p className="text-gray-500 mb-4">@koyalmathew123.com</p>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFD700",
              color: "#333",
              textTransform: "none",
              padding: "0.5rem 1.5rem",
              borderRadius: "8px",
              boxShadow: "none",
              "&:hover": { bgcolor: "#E6B800", boxShadow: "none" },
            }}
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Options List Section */}
      <div className="space-y-0">
        {profileOptions.map((option, index) => (
          <Button
            key={index}
            variant="text"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              height: "3.5rem", // Taller buttons
              color: "#333", // Dark text
              bgcolor: "white", // White background for each option
              borderBottom:
                index < profileOptions.length - 1
                  ? "1px solid #E0E0E0"
                  : "none", // Thin gray line
              borderRadius: "0", // No border radius for individual buttons
              paddingX: "1.5rem", // Horizontal padding
              "&:hover": { bgcolor: "#F5F5F5" }, // Subtle hover effect
            }}
          >
            <div className="flex items-center space-x-4">
              <option.icon className="w-6 h-6 text-gray-600" />{" "}
              {/* Darker icons */}
              <span className="text-base">{option.label}</span>{" "}
              {/* Larger text */}
            </div>
            {option.hasChevron && (
              <ChevronRight className="w-6 h-6 text-gray-500" />
            )}{" "}
            {/* Darker chevron */}
          </Button>
        ))}
      </div>
    </div>
  );
}

"use client";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Home, Heart, Plus, Rss, User, X } from "lucide-react";

export function BottomNavigation({
  currentSection,
  setCurrentSection,
  setShowCreateMenu,
  showCreateMenu,
}) {
  const navigationItems = [
    { key: "home", icon: Home, label: "Home" },
    { key: "saved", icon: Heart, label: "Saved" },
    { key: "create", icon: Plus, label: "Create New" }, // Default icon is Plus
    { key: "feeds", icon: Rss, label: "Feeds" },
    { key: "profile", icon: User, label: "Profile" },
  ];

  const handleNavigation = (item) => {
    if (item.key === "create") {
      setShowCreateMenu(!showCreateMenu); // Toggle the menu
    } else {
      setCurrentSection(item.key);
      setShowCreateMenu(false); // Close create menu if navigating elsewhere
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2 px-4">
        {navigationItems.map((item) => {
          const isActive = currentSection === item.key;
          const isCreateButton = item.key === "create";
          const IconComponent =
            isCreateButton && showCreateMenu ? X : item.icon;

          if (isCreateButton) {
            return (
              <Box
                key={item.key}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "auto",
                  zIndex: 9999,
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    padding: "0",
                    height: "60px",
                    width: "60px",
                    minWidth: "auto",
                    borderRadius: "50%",
                    backgroundColor: "#FFD700",
                    // backgroundColor: showCreateMenu ? "#FFD700" : "transparent",
                    border: "2px solid white",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    color: showCreateMenu ? "#1F2937" : "#6B7280",
                    "&:hover": {
                      backgroundColor: showCreateMenu ? "#E6B800" : "#FFC100",
                      color: showCreateMenu ? "#1F2937" : "#1F2937",
                    },
                    transition:
                      "background-color 0.3s, color 0.3s, transform 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative", // For the elevation
                    top: "-30px", // This lifts only the button
                  }}
                  onClick={() => handleNavigation(item)}
                >
                  <IconComponent
                    className="h-6 w-6"
                    style={{
                      color: showCreateMenu ? "#1F2937" : "#6B7280",
                      fill: showCreateMenu ? "#1F2937" : "none",
                    }}
                  />
                </Button>
                <span
                  className="text-xs"
                  style={{
                    color: showCreateMenu ? "#1F2937" : "#6B7280",
                    marginTop: "-20px", // Pull the text up closer to the button
                  }}
                >
                  {item.label}
                </span>
              </Box>
            );
          } else {
            return (
              <Button
                key={item.key}
                variant="text"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.25rem",
                  padding: "0.5rem",
                  height: "auto",
                  width: "auto",
                  minWidth: "auto",
                  textTransform: "none",
                  borderRadius: "0",
                  backgroundColor: "transparent",
                  color: isActive ? "#1F2937" : "#6B7280",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#1F2937",
                  },
                  transition:
                    "background-color 0.3s, color 0.3s, transform 0.3s",
                }}
                onClick={() => handleNavigation(item)}
              >
                <IconComponent
                  className="h-6 w-6"
                  style={{
                    color: isActive ? "#1F2937" : "#6B7280",
                    fill: isActive ? "#1F2937" : "none",
                  }}
                />
                <span className="text-xs">{item.label}</span>
              </Button>
            );
          }
        })}
      </div>
    </div>
  );
}

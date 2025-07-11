"use client"
import Button from "@mui/material/Button"
import { Home, Heart, Plus, Rss, User, X } from "lucide-react" // Import X

export function BottomNavigation({ currentSection, setCurrentSection, setShowCreateMenu, showCreateMenu }) {
  const navigationItems = [
    { key: "home", icon: Home, label: "Home" },
    { key: "saved", icon: Heart, label: "Saved" },
    { key: "create", icon: Plus, label: "Create New" }, // Default icon is Plus
    { key: "feeds", icon: Rss, label: "Feeds" },
    { key: "profile", icon: User, label: "Profile" },
  ]

  const handleNavigation = (item) => {
    if (item.key === "create") {
      setShowCreateMenu(!showCreateMenu) // Toggle the menu
    } else {
      setCurrentSection(item.key)
      setShowCreateMenu(false) // Close create menu if navigating elsewhere
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2 px-4">
        {navigationItems.map((item) => {
          const isActive = currentSection === item.key
          const isCreateButton = item.key === "create"
          const IconComponent = isCreateButton && showCreateMenu ? X : item.icon // Toggle icon for create button

          return (
            <Button
              key={item.key}
              variant="text"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.25rem",
                padding: isCreateButton ? "0" : "0.5rem",
                height: isCreateButton ? "60px" : "auto",
                width: isCreateButton ? "60px" : "auto",
                minWidth: "auto",
                textTransform: "none",
                borderRadius: isCreateButton ? "50%" : "0",
                backgroundColor: isCreateButton && showCreateMenu ? "#FFD700" : "transparent", // Golden when X is shown
                border: isCreateButton ? "2px solid white" : "none",
                boxShadow: isCreateButton ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
                position: isCreateButton ? "relative" : "static",
                top: isCreateButton ? "-15px" : "0",
                color: isCreateButton && showCreateMenu ? "#1F2937" : isActive ? "#1F2937" : "#6B7280", // Dark text for X button
                "&:hover": {
                  backgroundColor: isCreateButton && showCreateMenu ? "#E6B800" : "transparent",
                  color: isCreateButton && showCreateMenu ? "#1F2937" : "#1F2937",
                },
                transition: "background-color 0.3s, color 0.3s, transform 0.3s",
              }}
              onClick={() => handleNavigation(item)}
            >
              <IconComponent
                className="h-6 w-6"
                style={{
                  color: isCreateButton && showCreateMenu ? "#1F2937" : isActive ? "#1F2937" : "#6B7280",
                  fill: isActive && !isCreateButton ? "#1F2937" : "none",
                }}
              />
              {/* Show label for all buttons, including the create button */}
              <span className="text-xs">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

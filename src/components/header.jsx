"use client";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import {
  Bell,
  ShoppingCart,
  ClipboardList,
  Users,
  ShoppingBag,
} from "lucide-react";

export function Header({ currentSection, currentTab, setCurrentTab }) {
  return (
    <div className="px-4 pb-0 pt-4 sm:px-6" style={{ backgroundColor: "#1A1A1A" }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Avatar
            src={"/images/home-design.png"} // Using the provided image for the avatar
            alt="Koyal Mathew"
            sx={{
              width: 56,
              height: 56,
              bgcolor: "transparent", // Make avatar background transparent
              border: "2px dotted #FEE39A", // Golden border
              boxSizing: "border-box", // Include padding and border in the element's total width and height
            }}
          >
            {/* Fallback initials if image fails to load */}
            KM
          </Avatar>
          <div>
            <p className="text-gray-400 text-sm">Welcome,</p>
            <h1
              className="text-lg sm:text-xl font-semibold"
              style={{ color: "#FEE39A" }}
            >
              Koyal Mathew
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40, // Adjust size for the circular outline
              height: 40,
              borderRadius: "50%",
              border: "1px solid #FEE39A", // Golden circular outline
              boxShadow: "0 0 5px #FEE39A", // Subtle golden glow
            }}
          >
            <Badge
              badgeContent={3}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  minWidth: "20px",
                  height: "20px",
                  borderRadius: "9999px",
                  padding: "0",
                  fontSize: "0.75rem",
                  top: 0, // Adjust badge position
                  right: 0,
                },
              }}
            >
              <Bell className="h-6 w-6" style={{ color: "#FEE39A" }} />{" "}
              {/* Golden bell icon */}
            </Badge>
          </Box>
        </div>
      </div>

      {currentSection === "home" && (
        <div className="flex justify-around bg-transparent rounded-lg p-1 mb-6">
          {[
            {
              key: "all",
              icon: ShoppingCart,
              label: "All", // Added label
            },
            {
              key: "lists",
              icon: ClipboardList,
              label: "Lists", // Added label
            },
            {
              key: "groups",
              icon: Users,
              label: "Groups", // Added label
            },
            {
              key: "shops",
              icon: ShoppingBag,
              label: "Shops", // Added label
            },
          ].map((tab) => (
            <Button
              key={tab.key}
              variant="text"
              sx={{
                flexGrow: 1,
                textTransform: "none",
                fontSize: "0.875rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem",
                backgroundColor: "transparent", // No background for tabs
                color: "#FEE39A", // Golden text for all tabs
                "&:hover": {
                  backgroundColor: "transparent", // No background change on hover
                  color: "#FEE39A", // Keep golden on hover
                },
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                position: "relative",
                overflow: "hidden",
              }}
              onClick={() => setCurrentTab(tab.key)}
            >
              <tab.icon className="h-5 w-5" style={{ color: "#FEE39A" }} />{" "}
              {/* Golden icons for all tabs */}
              <span className="text-xs">{tab.label}</span>{" "}
              {/* Re-added the text label */}
              {/* Underline element */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "3px", // Thickness of the underline
                  backgroundColor: "#FEE39A", // Golden color
                  transform: currentTab === tab.key ? "scaleX(1)" : "scaleX(0)", // Visible if active, hidden if inactive
                  transformOrigin: "bottom center",
                  transition: "transform 0.2s ease-in-out", // Smooth transition
                }}
              />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

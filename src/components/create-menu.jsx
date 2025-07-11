"use client"
import React from "react"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { Users, ClipboardList, ShoppingBag } from "lucide-react" // X is no longer needed here

export function CreateMenu({ showCreateMenu, setShowCreateMenu, setCreateScreen }) {
  const [animate, setAnimate] = React.useState(false)

  React.useEffect(() => {
    if (showCreateMenu) {
      const timer = setTimeout(() => setAnimate(true), 50)
      return () => clearTimeout(timer)
    } else {
      setAnimate(false)
    }
  }, [showCreateMenu])

  const menuItems = [
    { key: "group", label: "New Group", icon: Users, angle: 90 }, // Top
    { key: "list", label: "New List", icon: ClipboardList, angle: 180 }, // Left
    { key: "shop", label: "New Shop", icon: ShoppingBag, angle: 0 }, // Right
  ]

  const handleMenuClick = (screenKey) => {
    setAnimate(false) // Start closing animation
    setTimeout(() => {
      setCreateScreen(screenKey)
      setShowCreateMenu(false)
    }, 300) // Delay to allow animation to play
  }

  const radius = 120 // Distance from center
  const buttonSize = 100 // Size of the radial buttons

  return (
    <Box
      sx={{
        position: "absolute", // Will be positioned by parent (app/page.jsx)
        width: "1px", // A tiny point for the origin
        height: "1px",
        pointerEvents: showCreateMenu ? "auto" : "none", // Allow clicks only when visible
        opacity: showCreateMenu ? 1 : 0, // Control overall visibility
        transition: "opacity 0.3s ease-out",
      }}
    >
      {/* Radial menu items */}
      {menuItems.map((item) => {
        const angleRad = (item.angle * Math.PI) / 180
        const x = radius * Math.cos(angleRad)
        const y = radius * Math.sin(angleRad)

        return (
          <Button
            key={item.key}
            variant="text"
            sx={{
              position: "absolute",
              // Position relative to the 1x1px Box's center
              transform: animate ? `translate(${x}px, ${-y}px)` : `translate(0px, 0px)`,
              opacity: animate ? 1 : 0,
              width: buttonSize,
              height: buttonSize,
              minWidth: "auto",
              backgroundColor: "#B8860B", // Darker golden/brownish color for blobs
              color: "white", // White icon and text
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
              textTransform: "none",
              fontSize: "0.875rem",
              borderRadius: "60% 40% 70% 30% / 30% 70% 40% 60%", // Blob shape simulation
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                backgroundColor: "#A0780A", // Slightly darker on hover
              },
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
              // Adjust for button's own size to center it around the calculated point
              marginLeft: `-${buttonSize / 2}px`,
              marginTop: `-${buttonSize / 2}px`,
            }}
            onClick={() => handleMenuClick(item.key)}
          >
            <item.icon className="h-8 w-8 mb-1" />
            <span>{item.label}</span>
          </Button>
        )
      })}
    </Box>
  )
}

"use client";
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Users, ClipboardList, ShoppingBag } from "lucide-react";

// New component for the SVG shape
function RadialButtonShape({ fill, stroke, strokeWidth }) {
  return (
    <svg
      width="111"
      height="70"
      viewBox="0 0 111 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <mask id="path-1-inside-1_45_670" fill="white">
        <path d="M108.326 25.8818C111.42 21.3071 110.239 15.0424 105.385 12.4084C89.8886 3.99953 72.4297 -0.297502 54.6889 0.0160102C36.9481 0.329522 19.652 5.24074 4.46213 14.1919C-0.29602 16.9958 -1.2544 23.2983 1.99963 27.7607L29.6169 65.6338C32.8709 70.0962 39.1155 70.9158 44.3047 69.0253C47.9931 67.6816 51.8997 66.9488 55.8705 66.8786C59.8413 66.8084 63.7714 67.4028 67.5049 68.6153C72.7577 70.3213 78.9694 69.2815 82.0637 64.7069L108.326 25.8818Z" />
      </mask>
      <path
        d="M108.326 25.8818C111.42 21.3071 110.239 15.0424 105.385 12.4084C89.8886 3.99953 72.4297 -0.297502 54.6889 0.0160102C36.9481 0.329522 19.652 5.24074 4.46213 14.1919C-0.29602 16.9958 -1.2544 23.2983 1.99963 27.7607L29.6169 65.6338C32.8709 70.0962 39.1155 70.9158 44.3047 69.0253C47.9931 67.6816 51.8997 66.9488 55.8705 66.8786C59.8413 66.8084 63.7714 67.4028 67.5049 68.6153C72.7577 70.3213 78.9694 69.2815 82.0637 64.7069L108.326 25.8818Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        mask="url(#path-1-inside-1_45_670)"
      />
    </svg>
  );
}

export function CreateMenu({
  showCreateMenu,
  setShowCreateMenu,
  setCreateScreen,
}) {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    if (showCreateMenu) {
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [showCreateMenu]);

  const menuItems = [
    { key: "group", label: "New Group", icon: Users, angle: 90, rotate: 0 }, // Top
    {
      key: "list",
      label: "New List",
      icon: ClipboardList,
      angle: 150,
      rotate: -65,
    }, // Left-bottom
    {
      key: "shop",
      label: "New Shop",
      icon: ShoppingBag,
      angle: 30,
      rotate: 65,
    }, // Right-bottom
  ];

  const handleMenuClick = (screenKey) => {
    setAnimate(false); // Start closing animation
    setTimeout(() => {
      setCreateScreen(screenKey);
      setShowCreateMenu(false);
    }, 300); // Delay to allow animation to play
  };

  const radius = 100; // Adjusted distance from center
  const buttonWidth = 111; // SVG width
  const buttonHeight = 70; // SVG height

  return (
    <Box
      sx={{
        position: "absolute",
        width: "1px",
        height: "1px",
        pointerEvents: showCreateMenu ? "auto" : "none",
        opacity: showCreateMenu ? 1 : 0,
        transition: "opacity 0.3s ease-out",
      }}
    >
      {/* Radial menu items */}
      {menuItems.map((item) => {
        const angleRad = (item.angle * Math.PI) / 180;
        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad);

        return (
          <Button
            key={item.key}
            variant="text"
            sx={{
              position: "absolute",
              transform: animate
                ? `translate(${x}px, ${-y}px) rotate(${item.rotate}deg)`
                : `translate(0px, 0px) rotate(0deg)`,
              opacity: animate ? 1 : 0,
              width: buttonWidth,
              height: buttonHeight,
              minWidth: "auto",
              backgroundColor: "transparent",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0",
              textTransform: "none",
              fontSize: "0.875rem",
              borderRadius: "0",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
              marginLeft: `-${buttonWidth / 2}px`,
              marginTop: `-${buttonHeight / 2}px`,
            }}
            onClick={() => handleMenuClick(item.key)}
          >
            <RadialButtonShape fill="#BA9C49" stroke="black" strokeWidth="2" />
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // Counter-rotate the content so it remains upright
                transform: `rotate(${-item.rotate}deg)`,
                "& span": {
                  fontSize: "0.7rem",
                  lineHeight: 1.2,
                  marginTop: "0.1rem",
                },
                "& svg": {
                  height: "24px",
                  width: "24px",
                  marginBottom: "0.1rem",
                },
              }}
            >
              <item.icon className="h-8 w-8 mb-1" />
              <span>{item.label}</span>
            </Box>
          </Button>
        );
      })}
    </Box>
  );
}

"use client";
import { useState, useEffect } from "react"; // Import useState and useEffect
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { MapPin } from "lucide-react";
import home from "../assets/images/home.png";
export function FeaturedShopCarousel() {
  const featuredShopsData = [
    {
      id: 1,
      name: "Fresh Basket",
      location: "15km Away",
      description: "Your daily dose of freshness, handpick...",
      image: home,
    },
    {
      id: 2,
      name: "Green Grocer",
      location: "5km Away",
      description: "Organic produce delivered to your door...",
      image: home, // Placeholder for another shop image
    },
    {
      id: 3,
      name: "Urban Farm",
      location: "8km Away",
      description: "Farm-fresh vegetables and fruits daily...",
      image: home, // Placeholder for another shop image
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = featuredShopsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [totalSlides]);

  const currentFeaturedShop = featuredShopsData[currentSlide];

  return (
    <div className="flex flex-col items-center">
      <Card
        key={currentFeaturedShop.id} // Add key to force re-render for smooth transition
        sx={{
          background: "#F8F0E3", // Light beige background
          border: "none",
          borderRadius: "12px", // Rounded corners
          color: "#4A148C", // Dark purple text for main elements
          width: "100%", // Take full width of parent
          maxWidth: "1440px", // Max width for larger screens
          marginX: "1rem",
          display: "flex", // Use flexbox for layout
          alignItems: "center", // Vertically align items
          padding: "1rem", // Padding inside the card
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Subtle shadow
          transition: "opacity 0.5s ease-in-out", // Smooth fade transition
          opacity: 1, // Initial opacity
        }}
      >
        {/* Left Section: Image */}
        <Box
          sx={{
            flexShrink: 0, // Prevent image from shrinking
            width: "120px", // Fixed width for the image container
            height: "100px", // Fixed height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "1rem",
          }}
        >
          <img
            src={currentFeaturedShop.image || "/placeholder.svg"}
            alt={currentFeaturedShop.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Ensure the image fits without cropping
            }}
          />
        </Box>

        {/* Right Section: Text Content */}
        <CardContent
          sx={{
            padding: "0",
            flexGrow: 1,
            "&:last-child": { paddingBottom: "0" },
          }}
        >
          <Chip
            label="New Shop Available!"
            size="small"
            sx={{
              bgcolor: "#673AB7", // Dark purple for chip
              color: "white",
              marginBottom: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: "bold",
              borderRadius: "4px", // Slightly rounded chip
            }}
          />
          <h3 className="text-lg font-bold mb-1" style={{ color: "#4A148C" }}>
            {currentFeaturedShop.name}
            <span
              className="inline-flex items-center ml-2 text-sm"
              style={{ color: "#7B1FA2" }}
            >
              <MapPin className="h-3 w-3 mr-1" style={{ color: "#D32F2F" }} />{" "}
              {/* Red map pin */}
              {currentFeaturedShop.location}
            </span>
          </h3>
          <p className="text-sm opacity-80 mb-3" style={{ color: "#7B1FA2" }}>
            {currentFeaturedShop.description}
          </p>
          <Button
            variant="text"
            size="small"
            sx={{
              color: "#4A148C", // Dark purple text
              textTransform: "none",
              padding: "0",
              minWidth: "auto",
              "&:hover": {
                bgcolor: "transparent",
                textDecoration: "underline", // Underline on hover
              },
              textDecoration: "underline", // Always underlined
              fontWeight: "bold",
            }}
          >
            View Products
          </Button>
        </CardContent>
      </Card>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: index === currentSlide ? "#FFD700" : "#FFECB3", // Golden for active, lighter golden for inactive
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

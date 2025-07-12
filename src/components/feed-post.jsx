"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Heart, Send, MapPin, MoreHorizontal } from "lucide-react";
import img1 from "../assets/images/locally.png";

export function FeedPost({ post, isLiked, onToggleLike }) {
  const displayLikedBy = post.likedBy.slice(0, 2); // Show first two likers
  const remainingLikes = post.likes - displayLikedBy.length;

  return (
    <Card
      sx={{
        bgcolor: "white",
        borderColor: "transparent",
        border: "none",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <CardContent sx={{ padding: "0" }}>
        {/* Header Section */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar
              src={img1}
              alt={post.username}
              sx={{
                width: 48,
                height: 48,
                bgcolor: "#8B5CF6",
                border: "1px solid #E0E0E0",
              }}
            >
              {post.username.charAt(1).toUpperCase()}
            </Avatar>
            <div>
              <p className="font-semibold text-gray-800 text-base">
                {post.username}
              </p>
              <p className="text-sm text-gray-500">{post.storeName}</p>
            </div>
          </div>
          <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>

        {/* Post Image Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 250, sm: 300, md: 350 },
            overflow: "hidden",
          }}
        >
          <img
            src={img1 || "/placeholder.svg"}
            alt="Post"
            className="w-full h-full object-cover"
            style={{ borderRadius: "0" }}
          />
          {/* Overlay for gradient and buttons */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "1rem",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 50%)", // Dark gradient from bottom
            }}
          >
            {/* Heart and Send Icons */}
            <div className="flex items-center space-x-4 mb-4">
              <Heart
                className={`w-6 h-6 cursor-pointer transition-colors`}
                onClick={() => onToggleLike(post.id, "post", post)}
                style={{ fill: isLiked ? "#EF4444" : "none", stroke: "white" }} // White stroke, red fill if liked
              />
              <Send className="w-6 h-6 text-white cursor-pointer" />{" "}
              {/* White send icon */}
            </div>

            {/* View Store on Map Button Overlay */}
            <Button
              variant="contained"
              sx={{
                position: "absolute", // Position relative to the Box overlay
                bottom: "1rem",
                right: "1rem",
                bgcolor: "#FFD700", // Golden background
                color: "#333", // Dark text
                textTransform: "none",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
                "&:hover": {
                  bgcolor: "#E6B800", // Slightly darker golden on hover
                },
              }}
            >
              <MapPin className="w-4 h-4 mr-2" />
              View Store on Map
            </Button>
          </Box>
        </Box>

        {/* Liked by Avatars and Text */}
        <div className="p-4">
          <div className="flex items-center mb-3">
            <div className="flex -space-x-1 mr-2">
              {displayLikedBy.map((liker, index) => (
                <Avatar
                  key={index}
                  src={`/placeholder.svg?height=24&width=24&text=${liker
                    .charAt(0)
                    .toUpperCase()}`}
                  alt={liker}
                  sx={{
                    width: 24,
                    height: 24,
                    border: "1.5px solid white",
                    bgcolor: "#8B5CF6",
                    fontSize: "0.75rem",
                    color: "white",
                  }}
                />
              ))}
              {remainingLikes > 0 && (
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    border: "1.5px solid white",
                    bgcolor: "#E0E0E0",
                    fontSize: "0.75rem",
                    color: "#666",
                  }}
                >
                  +{remainingLikes}
                </Avatar>
              )}
            </div>
            <p className="text-sm text-gray-600">
              Liked by{" "}
              <span className="font-semibold text-gray-800">
                {displayLikedBy.join(", ")}
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-800">
                {remainingLikes > 0 ? `${remainingLikes} more` : ""}
              </span>
            </p>
          </div>
          {/* Caption and Hashtags */}
          <p className="text-gray-800 text-sm mb-2">{post.caption}</p>
          <p className="text-purple-600 text-sm">{post.hashtags}</p>
          <p className="text-gray-500 text-xs mt-2">{post.timeAgo}</p>{" "}
          {/* Moved timeAgo here */}
        </div>
      </CardContent>
    </Card>
  );
}

"use client";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { ChevronLeft, Heart, MapPin } from "lucide-react";

export function PostDetail({ post, onBack }) {
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Post not found.</p>
        <Button onClick={onBack} sx={{ color: "white" }}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex items-center p-4 border-b border-gray-700">
        <Button
          variant="text"
          onClick={onBack}
          sx={{
            minWidth: "auto",
            padding: "0.5rem",
            color: "white",
            marginRight: "0.75rem",
          }}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Post Details</h1>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-3">
          <Avatar
            src={post.avatar || "/placeholder.svg"}
            alt={post.username}
            sx={{ width: 56, height: 56, bgcolor: "#8B5CF6" }}
          >
            {post.username.charAt(1).toUpperCase()}
          </Avatar>
          <div>
            <p className="font-semibold text-white text-lg">{post.username}</p>
            <p className="text-sm text-gray-400">{post.storeName}</p>
          </div>
        </div>

        <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt="Post"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />{" "}
            {/* Assuming it's liked if in saved */}
            <MapPin className="w-6 h-6 text-gray-400" />
          </div>
          <span className="text-sm text-gray-400">{post.timeAgo}</span>
        </div>

        <p className="text-sm text-gray-400">
          Liked by{" "}
          <span className="font-semibold">{post.likedBy.join(", ")}</span> and{" "}
          <span className="font-semibold">
            {post.likes - post.likedBy.length} more
          </span>
        </p>

        <p className="text-white text-base">{post.caption}</p>
        <p className="text-purple-400 text-sm">{post.hashtags}</p>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            bgcolor: "transparent",
            borderColor: "#8B5CF6",
            color: "#A78BFA",
            textTransform: "none",
            marginTop: "1rem",
            "&:hover": {
              bgcolor: "#8B5CF6",
              color: "white",
              borderColor: "#8B5CF6",
            },
          }}
        >
          View Store on Map
        </Button>
      </div>
    </div>
  );
}

"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import { Heart, MapPin } from "lucide-react"

export function FeedPost({ post, isLiked, onToggleLike }) {
  return (
    <Card sx={{ bgcolor: "#1F2937", borderColor: "#374151", border: "1px solid" }}>
      <CardContent sx={{ padding: "0" }}>
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-3">
            <Avatar
              src={post.avatar || "/placeholder.svg"}
              alt={post.username}
              sx={{ width: 40, height: 40, bgcolor: "#8B5CF6" }}
            >
              {post.username.charAt(1).toUpperCase()}
            </Avatar>
            <div>
              <p className="font-semibold text-white">{post.username}</p>
              <p className="text-sm text-gray-400">{post.storeName}</p>
            </div>
          </div>
        </div>

        <div className="w-full h-48 bg-gray-700 overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt="Post" className="w-full h-full object-cover" />
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-4">
              <Heart
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  isLiked ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-red-500"
                }`}
                onClick={() => onToggleLike(post.id, "post", post)}
              />
              <MapPin className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-sm text-gray-400">{post.timeAgo}</span>
          </div>

          <p className="text-sm text-gray-400 mb-2">
            Liked by <span className="font-semibold">{post.likedBy.join(", ")}</span> and{" "}
            <span className="font-semibold">{post.likes - post.likedBy.length} more</span>
          </p>

          <Button
            variant="text"
            sx={{
              color: "#A78BFA",
              textTransform: "none",
              padding: "0",
              height: "auto",
              marginBottom: "0.75rem",
              "&:hover": { bgcolor: "transparent", color: "#C4B5FD" },
            }}
          >
            View Store on Map
          </Button>

          <p className="text-white text-sm mb-2">{post.caption}</p>
          <p className="text-purple-400 text-sm">{post.hashtags}</p>
        </div>
      </CardContent>
    </Card>
  )
}

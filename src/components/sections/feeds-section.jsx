"use client";
import { FeedPost } from "../feed-post";
// import img1 from "../../assets/images/locally.png";
import Button from "@mui/material/Button";
import { Plus } from "lucide-react";

export function FeedsSection({
  feedPosts,
  likedPosts,
  toggleLike,
  onNewPostClick,
}) {
  return (
    <div className="space-y-6 pt-2 ">
      <div className="flex justify-center">
        <Button
          // className="justify-center align-center self-center mr-7"
          variant="contained"
          sx={{
            bgcolor: "#8B5CF6", // Purple background
            color: "white",
            textTransform: "none",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            "&:hover": { bgcolor: "#7C3AED" },
          }}
          onClick={onNewPostClick} // Call the new prop on click
        >
          <Plus className="h-5 w-5 mr-2" />
          New Post
        </Button>
      </div>

      {feedPosts.map((post) => (
        <FeedPost
          className="border-r-8"
          key={post.id}
          post={post} // this i img set static
          isLiked={likedPosts.has(post.id)}
          onToggleLike={toggleLike}
        />
      ))}
    </div>
  );
}

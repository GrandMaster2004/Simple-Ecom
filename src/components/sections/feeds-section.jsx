"use client"
import { FeedPost } from "../feed-post"

export function FeedsSection({ feedPosts, likedPosts, toggleLike }) {
  return (
    <div className="space-y-6">
      {feedPosts.map((post) => (
        <FeedPost key={post.id} post={post} isLiked={likedPosts.has(post.id)} onToggleLike={toggleLike} />
      ))}
    </div>
  )
}

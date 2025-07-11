"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import { Heart } from "lucide-react"

export function ShopCard({ shop, isLiked, onToggleLike, onShopClick }) {
  return (
    <Card sx={{ bgcolor: "#1F2937", borderColor: "#374151", border: "1px solid", "&:hover": { bgcolor: "#374151" } }}>
      <CardContent sx={{ padding: "1rem" }}>
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
            <img src={shop.image || "/placeholder.svg"} alt={shop.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <Chip
                  label={shop.category}
                  size="small"
                  sx={{ bgcolor: "#8B5CF6", color: "white", marginBottom: "0.25rem", fontSize: "0.75rem" }}
                />
                <h3
                  className="font-semibold text-white mb-1 cursor-pointer hover:text-purple-400"
                  onClick={() => onShopClick(shop)}
                >
                  {shop.name}
                </h3>
                <p className="text-sm text-gray-400">{shop.location}</p>
              </div>
              <Heart
                className={`w-5 h-5 cursor-pointer transition-colors ${
                  isLiked ? "text-red-500 fill-red-500" : "text-gray-400 hover:text-red-500"
                }`}
                onClick={() => onToggleLike(shop.id, "shop", shop)}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

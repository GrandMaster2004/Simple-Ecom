"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { ChevronLeft } from "lucide-react"

export function ShopDetail({ onBack }) {
  const categories = [
    { name: "Vegetables", image: "🥬", active: true },
    { name: "Fruits", image: "🍎", active: false },
    { name: "Dairy & Eggs", image: "🥛", active: false },
    { name: "Bakery", image: "🍞", active: false },
    { name: "Beverages", image: "🥤", active: false },
  ]

  const vegetables = [
    { name: "Tomato", image: "🍅" },
    { name: "Carrot", image: "🥕" },
    { name: "Potato", image: "🥔" },
    { name: "Spinach", image: "🥬" },
    { name: "Pumpkin", image: "🎃" },
    { name: "Bitter Gourd", image: "🥒" },
    { name: "Bringal", image: "🍆" },
    { name: "Cauliflower", image: "🥦" },
    { name: "Capsicum", image: "🫑" },
    { name: "Cabbage", image: "🥬" },
    { name: "Onion", image: "🧅" },
    { name: "Broccoli", image: "🥦" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex items-center p-4 border-b border-gray-700">
        <Button
          variant="text"
          onClick={onBack}
          sx={{ minWidth: "auto", padding: "0.5rem", color: "white", marginRight: "0.75rem" }}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">The Green Cart</h1>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "contained" : "outlined"}
              sx={{
                flexShrink: 0,
                textTransform: "none",
                bgcolor: category.active ? "#8B5CF6" : "transparent",
                color: category.active ? "white" : "#9CA3AF",
                borderColor: category.active ? "#8B5CF6" : "#4B5563",
                "&:hover": {
                  bgcolor: category.active ? "#7C3AED" : "rgba(167, 139, 250, 0.08)",
                  borderColor: "#A78BFA",
                },
              }}
            >
              <span className="mr-2">{category.image}</span>
              {category.name}
            </Button>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4">Vegetables</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {vegetables.map((vegetable) => (
            <Card key={vegetable.name} sx={{ bgcolor: "#1F2937", borderColor: "#374151", border: "1px solid" }}>
              <CardContent sx={{ padding: "1rem", textAlign: "center" }}>
                <div className="text-4xl mb-2">{vegetable.image}</div>
                <p className="text-sm text-white">{vegetable.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

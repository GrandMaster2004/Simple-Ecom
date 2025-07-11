"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import { ChevronLeft, Plus } from "lucide-react"

export function ListDetail({ items, title, onBack }) {
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
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>

      <div className="p-4 pb-24">
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} sx={{ bgcolor: "#1F2937", borderColor: "#374151", border: "1px solid" }}>
              <CardContent sx={{ padding: "1rem" }}>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-400 mb-1">{item.brand}</p>
                    <div className="flex space-x-4 text-sm text-gray-400">
                      <span>{item.quantity}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-20 right-4">
        <Button
          variant="contained"
          sx={{
            width: 56,
            height: 56,
            borderRadius: "9999px",
            bgcolor: "#8B5CF6",
            "&:hover": { bgcolor: "#7C3AED" },
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

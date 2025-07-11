"use client"

import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import LinearProgress from "@mui/material/LinearProgress"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Heart } from "lucide-react"

export function SavedSection({ savedItems }) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const tabLabels = ["All", "Lists", "Posts", "Shops"]
  const filteredItems = savedItems.filter((item) => {
    if (value === 0) return true // All
    if (value === 1) return item.type === "list"
    if (value === 2) return item.type === "post"
    if (value === 3) return item.type === "shop"
    return false
  })

  if (savedItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <Heart className="h-16 w-16 text-gray-600 mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">No Saved Items</h3>
        <p className="text-gray-400">Items you save will appear here</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          "& .MuiTabs-indicator": { bgcolor: "#8B5CF6" },
          "& .MuiTab-root": { color: "#9CA3AF", "&.Mui-selected": { color: "white" } },
          bgcolor: "#1F2937",
          borderRadius: "0.5rem",
        }}
      >
        {tabLabels.map((label, index) => (
          <Tab key={label} label={label} sx={{ flexGrow: 1, textTransform: "none" }} />
        ))}
      </Tabs>

      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} sx={{ bgcolor: "#1F2937", borderColor: "#374151", border: "1px solid" }}>
              <CardContent sx={{ padding: "1rem" }}>
                <div className="flex items-start justify-between mb-3">
                  {item.type === "list" && item.color && (
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-2xl`}>
                      {item.image}
                    </div>
                  )}
                  {item.type === "post" && (
                    <div className="w-12 h-12 bg-gray-700 rounded-lg overflow-hidden">
                      <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  {item.type === "shop" && (
                    <div className="w-12 h-12 bg-gray-700 rounded-lg overflow-hidden">
                      <img src={item.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{item.subtitle}</p>
                {item.type === "list" && item.progress && (
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                    sx={{
                      height: "0.5rem",
                      bgcolor: "#374151",
                      "& .MuiLinearProgress-bar": { bgcolor: "#A78BFA" },
                      marginBottom: "0.75rem",
                    }}
                  />
                )}
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "100%",
                    bgcolor: "transparent",
                    borderColor: "#8B5CF6",
                    color: "#A78BFA",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#8B5CF6",
                      color: "white",
                      borderColor: "#8B5CF6",
                    },
                  }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

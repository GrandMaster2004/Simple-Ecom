"use client"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import { Heart, Rss, Users, Home, MapPin, Globe, Settings, LogOut, Edit, ChevronRight } from "lucide-react"

export function ProfileSection() {
  const profileOptions = [
    { icon: Heart, label: "Saved", hasChevron: true },
    { icon: Rss, label: "My lists", hasChevron: true },
    { icon: Users, label: "My groups", hasChevron: true },
    { icon: Home, label: "Shops", hasChevron: true },
    { icon: MapPin, label: "Location", hasChevron: true },
    { icon: Globe, label: "Language", hasChevron: true },
    { icon: Settings, label: "Settings", hasChevron: true },
    { icon: LogOut, label: "Log Out", hasChevron: false },
  ]

  return (
    <div className="px-4">
      <div className="flex flex-col items-center mb-8">
        <Avatar
          src="/placeholder.svg?height=96&width=96"
          alt="Koyal Mathew"
          sx={{ width: 96, height: 96, marginBottom: "1rem", bgcolor: "#8B5CF6", fontSize: "2rem" }}
        >
          KM
        </Avatar>
        <h2 className="text-xl font-semibold text-white mb-1">Koyal Mathew</h2>
        <p className="text-gray-400 mb-4">@koyalmathew123.com</p>
        <Button variant="contained" sx={{ bgcolor: "#8B5CF6", color: "white", "&:hover": { bgcolor: "#7C3AED" } }}>
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="space-y-1">
        {profileOptions.map((option, index) => (
          <Button
            key={index}
            variant="text"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              height: "3rem",
              color: "white",
              "&:hover": { bgcolor: "#1F2937" },
            }}
          >
            <div className="flex items-center space-x-3">
              <option.icon className="w-5 h-5" />
              <span>{option.label}</span>
            </div>
            {option.hasChevron && <ChevronRight className="w-5 h-5 text-gray-400" />}
          </Button>
        ))}
      </div>
    </div>
  )
}

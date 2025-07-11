"use client"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Avatar from "@mui/material/Avatar"
import { Calendar, Clock } from "lucide-react"

export function GroupCard({ group }) {
  return (
    <Card sx={{ bgcolor: "#1F2937", borderColor: "#374151", border: "1px solid" }}>
      <CardContent sx={{ padding: "1rem" }}>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl">
            {group.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-1">{group.title}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{group.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{group.time}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-3">Created on: {group.createdOn}</p>

            <div className="space-y-2">
              <div className="text-sm text-gray-300">
                <span className="font-medium">Items:</span>
                <div className="ml-2">
                  <div>{group.items} Items</div>
                  <div className="text-green-400">{group.taken} taken</div>
                  <div className="text-red-400">{group.cancelled} Cancelled</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {group.participants.slice(0, 3).map((participant, index) => (
                    <Avatar
                      key={index}
                      sx={{
                        width: 24,
                        height: 24,
                        border: "2px solid #1F2937",
                        bgcolor: "#8B5CF6",
                        fontSize: "0.75rem",
                      }}
                    >
                      {participant.charAt(0)}
                    </Avatar>
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  {group.participants.join(", ")} +{group.moreParticipants} more
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

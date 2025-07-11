"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Calendar, Clock } from "lucide-react";

export function GroupCard({ group }) {
  return (
    <Card sx={{ bgcolor: "#F9F6EC" }}>
      <CardContent sx={{ padding: "1rem" }}>
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-2xl">
            {group.icon}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">Picnic Prep</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>June 5, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>10:30 am</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-2">
              Created on: June 7, 2025
            </p>

            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-600">
                <span>Items: </span>
                <span className="text-gray-600">12 Items</span>
                <span className="text-green-400 ml-2">7 taken</span>
                <span className="text-red-400 ml-2">2 Cancelled</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {["J", "S", "M"].map((initial, index) => (
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
                    {initial}
                  </Avatar>
                ))}
              </div>
              <span className="text-sm text-gray-400">
                John, Sarah, Me +3 more
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Heart } from "lucide-react";
import { SavedItemCard } from "../saved-item-card";

export function SavedSection({ savedItems, onViewItem }) {
  const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue)
  // }

  // const tabLabels = ["All", "Lists", "Posts", "Shops"]
  const filteredItems = savedItems.filter((item) => {
    if (value === 0) return true; // All
    if (value === 1) return item.type === "list";
    if (value === 2) return item.type === "post";
    if (value === 3) return item.type === "shop";
    return false;
  });

  if (savedItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <Heart className="h-16 w-16 text-gray-600 mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">
          No Saved Items
        </h3>
        <p className="text-gray-400">Items you save will appear here</p>
      </div>
    );
  }

  return ( 
    <div className="w-full ">
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {filteredItems.map((item) => (
            <SavedItemCard
              key={item.id}
              savedItem={item}
              onToggleLike={() => {}}
              onView={onViewItem}
            /> // Pass onViewItem
          ))}
        </div>
      </div>
    </div>
  );
}

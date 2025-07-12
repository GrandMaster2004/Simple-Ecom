"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Calendar, Clock } from "lucide-react";
import { ListCard } from "../list-card";
import { ShopCard } from "../shop-card";
import { GroupCard } from "../group-card";
import { FeaturedShopCarousel } from "../featured-shop-carousel";
// import patrick from "../../assets/images/patrick.png";
import Box from "@mui/material/Box";
import { Package, PackageCheck, PackageX, Edit, Trash2 } from "lucide-react";

export function HomeSection({
  currentTab,
  listCategories,
  shops,
  groups,
  likedItems,
  likedShops,
  toggleLike,
  setDetailScreen,
}) {
  const handleListView = (category) => {
    if (category.title === "Daily Fresh Picks") {
      setDetailScreen("daily-picks");
    } else if (category.title === "Picnic Prep") {
      setDetailScreen("picnic"); // Assuming you have a 'picnic' detail screen
    }
  };

  const handleShopClick = (shop) => {
    if (shop.name === "The Green Cart") {
      setDetailScreen("green-cart");
    }
  };

  // Determine which list categories to display based on the current tab
  const listsToDisplay =
    currentTab === "all" ? listCategories.slice(0, 2) : listCategories; // MODIFIED LINE: Show 2 for 'all', all for 'lists'

  if (currentTab === "all" || currentTab === "lists") {
    return (
      <div className="space-y-6">
        {/* Featured Shop Section - Only show carousel on 'All' tab */}
        {currentTab === "all" && <FeaturedShopCarousel />}

        {/* Quick Lists Section */}
        <div className="px-4">
          <h2 className="text-lg font-semibold text-black mb-4">Quick Lists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg">
            {/* Render list categories based on the current tab */}
            {listsToDisplay.map(
              (
                category // MODIFIED LINE: Use listsToDisplay
              ) => (
                <ListCard
                  key={category.id}
                  category={category}
                  isLiked={likedItems.has(category.id)}
                  onToggleLike={toggleLike}
                  onView={handleListView}
                  style={{ backgroundColor: "#F9F6EC" }}
                />
              )
            )}
          </div>
        </div>

        {/* Recent Groups Section - Only show on 'All' tab */}
        {currentTab === "all" && (
          <div className="px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-black">
                Recent Groups
              </h2>
              <Button
                variant="text"
                sx={{
                  color: "#FBBF24",
                  textTransform: "none",
                  padding: "0",
                  height: "auto",
                  "&:hover": { bgcolor: "transparent", color: "#D97706" },
                }}
              >
                View All
              </Button>
            </div>
            <Card
              sx={{
                bgcolor: "#F8F0E3",
                borderColor: "transparent",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                color: "#333",
                width: "100%",
              }}
            >
              <CardContent sx={{ padding: "0.75rem" }}>
                <div className="flex items-start space-x-3 mb-3">
                  <Box
                    component="img"
                    src="/images/group-card-picnic.png"
                    alt="Picnic Day"
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: "8px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[13px] mb-1">
                      Picnic Day
                    </h3>
                    <div
                      className="flex items-center space-x-2 text-[11px] mb-1"
                      style={{ color: "#8B5CF6" }}
                    >
                      <Calendar className="w-3 h-3" />
                      <span>2025-07-20</span>
                    </div>
                    <div
                      className="flex items-center space-x-2 text-[11px]"
                      style={{ color: "#8B5CF6" }}
                    >
                      <Clock className="w-3 h-3" />
                      <span className="flex-1">10:00 AM</span>
                      <span style={{ color: "#666", fontSize: "10px" }}>
                        Created on: 2025-07-01
                      </span>
                    </div>
                  </div>
                </div>

                <Box
                  sx={{
                    bgcolor: "white",
                    borderRadius: "8px",
                    padding: "0.5rem 0.75rem",
                    marginBottom: "0.75rem",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
                    border: "1px solid #E0E0E0",
                  }}
                >
                  <div className="flex items-center justify-between text-[11px] font-medium overflow-x-auto whitespace-nowrap">
                    <span style={{ color: "#666", flexShrink: 0 }}>Items:</span>
                    <div className="flex items-center space-x-3 flex-shrink-0">
                      <div
                        className="flex items-center space-x-1"
                        style={{ color: "#333" }}
                      >
                        <Package className="w-3 h-3" />
                        <span>12</span>
                      </div>
                      <div
                        className="flex items-center space-x-1"
                        style={{ color: "#22C55E" }}
                      >
                        <PackageCheck className="w-3 h-3" />
                        <span>7</span>
                      </div>
                      <div
                        className="flex items-center space-x-1"
                        style={{ color: "#EF4444" }}
                      >
                        <PackageX className="w-3 h-3" />
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                </Box>

                <div className="flex items-center justify-between overflow-x-auto whitespace-nowrap">
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <div className="flex -space-x-2">
                      {["Alice", "Bob", "Carol"].map((name, index) => (
                        <Avatar
                          key={index}
                          src={`/placeholder.svg?height=24&width=24&text=${name.charAt(
                            0
                          )}`}
                          alt={name}
                          sx={{
                            width: 20,
                            height: 20,
                            border: "2px solid #F8F0E3",
                            bgcolor: "#8B5CF6",
                            fontSize: "0.55rem",
                            color: "white",
                          }}
                        />
                      ))}
                      <Avatar
                        sx={{
                          width: 20,
                          height: 20,
                          border: "2px solid #F8F0E3",
                          bgcolor: "#FFD700",
                          fontSize: "0.55rem",
                          color: "#333",
                        }}
                      >
                        +3
                      </Avatar>
                    </div>
                    <span className="text-[10px]" style={{ color: "#666" }}>
                      Alice, Bob, Carol +3
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <Edit
                      className="w-3 h-3 cursor-pointer"
                      style={{ color: "#666" }}
                    />
                    <Trash2
                      className="w-3 h-3 cursor-pointer"
                      style={{ color: "#666" }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }

  if (currentTab === "groups") {
    return (
      <div className="space-y-4 px-4">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    );
  }

  if (currentTab === "shops") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        {shops.map((shop) => (
          <ShopCard
            key={shop.id}
            shop={shop}
            isLiked={likedShops.has(shop.id)}
            onToggleLike={toggleLike}
            onShopClick={handleShopClick}
          />
        ))}
      </div>
    );
  }

  return null;
}

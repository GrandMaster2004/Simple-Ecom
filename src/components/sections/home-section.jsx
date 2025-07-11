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
import patrick from "../../assets/images/patrick.png";
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
                bgcolor: "#F9F6EC",
              }}
            >
              <CardContent sx={{ padding: "1rem" }}>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-600 rounded-lg overflow-hidden">
                    <img
                      src={patrick}
                      alt="Picnic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Picnic Prep
                    </h3>
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

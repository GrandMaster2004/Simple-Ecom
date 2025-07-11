// "use client";

import { useState, useRef } from "react";
import { Header } from "./components/header";
import { BottomNavigation } from "./components/bottom-navigation";
import { CreateMenu } from "./components/create-menu";
import { CreatePost } from "./components/create-forms/create-post";
import { CreateGroup } from "./components/create-forms/create-group";
import CreateList from "./components/create-forms/create-list";
import { HomeSection } from "./components/sections/home-section";
import { FeedsSection } from "./components/sections/feeds-section";
import { ProfileSection } from "./components/sections/profile-section";
import { SavedSection } from "./components/sections/saved-section";
import { ListDetail } from "./components/detail-screens/list-detail";
import { ShopDetail } from "./components/detail-screens/shop-detail";

export default function ShoppingApp() {
  const [currentSection, setCurrentSection] = useState("home");
  const [currentTab, setCurrentTab] = useState("all");
  const [createScreen, setCreateScreen] = useState("menu");
  const [detailScreen, setDetailScreen] = useState(null);
  const [likedItems, setLikedItems] = useState(new Set());
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [likedShops, setLikedShops] = useState(new Set());
  const [savedItems, setSavedItems] = useState([]);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [uploadedImages, setUploadedImages] = useState({});
  const fileInputRef = useRef(null);
  const [currentImageUpload, setCurrentImageUpload] = useState("");

  // Data
  const listCategories = [
    {
      id: "1",
      title: "Daily Fresh Picks",
      items: 10,
      progress: 70,
      image: "🥬",
      color: "bg-green-500",
    },
    {
      id: "2",
      title: "Home Needs Kit",
      items: 12,
      progress: 50,
      image: "🏠",
      color: "bg-blue-500",
    },
    {
      id: "3",
      title: "Self-Care Stock",
      items: 10,
      progress: 70,
      image: "💄",
      color: "bg-pink-500",
    },
    {
      id: "4",
      title: "College Essentials",
      items: 12,
      progress: 50,
      image: "📚",
      color: "bg-purple-500",
    },
    {
      id: "5",
      title: "Home Clean-Up",
      items: 10,
      progress: 70,
      image: "🧽",
      color: "bg-yellow-500",
    },
    {
      id: "6",
      title: "Snacks & Cravings",
      items: 12,
      progress: 50,
      image: "🍿",
      color: "bg-orange-500",
    },
  ];

  const feedPosts = [
    {
      id: "post1",
      username: "@Meena_GrocerLover",
      storeName: "Fresh Basket, MG Road",
      image: "/placeholder.svg?height=200&width=300",
      caption:
        "Loved the fresh mangoes here! Also, they're running a 20% off on all fruits this week. Read more...",
      hashtags: "#FreshFruits #DiscountAlert #LocalMarket",
      likes: 37,
      likedBy: ["sibi", "john"],
      timeAgo: "10m ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "post2",
      username: "@AnayaOnTheGo",
      storeName: "Fresh Basket, MG Road",
      image: "/placeholder.svg?height=200&width=300",
      caption:
        "Loved the fresh mangoes here! Also, they're running a 20% off on all fruits this week. Read more...",
      hashtags: "#FreshFruits #DiscountAlert #LocalMarket",
      likes: 37,
      likedBy: ["sibi", "john"],
      timeAgo: "30m ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const shops = [
    {
      id: "shop1",
      name: "The Green Cart",
      category: "Grocery",
      location: "Kottayam | 5 km away",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "shop2",
      name: "Daily Pick Market",
      category: "Grocery",
      location: "Kottayam | 2 km away",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "shop3",
      name: "ThreadNest",
      category: "Clothing Store",
      location: "Kottayam | 5 km away",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "shop4",
      name: "Pan & Pour",
      category: "Utensil Store",
      location: "Kottayam | 2 km away",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "shop5",
      name: "Neighborhood Grocer",
      category: "Grocery",
      location: "Kottayam | 6 km away",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: "shop6",
      name: "Fresh Cart",
      category: "Grocery",
      location: "Kottayam | 5 km away",
      image: "/placeholder.svg?height=120&width=120",
    },
  ];

  const groups = [
    {
      id: "group1",
      title: "Picnic Prep",
      date: "June 7, 2025",
      time: "10:30 am",
      createdOn: "June 1, 2025",
      items: 12,
      taken: 7,
      cancelled: 2,
      participants: ["John", "Sarah", "Me"],
      moreParticipants: 3,
      icon: "🧺",
    },
    {
      id: "group2",
      title: "Sneha's Wedding",
      date: "June 1, 2025",
      time: "10:30 am",
      createdOn: "May 20, 2025",
      items: 12,
      taken: 7,
      cancelled: 2,
      participants: ["John", "Sarah", "Me"],
      moreParticipants: 5,
      icon: "💒",
    },
    {
      id: "group3",
      title: "College Opening",
      date: "May 10, 2025",
      time: "10:30 am",
      createdOn: "May 1, 2025",
      items: 12,
      taken: 7,
      cancelled: 2,
      participants: ["John", "Sarah", "Me"],
      moreParticipants: 5,
      icon: "🎓",
    },
  ];

  const picnicItems = [
    {
      id: "1",
      name: "Paper plates",
      brand: "Beco",
      quantity: "1 packet",
      size: "25 pieces",
      image: "🍽️",
    },
    {
      id: "2",
      name: "Sandwich bread",
      brand: "Harvest Gold",
      quantity: "2 packs",
      size: "400g",
      image: "🍞",
    },
    {
      id: "3",
      name: "Juice Boxes",
      brand: "Real",
      quantity: "6",
      size: "200ml",
      image: "🧃",
    },
    {
      id: "4",
      name: "Wet Wipes",
      brand: "Himalaya",
      quantity: "2 packs",
      size: "72 wipes",
      image: "🧻",
    },
    {
      id: "5",
      name: "Chips",
      brand: "Lay's Classic",
      quantity: "4 packs",
      size: "52g",
      image: "🍟",
    },
    {
      id: "6",
      name: "Disposable Cups",
      brand: "Ecoware",
      quantity: "1 pack",
      size: "20 pieces",
      image: "🥤",
    },
    {
      id: "7",
      name: "Fresh Fruits",
      brand: "Local market",
      quantity: "500g",
      size: "Regular",
      image: "🍎",
    },
    {
      id: "8",
      name: "Chocolate Bars",
      brand: "Dairy Milk",
      quantity: "5 bars",
      size: "45g",
      image: "🍫",
    },
    {
      id: "9",
      name: "Sunscreen Lotion",
      brand: "Nivea",
      quantity: "1 bottle",
      size: "100ml",
      image: "🧴",
    },
  ];

  const dailyPicksItems = [
    {
      id: "1",
      name: "Milk",
      brand: "Amul",
      quantity: "2 packets",
      size: "500ml",
      image: "🥛",
    },
    {
      id: "2",
      name: "Bread",
      brand: "Harvest",
      quantity: "1 pack",
      size: "400g",
      image: "🍞",
    },
    {
      id: "3",
      name: "Eggs",
      brand: "Local farm",
      quantity: "1 dozen",
      size: "Regular",
      image: "🥚",
    },
    {
      id: "4",
      name: "Tomato",
      brand: "Local market",
      quantity: "500g",
      size: "Regular",
      image: "🍅",
    },
    {
      id: "5",
      name: "Cooking Oil",
      brand: "Fortune",
      quantity: "1 bottle",
      size: "1 litre",
      image: "🫗",
    },
    {
      id: "6",
      name: "Potato",
      brand: "Local market",
      quantity: "500g",
      size: "Regular",
      image: "🥔",
    },
  ];

  // Handlers
  const handleImageUpload = (event, uploadKey) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        setUploadedImages((prev) => ({
          ...prev,
          [uploadKey]: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = (uploadKey) => {
    setCurrentImageUpload(uploadKey);
    fileInputRef.current?.click();
  };

  const toggleLike = (id, type, itemData) => {
    if (type === "item") {
      const newLiked = new Set(likedItems);
      if (newLiked.has(id)) {
        newLiked.delete(id);
        setSavedItems((prev) => prev.filter((item) => item.id !== id));
      } else {
        newLiked.add(id);
        if (itemData) {
          const savedItem = {
            id,
            type: "list",
            title: itemData.title,
            subtitle: `${itemData.items} Items • ${itemData.progress}% done`,
            image: itemData.image,
            color: itemData.color,
            progress: itemData.progress,
            items: itemData.items,
            data: itemData,
          };
          setSavedItems((prev) => [...prev, savedItem]);
        }
      }
      setLikedItems(newLiked);
    } else if (type === "post") {
      const newLiked = new Set(likedPosts);
      if (newLiked.has(id)) {
        newLiked.delete(id);
        setSavedItems((prev) => prev.filter((item) => item.id !== id));
      } else {
        newLiked.add(id);
        if (itemData) {
          const savedItem = {
            id,
            type: "post",
            title: itemData.username,
            subtitle: itemData.storeName,
            image: itemData.image,
            data: itemData,
          };
          setSavedItems((prev) => [...prev, savedItem]);
        }
      }
      setLikedPosts(newLiked);
    } else if (type === "shop") {
      const newLiked = new Set(likedShops);
      if (newLiked.has(id)) {
        newLiked.delete(id);
        setSavedItems((prev) => prev.filter((item) => item.id !== id));
      } else {
        newLiked.add(id);
        if (itemData) {
          const savedItem = {
            id,
            type: "shop",
            title: itemData.name,
            subtitle: `${itemData.category} • ${itemData.location}`,
            image: itemData.image,
            data: itemData,
          };
          setSavedItems((prev) => [...prev, savedItem]);
        }
      }
      setLikedShops(newLiked);
    }
  };

  const handleCreateClose = () => {
    setCurrentSection("home");
    setCreateScreen("menu");
    setShowCreateMenu(false); // Ensure menu is closed
  };

  // Handle detail screens
  if (detailScreen === "picnic") {
    return (
      <ListDetail
        items={picnicItems}
        title="Picnic Prep"
        onBack={() => setDetailScreen(null)}
      />
    );
  }

  if (detailScreen === "daily-picks") {
    return (
      <ListDetail
        items={dailyPicksItems}
        title="Daily Fresh Picks"
        onBack={() => setDetailScreen(null)}
      />
    );
  }

  if (detailScreen === "green-cart") {
    return <ShopDetail onBack={() => setDetailScreen(null)} />;
  }

  // Handle create screens
  if (createScreen === "post") {
    return (
      <CreatePost
        onClose={handleCreateClose}
        uploadedImages={uploadedImages}
        triggerImageUpload={triggerImageUpload}
      />
    );
  }

  if (createScreen === "group") {
    return (
      <CreateGroup
        onClose={handleCreateClose}
        uploadedImages={uploadedImages}
        triggerImageUpload={triggerImageUpload}
      />
    );
  }

  if (createScreen === "list") {
    return <CreateList onClose={handleCreateClose} />;
  }

  const renderContent = () => {
    switch (currentSection) {
      case "home":
        return (
          <>
            <Header
              currentSection={currentSection}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
            <div className="px-4 pb-24 sm:px-6">
              <HomeSection
                currentTab={currentTab}
                listCategories={listCategories}
                shops={shops}
                groups={groups}
                likedItems={likedItems}
                likedShops={likedShops}
                toggleLike={toggleLike}
                setDetailScreen={setDetailScreen}
              />
            </div>
          </>
        );
      case "saved":
        return (
          <>
            <div className="px-4 py-6 sm:px-6">
              <h1 className="text-xl font-semibold text-white mb-6">
                Saved Items
              </h1>
            </div>
            <div className="px-4 pb-24 sm:px-6">
              <SavedSection savedItems={savedItems} />
            </div>
          </>
        );
      case "feeds":
        return (
          <>
            <div className="px-4 py-6 sm:px-6">
              <h1 className="text-xl font-semibold text-white mb-6">Feeds</h1>
            </div>
            <div className="px-4 pb-24 sm:px-6">
              <FeedsSection
                feedPosts={feedPosts}
                likedPosts={likedPosts}
                toggleLike={toggleLike}
              />
            </div>
          </>
        );
      case "profile":
        return (
          <>
            <div className="py-6">
              <h1 className="text-xl font-semibold text-white mb-6 px-4">
                My Profile
              </h1>
              <ProfileSection />
            </div>
          </>
        );
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400">Coming Soon</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hidden file input for image uploads */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleImageUpload(e, currentImageUpload)}
        accept="image/*"
        className="hidden"
      />

      {/* Main Content */}
      {renderContent()}

      {/* Create Menu (radial buttons only) */}
      {/* Position this absolutely relative to the bottom of the screen, centered */}
      <div
        style={{
          position: "fixed",
          bottom: "45px", // Center of the create button is 45px from bottom
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 49, // Below the bottom navigation bar
          pointerEvents: showCreateMenu ? "auto" : "none", // Allow clicks only when visible
        }}
      >
        <CreateMenu
          showCreateMenu={showCreateMenu}
          setShowCreateMenu={setShowCreateMenu}
          setCreateScreen={setCreateScreen}
        />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setShowCreateMenu={setShowCreateMenu}
        showCreateMenu={showCreateMenu}
      />
    </div>
  );
}

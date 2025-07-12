"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { X } from "lucide-react";

export function CreateProduct({ onClose, onAddProduct }) {
  const [productData, setProductData] = useState({
    productName: "",
    brandName: "",
    quantity: "",
    size: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(productData);
    onClose();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4"
        style={{ backgroundColor: "#1A1A1A", color: "#FFD700" }}
      >
        <h1 className="text-xl font-semibold">New Product</h1>
        <Button
          variant="text"
          onClick={onClose}
          sx={{ minWidth: "auto", padding: "0.5rem", color: "white" }}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Form */}
      <div className="form bg-amber-500">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
            backgroundColor: "#fff", // Cream/beige background
          }}
        >
          <div className="space-y-6 flex-grow bg">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-800">
                Product Name:
              </label>
              <TextField
                name="productName"
                placeholder="Enter product name"
                fullWidth
                value={productData.productName}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-root": {
                    bgcolor: "white",
                    color: "#333",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#E6C677",
                      borderWidth: "1px",
                    },
                    "&:hover fieldset": { borderColor: "#D4AF37" },
                    "&.Mui-focused fieldset": { borderColor: "#D4AF37" },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#999",
                    opacity: 1,
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-800">
                Brand Name:
              </label>
              <TextField
                name="brandName"
                placeholder="Enter brand name"
                fullWidth
                value={productData.brandName}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-root": {
                    bgcolor: "white",
                    color: "#333",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#E6C677",
                      borderWidth: "1px",
                    },
                    "&:hover fieldset": { borderColor: "#D4AF37" },
                    "&.Mui-focused fieldset": { borderColor: "#D4AF37" },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#999",
                    opacity: 1,
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-800">
                Quantity:
              </label>
              <TextField
                name="quantity"
                placeholder="Enter required quantity"
                fullWidth
                value={productData.quantity}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-root": {
                    bgcolor: "white",
                    color: "#333",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#E6C677",
                      borderWidth: "1px",
                    },
                    "&:hover fieldset": { borderColor: "#D4AF37" },
                    "&.Mui-focused fieldset": { borderColor: "#D4AF37" },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#999",
                    opacity: 1,
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-800">
                Size:
              </label>
              <TextField
                name="size"
                placeholder="Enter size/measurement"
                fullWidth
                value={productData.size}
                onChange={handleChange}
                sx={{
                  "& .MuiInputBase-root": {
                    bgcolor: "white",
                    color: "#333",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#E6C677",
                      borderWidth: "1px",
                    },
                    "&:hover fieldset": { borderColor: "#D4AF37" },
                    "&.Mui-focused fieldset": { borderColor: "#D4AF37" },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#999",
                    opacity: 1,
                  },
                }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#E6C677", // Golden button
                color: "#333", // Dark text
                textTransform: "none",
                fontWeight: "medium",
                fontSize: "1rem",
                padding: "0.75rem",
                borderRadius: "8px",
                marginTop: "2rem",
                "&:hover": { bgcolor: "#D4AF37" },
                boxShadow: "none",
              }}
            >
              Add Product
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

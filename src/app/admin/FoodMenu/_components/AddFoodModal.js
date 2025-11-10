"use client";
import { useState } from "react";
import { FaImage } from "react-icons/fa";

export const AddFoodModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAdd = () => {
    if (!name || !price) return;

    const newFood = {
      id: Date.now(),
      name,
      price,
      ingredients,
      image: preview || "/placeholder.jpg",
    };
    onAdd(newFood);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[500px] shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Add new Dish to Appetizers
        </h2>

        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Food name
            </label>
            <input
              type="text"
              placeholder="Type food name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Food price
            </label>
            <input
              type="text"
              placeholder="Enter price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Ingredients
          </label>
          <textarea
            placeholder="List ingredients..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md h-[90px]"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Food image
          </label>
          <label className="w-full border-2 border-dashed border-gray-300 p-5 rounded-md flex flex-col justify-center items-center cursor-pointer hover:bg-gray-50">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="w-[200px] h-[130px] object-cover rounded-md mb-2"
              />
            ) : (
              <>
                <span className="text-2xl text-gray-400 mb-2">
                  <FaImage />
                </span>
                <p className="text-gray-500 text-sm">
                  Choose a file or drag & drop it here
                </p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </label>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleAdd}
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
          >
            Add Dish
          </button>
        </div>
      </div>
    </div>
  );
};

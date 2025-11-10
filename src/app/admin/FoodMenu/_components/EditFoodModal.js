"use client";
import { useState } from "react";

export const EditFoodModal = ({ food, onClose, onSave }) => {
  const [name, setName] = useState(food.name);
  const [price, setPrice] = useState(food.price);
  const [ingredients, setIngredients] = useState(food.ingredients);
  const [preview, setPreview] = useState(food.image);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    const updated = {
      ...food,
      name,
      price,
      ingredients,
      image: preview,
    };
    onSave(updated);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[500px] shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Edit Dish</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Food name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>

        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border p-2 rounded-md mb-4"
        />

        <label className="block border-2 border-dashed border-gray-300 p-4 rounded-md cursor-pointer hover:bg-gray-50 text-center">
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-[200px] h-[130px] object-cover mx-auto rounded-md"
            />
          ) : (
            "Upload image"
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />
        </label>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

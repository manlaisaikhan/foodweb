"use client";
import { useState } from "react";

export const EditCategoryModal = ({ category, onClose, onSave }) => {
  const [name, setName] = useState(category.name);

  const handleSave = () => {
    if (!name.trim()) return;
    onSave(name.trim());
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Edit Category
        </h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

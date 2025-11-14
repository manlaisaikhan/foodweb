import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const categories = [
  "All Dishes",
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch favorites",
  "Main dishes",
  "Fish & Sea foods",
];

export default function EditCardsfood({ dish, onClose, onSave }) {
  const [name, setName] = useState(dish?.name || "");
  const [category, setCategory] = useState(dish?.category || "");
  const [ingredients, setIngredients] = useState(dish?.ingredients || "");
  const [price, setPrice] = useState(dish?.price || "");
  const [image, setImage] = useState(null);

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[450px] rounded-xl p-6 shadow-xl relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 p-2 bg-gray-200 rounded-full"
          onClick={onClose}
        >
          <IoMdClose size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Dishes info</h2>

        {/* Dish Name */}
        <label className="text-sm font-medium">Dish name</label>
        <input
          className="w-full border rounded-lg p-2 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Category Dropdown */}
        <label className="text-sm font-medium">Dish category</label>
        <select
          className="w-full border rounded-lg p-2 mb-4 bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Ingredients */}
        <label className="text-sm font-medium">Ingredients</label>
        <textarea
          className="w-full border rounded-lg p-2 mb-4 h-20 resize-none"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        {/* Price */}
        <label className="text-sm font-medium">Price</label>
        <input
          className="w-full border rounded-lg p-2 mb-4"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* Image upload */}
        <label className="text-sm font-medium">Image</label>
        <div className="w-full border-2 border-dashed rounded-xl h-28 flex justify-center items-center mb-4">
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <div className="flex justify-between mt-4">
          {/* Delete Button */}
          <button className="p-3 bg-red-100 text-red-600 rounded-lg">
            <FaTrash />
          </button>

          {/* Save Button */}
          <button
            className="bg-black text-white px-6 py-2 rounded-lg"
            onClick={() =>
              onSave({ name, category, ingredients, price, image })
            }
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

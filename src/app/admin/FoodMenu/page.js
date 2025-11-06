"use client";

import { useState } from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Sidebeer } from "../components/sidebar";

// Dummy categories
const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Chicken" },
  { id: 3, name: "Beef" },
  { id: 4, name: "Vegan" },
  { id: 5, name: "Fast food" },
];

// Dummy foods list
const foods = [
  { id: 1, name: "Grilled Chicken", category: "Chicken", img: "/food1.jpg" },
  { id: 2, name: "Fried Chicken", category: "Chicken", img: "/food2.jpg" },
  { id: 3, name: "Beef Steak", category: "Beef", img: "/food3.jpg" },
  { id: 4, name: "Green Salad", category: "Vegan", img: "/food4.jpg" },
  { id: 5, name: "Burger", category: "Fast food", img: "/food5.jpg" },
  { id: 6, name: "Pizza", category: "Fast food", img: "/food6.jpg" },
];

export default function FoodMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFoods =
    activeCategory === "All"
      ? foods
      : foods.filter((f) => f.category === activeCategory);

  return (
    <div className="w-screen h-screen flex bg-gray-50">
      {/* LEFT SIDEBAR */}
      <div className="w-[205px] h-full bg-white border-r">
        <Sidebeer />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="flex justify-end items-center p-6 h-[85px]">
          <div className="w-10 h-10 rounded-full cursor-pointer">
            <HiMiniUserCircle className="w-full h-full text-gray-700" />
          </div>
        </div>

        {/* Main container */}
        <div className="flex justify-center w-full">
          <div className="w-[1123px] bg-white rounded-xl shadow-sm p-6">
            {/* SECTION TITLE */}
            <p className="font-semibold text-[20px] mb-4">Dishes category</p>

            {/* CATEGORY TABS */}
            <div className="flex gap-3 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2 rounded-full border text-sm transition-all
                    ${
                      activeCategory === cat.name
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* FOOD CARDS */}
            <div className="grid grid-cols-4 gap-5 mt-4">
              {filteredFoods.map((food) => (
                <div
                  key={food.id}
                  className="w-full rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer transition"
                >
                  <div className="h-[140px] bg-gray-200">
                    <img
                      src={food.img}
                      alt={food.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-3">
                    <p className="font-semibold text-[15px] text-gray-800">
                      {food.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {food.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

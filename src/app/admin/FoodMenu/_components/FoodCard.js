"use client";
import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";

export const FoodCard = ({ food, onEdit }) => {
  return (
    <div className="relative bg-white rounded-xl p-3 shadow-sm w-[230px]   hover:shadow-md transition">
      <button
        onClick={() => onEdit(food)}
        className="absolute top-32 right-5  bg-black/70 hover:bg-black text-white rounded-md p-1 text-xs transition"
      >
        <MdModeEditOutline />
      </button>

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-[140px] object-cover rounded-md mb-2"
      />
      <p className="text-red-600 font-medium">{food.name}</p>
      <p className="text-sm text-gray-500 h-[40px] overflow-hidden">
        {food.ingredients}
      </p>
      <p className="text-gray-800 font-semibold mt-1">${food.price}</p>
    </div>
  );
};

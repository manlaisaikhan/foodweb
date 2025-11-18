"use client";
import { useEffect, useState } from "react";
import { AddFoodCard } from "./_components/AddFoodCard";
import { FoodCard } from "./_components/FoodCard";

export const FoodsByCategories = ({ categoryId, categoryName }) => {
  const [foods, setFoods] = useState([]);
  const getFoods = async () => {
    try {
      const response = await fetch(`http://localhost:8000/food/${categoryId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        console.log("❌ Backend error: ", response.status);
        return;
      }

      const data = await response.json();
      console.log("hahaha", data);

      setFoods(data);
    } catch (error) {
      console.log("❌ Fetch error:", error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <div className="w-full bg-gray-100 rounded-[6px] p-6 ml-6 mt-4 flex flex-col">
      <p className="font-bold text-left text-[24px] mb-4">{categoryName}(1)</p>

      <div className="flex flex-wrap gap-4">
        <AddFoodCard
          onClick={() => {
            setSelectedCategoryId(cat.id);
            setOpenFoodModal(true);
          }}
        />
        {foods.map((food) => {
          return (
            <FoodCard
              key={food._id}
              food={food}
              onDelete={() => deleteFood(cat.id, food.id)}
              onEdit={() => {
                setFoodToEdit({ ...food, categoryId: cat.id });
                setOpenEditFoodModal(true);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

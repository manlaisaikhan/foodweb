import { useEffect, useState } from "react";
import FoodCard from "./foodcard";
import { da } from "date-fns/locale";

export const CategorySection = ({ title, categoryId }) => {
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
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((item, i) => (
          <FoodCard key={i} food={item} />
        ))}
      </div>
    </section>
  );
};

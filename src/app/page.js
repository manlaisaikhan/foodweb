"use client";
import Header from "@/_components/header";
import OfferBanner from "@/_components/OfferBanner";
import { useState, useEffect } from "react";
import { Footer } from "react-day-picker";
import { FoodsByCategories } from "./admin/FoodMenu/foodsByCategories";
import { CategorySection } from "@/_components/CategorySection";

export default function HomePage() {
  const [categories, setCategories] = useState([]);
  const [foodsByCategory, setFoodsByCategory] = useState({});

  const getCategories = async () => {
    const res = await fetch("http://localhost:8000/category");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <OfferBanner />

      <div className="mx-auto px-4 py-8">
        {categories.map((cat) => (
          <CategorySection
            key={cat._id}
            title={cat.categoryName}
            categoryId={cat._id}
          />
        ))}
      </div>

      <Footer />
    </main>
  );
}

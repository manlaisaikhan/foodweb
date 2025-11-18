"use client";

import { useState, useEffect } from "react";
import { Sidebeer } from "../../../_components/sidebar";
import { CategoryButton } from "./_components/CategotyButton";
import { AddFoodCard } from "./_components/AddFoodCard";
import { FoodCard } from "./_components/FoodCard";
import { AddCategoryModal } from "./_components/AddCategoryModal";
import { EditCategoryModal } from "./_components/EditCategoryModal";
import { AddFoodModal } from "./_components/AddFoodModal";
import { EditFoodModal } from "./_components/EditFoodModal";
import { HiMiniUserCircle } from "react-icons/hi2";
import EditCardsfood from "./_components/editcardfood";
import { FoodsByCategories } from "./foodsByCategories";

export default function FoodMenu() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState(null);

  const [openFoodModal, setOpenFoodModal] = useState(false);
  const [openEditFoodModal, setOpenEditFoodModal] = useState(false);
  const [foodToEdit, setFoodToEdit] = useState(null);

  const [newCategoryName, setNewCategoryName] = useState("");

  // ⭐ Backend-ээс категори татах
  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:8000/category", {
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
      console.log("✅ Backend response:", data);

      // Backend бүтэцтэй тааруулж хөрвүүлэв
      const formatted = data.map((c) => ({
        id: c._id,
        name: c.categoryName,
        foods: c.foods || [], // backend-д foods байвал ашиглана
      }));

      setCategories(formatted);
    } catch (error) {
      console.log("❌ Fetch error:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // === Category CRUD ===
  const addCategory = () => {
    if (!newCategoryName.trim()) return;
    ``;
    const newCat = {
      id: Date.now(),
      name: newCategoryName.trim(),
      foods: [],
    };

    setCategories([...categories, newCat]);
    setNewCategoryName("");
    setOpenCategoryModal(false);
  };

  const deleteCategory = (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  const saveEditedCategory = (updatedName) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryToEdit.id ? { ...cat, name: updatedName } : cat
      )
    );
    setOpenEditCategoryModal(false);
  };

  // === Food CRUD ===
  const addFoodToCategory = (food) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === selectedCategoryId
          ? { ...cat, foods: [...cat.foods, food] }
          : cat
      )
    );
    setOpenFoodModal(false);
  };

  const deleteFood = (catId, foodId) => {
    if (confirm("Delete this dish?")) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === catId
            ? { ...cat, foods: cat.foods.filter((f) => f.id !== foodId) }
            : cat
        )
      );
    }
  };

  const saveEditedFood = (updatedFood) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === updatedFood.categoryId
          ? {
              ...cat,
              foods: cat.foods.map((f) =>
                f.id === updatedFood.id ? updatedFood : f
              ),
            }
          : cat
      )
    );
    setOpenEditFoodModal(false);
  };

  const totalFoodCount = categories.reduce((sum, c) => sum + c.foods.length, 0);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-[205px] h-screen bg-white">
        <Sidebeer />
      </div>

      <div className="flex-1 h-screen w-full flex flex-col overflow-y-scroll">
        <div className="flex justify-end items-start p-6">
          <HiMiniUserCircle className="w-10 h-10 text-gray-700" />
        </div>

        {/* === Category Section === */}
        <div className="w-full bg-gray-100 rounded-[6px] p-6 ml-6 flex flex-col">
          <p className="font-bold text-left text-[24px] mb-4">
            Dishes category
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <CategoryButton
              CategoryName="All dishes"
              showByCategory={() => setSelectedCategoryId(null)}
              category={selectedCategoryId === null ? "All dishes" : ""}
              foodCount={totalFoodCount}
            />

            {categories.map((cat) => (
              <div key={cat.id} className="flex items-center gap-2">
                <CategoryButton
                  CategoryName={cat.name}
                  showByCategory={() => setSelectedCategoryId(cat.id)}
                  category={selectedCategoryId === cat.id ? cat.name : ""}
                  foodCount={cat.foods.length}
                />

                <button
                  onClick={() => {
                    setCategoryToEdit(cat);
                    setOpenEditCategoryModal(true);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ✎
                </button>

                <button
                  onClick={() => deleteCategory(cat.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            ))}

            <div
              onClick={() => setOpenCategoryModal(true)}
              className="flex justify-center items-center bg-red-500 rounded-full cursor-pointer w-9 h-9"
            >
              <span className="text-white text-xl">+</span>
            </div>
          </div>
        </div>

        {/* === Food Section === */}
        {/* {categories.map((cat) => {
          if (selectedCategoryId === null || selectedCategoryId === cat.id) {
            return (
              <div
                key={cat.id}
                className="w-full bg-gray-100 rounded-[6px] p-6 ml-6 mt-4 flex flex-col"
              >
                <p className="font-bold text-left text-[24px] mb-4">
                  {cat.name} ({cat.foods.length})
                </p>

                <div className="flex flex-wrap gap-4">
                  <AddFoodCard
                    onClick={() => {
                      setSelectedCategoryId(cat.id);
                      setOpenFoodModal(true);
                    }}
                  />

                  {cat.foods.map((food) => (
                    <FoodCard
                      key={food.id}
                      food={food}
                      onDelete={() => deleteFood(cat.id, food.id)}
                      onEdit={() => {
                        setFoodToEdit({ ...food, categoryId: cat.id });
                        setOpenEditFoodModal(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })} */}

        {/* === Food Section === */}

        {categories.map((item, index) => {
          return (
            <FoodsByCategories
              key={index}
              categoryId={item.id}
              categoryName={item.name}
            />
          );
        })}

        {openEditFoodModal && (
          <EditCardsfood
            food={foodToEdit}
            onClose={() => setOpenEditFoodModal(false)}
            onSave={saveEditedFood}
          />
        )}

        {/* === Modals === */}
        {openCategoryModal && (
          <AddCategoryModal
            onClose={() => setOpenCategoryModal(false)}
            onAdd={addCategory}
            newCategoryName={newCategoryName}
            setNewCategoryName={setNewCategoryName}
          />
        )}

        {openEditCategoryModal && (
          <EditCategoryModal
            category={categoryToEdit}
            onClose={() => setOpenEditCategoryModal(false)}
            onSave={saveEditedCategory}
          />
        )}

        {openFoodModal && (
          <AddFoodModal
            onClose={() => setOpenFoodModal(false)}
            onAdd={addFoodToCategory}
          />
        )}
      </div>
    </div>
  );
}

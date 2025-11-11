"use client";

import { Foodicon } from "@/app/admin/icon/foodicon";
import { Facebook, Instagram } from "lucide-react";

export default function Footeer() {
  return (
    <footer className="bg-[#181818] text-white w-full">
      <div className="bg-[#ff4646] py-3">
        <div className="flex items-center justify-center gap-12 font-semibold text-lg text-white">
          <span>Fresh fast delivered</span>
          <span>Fresh fast delivered</span>
          <span>Fresh fast delivered</span>
          <span>Fresh fast delivered</span>
          <span>Fresh fast delivered</span>
          <span>Fresh fast delivered</span>
        </div>
      </div>

      <div className="w-full px-20 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold flex items-center gap-2">
              <Foodicon />
              <span className="text-red-500">Nom</span>Nom
            </div>
          </div>
          <p className="text-gray-400 mt-1">Swift delivery</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-300">NONNOM</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Contact us</li>
            <li>Delivery zone</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-300">MENU</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Appetizers</li>
            <li>Salads</li>
            <li>Pizzas</li>
            <li>Lunch favorites</li>
            <li>Main dishes</li>
            <li>Side dish</li>
            <li>Brunch</li>
            <li>Desserts</li>
            <li>Beverages</li>
            <li>Fish & Sea foods</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-gray-300">FOLLOW US</h3>
          <div className="flex gap-4 mt-2">
            <Facebook className="w-5 h-5 cursor-pointer" />
            <Instagram className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 w-full py-6">
        <div className="w-full px-20 flex flex-col md:flex-row justify-between text-gray-500 text-sm gap-3">
          <span>Copy right 2024 © Nomnom LLC</span>
          <span className="cursor-pointer">Privacy policy</span>
          <span className="cursor-pointer">Terms and condition</span>
          <span className="cursor-pointer">Cookie policy</span>
        </div>
      </div>
    </footer>
  );
}

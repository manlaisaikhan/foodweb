import { Foodicon } from "@/app/admin/icon/foodicon";
import { MdLocationOn } from "react-icons/md";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-[100px] bg-[#0C0C0C] px-8 shadow-sm">
      {/* === LOGO SECTION === */}
      <div className="flex items-center gap-3">
        <Foodicon />
        <div className="flex flex-col leading-tight text-white font-semibold">
          <p className="text-xl">NomNom</p>
          <p className="text-sm text-gray-400">Swift delivery</p>
        </div>
      </div>

      {/* === RIGHT SECTION (2 BOX) === */}
      <div className="flex items-center ">
        {/* Delivery address box */}
        <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 border border-gray-200 shadow-sm">
          <MdLocationOn className="w-4 h-4 text-[#E53935]" />
          <span className="text-sm text-gray-700">
            Delivery address:{" "}
            <span className="font-semibold text-gray-900">Add Location</span>
          </span>
        </div>

        {/* Gmail + Sign out box */}
        <div className="flex flex-col items-center gap-3 bg-white rounded-md px-4 py-2 border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-900">Test@gmail.com</p>
          <button className="bg-[#0C0C0C] text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-gray-800 transition">
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}

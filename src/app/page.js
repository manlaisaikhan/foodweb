"use client";
import Image from "next/image";
import { DiRuby } from "react-icons/di";

import { Sidebeer } from "./admin/components/sidebar";
import OrdersTable from "./admin/components/adminorder";
export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row justify-around">
      <div className="flex w-[205px] h-screen bg-white">
        <Sidebeer />
      </div>
      <div className="w-full flex justify-center">
        <OrdersTable />
      </div>
    </div>
  );
}

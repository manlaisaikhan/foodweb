"use client";
import { Button } from "@/components/ui/button";
import { Foodicon } from "../icon/foodicon";
import { LiaMicrosoft } from "react-icons/lia";
import { CiDeliveryTruck } from "react-icons/ci";
import { useRouter } from "next/navigation";

export const Sidebeer = () => {
  const router = useRouter();

  const handleOrder = () => {
    router.push("/admin/FoodMenu");
  };
  const handleFood = () => {
    router.push("/admin/order");
  };

  return (
    <div className=" w-[205px] h-screen bg-gray-100 flex flex-col gap-10 items-center">
      <div className="flex flex-row w-[165px] items-center justify-between">
        <Foodicon />
        <div className="flex flex-col">
          <p>Nom Nom</p>
          <p>Swift delivery</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* Food Menu руу шилжих */}
        {/* <Link href="/foodmenu.js"> */}
        <Button
          onClick={handleOrder}
          variant={"outline"}
          className="w-[165px] text-[14px] font-bold flex items-center gap-2"
        >
          <LiaMicrosoft /> Food menu
        </Button>
        {/* </Link> */}

        <Button
          onClick={handleFood}
          variant={"outline"}
          className={`w-[165px]  juctify-start text-[14px] font-bold`}
        >
          <CiDeliveryTruck />
          Order
        </Button>
      </div>
    </div>
  );
};

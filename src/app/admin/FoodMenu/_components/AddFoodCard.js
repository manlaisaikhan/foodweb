export const AddFoodCard = ({ onClick }) => (
  <div
    onClick={onClick}
    className="border-2 border-dashed border-red-400 w-[230px] h-[220px] flex flex-col items-center justify-center rounded-xl cursor-pointer hover:bg-red-50 transition"
  >
    <span className="text-red-500 text-3xl">+</span>
    <p className="text-gray-600 text-center mt-2">Add new Dish to Appetizers</p>
  </div>
);

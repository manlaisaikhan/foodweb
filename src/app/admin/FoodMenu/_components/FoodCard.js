export const FoodCard = ({ food }) => (
  <div className="bg-white rounded-xl p-3 shadow-sm w-[230px] hover:shadow-md transition">
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

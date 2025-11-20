export default function FoodCard({ food }) {
  return (
    <div className=" p-8 w-[397px] h-[342px] rounded-lg shadow hover:shadow-lg overflow-hidden border border-gray-200 transition">
      <img
        src={food.image}
        alt={food.title}
        className="w-[365px] h-[210px] object-cover "
      />
      <div className=" flex justify-between ">
        <h3 className=" flex flex-row justify-between text-lg items-center  font-semibold text-gray-800">
          {food.foodName}
        </h3>
        <p className="text-red-500 font-bold ">{food.price}$</p>
      </div>
      <p className="text-gray-600 text-sm mt-4 line-clamp-2">
        {food.ingredients}
      </p>{" "}
    </div>
  );
}

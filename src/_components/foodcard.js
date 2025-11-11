export default function FoodCard({ title, price, image, description }) {
  return (
    <div className="bg-white p-8 w-[397px] h-[342px] rounded-lg shadow hover:shadow-lg overflow-hidden border border-gray-200 transition">
      <img
        src={image}
        alt={title}
        className="w-[365px] h-[210px] object-cover "
      />
      <div className=" flex justify-between ">
        <h3 className=" flex flex-row justify-between text-2xl items-center  font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-red-500 font-bold ">${price}</p>
      </div>
      <p className="text-gray-600 text-sm mt-4 line-clamp-2">{description}</p>{" "}
    </div>
  );
}

export default function FoodCard({ title, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden border border-gray-200 transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-red-500 font-bold mt-2">${price}</p>
      </div>
    </div>
  );
}

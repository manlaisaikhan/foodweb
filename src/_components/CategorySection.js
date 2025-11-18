import FoodCard from "./foodcard";

export default function CategorySection({ title, items }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((food, i) => (
          <FoodCard key={i} food={food} />
        ))}
      </div>
    </section>
  );
}

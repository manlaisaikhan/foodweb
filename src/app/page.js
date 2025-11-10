import CategorySection from "@/_components/categorysection";
import Header from "@/_components/header";
import OfferBanner from "@/_components/OfferBanner";

export default function HomePage() {
  const appetizers = [
    { title: "Finger food", price: "12.99", image: "/foods/finger.jpg" },
    { title: "Cranberry Brie Bites", price: "10.99", image: "/foods/brie.jpg" },
  ];
  const salads = [
    {
      title: "Grilled Chicken Salad",
      price: "14.99",
      image: "/foods/salad.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <OfferBanner />
      <div className="container mx-auto px-4 py-8">
        <CategorySection title="Appetizers" items={appetizers} />
        <CategorySection title="Salads" items={salads} />
      </div>
    </main>
  );
}

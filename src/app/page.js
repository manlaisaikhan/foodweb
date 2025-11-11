import CategorySection from "@/_components/categorysection";
import Footeer from "@/_components/footer";
import Header from "@/_components/header";
import OfferBanner from "@/_components/OfferBanner";
import { Footer } from "react-day-picker";

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
      description: "bvghcbjsdncgsdvhcs",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Header />
      <OfferBanner />
      <div className="mx-auto px-4 py-8">
        <CategorySection title="Appetizers" items={appetizers} />
        <CategorySection title="Salads" items={salads} />
      </div>{" "}
      <Footeer />
    </main>
  );
}

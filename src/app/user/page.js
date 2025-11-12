"use client";
import { useRouter } from "next/navigation";
export default function UserPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-4">Welcome, User!</h1>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          router.push("/login");
        }}
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Logout
      </button>
    </div>
  );
}

"use client";
import { useRouter } from "next/navigation";
export default function AdminPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome, Admin!</h1>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          router.push("/login");
        }}
        className="mt-6 px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

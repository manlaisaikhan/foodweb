// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// // const options = {
// //   method: "GET",
// //   headers: {
// //     "content-type": "application/json",
// //     accept: "application/json",
// //     Authorization: "Bearer",
// //   },
// // };

// // export default function AdminPage() {
// //   const [categories, setCategories] = useState([]);
// //   const router = useRouter();

// //   const getCategory = async () => {
// //     try {
// //       const response = await fetch("http://localhost:8000/category", options);

// //       const data = await response.json();
// //       console.log(data, "asdasd");
// //       setCategories(data);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   useEffect(() => {
// //     getCategory();
// //   }, []);

// return (
//   <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
//     <h1 className="text-4xl font-bold mb-4">Welcome, Admin!</h1>
//     <button
//       onClick={() => {
//         localStorage.removeItem("user");
//         router.push("/FoodMenu");
//       }}
//     ></button>
//   </div>
// );

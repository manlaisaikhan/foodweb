"use client"; // client component болгож байна
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "../lib/auth"; // өөрийн Google login session авах function

export default function RootLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      <GoogleOAuthProvider clientId="1068387664961-51d7s58ap400kdjg9bqv6pdkeb4uqbj6.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>;
      const session = await getSession(); // хэрэглэгчийн session авах
      if (!session) {
        router.push("/login"); // login хийгээгүй бол login page руу
      } else {
        setLoading(false); // login хийсэн бол page харуулна
      }
    }
    checkAuth();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // эсвэл spinner
  }

  return <>{children}</>;
}

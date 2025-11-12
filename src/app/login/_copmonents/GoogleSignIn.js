"use client";
import { GoogleLogin } from "@react-oauth/google";

import { useRouter } from "next/navigation";

export default function GoogleSignIn() {
  const router = useRouter();

  const handleLoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);

    // localStorage-д хадгалах
    localStorage.setItem("user", JSON.stringify(decoded));

    // redirect
    if (decoded.email === "admin@gmail.com") {
      router.push("/admin");
    } else {
      router.push("/user");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={() => console.log("Login failed")}
    />
  );
}

// src/app/login/_components/LoginForm.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoogleSignIn from "./GoogleSignIn";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    
    const adminCred = { email: "admin@gmail.com", password: "admin123" };
    const userCred = { email: "user@gmail.com", password: "user123" };

 
    if (!email || !password) {
      setError("Email болон password хоёул заавал бөглөнө үү.");
      setLoading(false);
      return;
    }


    setTimeout(() => {
      if (email === adminCred.email && password === adminCred.password) {
        const user = { email, role: "admin" };
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/admin/FoodMenu");
      } else if (email === userCred.email && password === userCred.password) {
        const user = { email, role: "user" };
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      } else {
        setError("Email эсвэл password буруу байна.");
      }
      setLoading(false);
    }, 600); 
  };

  return (
    <Card className="w-full max-w-sm mx-auto mt-20 shadow">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 mt-1" role="alert">
                {error}
              </p>
            )}
          </div>

        
          <button type="submit" className="hidden" aria-hidden="true" />
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button
          type="button"
          onClick={handleSubmit}
          className="w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

      
        <GoogleSignIn />
      </CardFooter>
    </Card>
  );
}

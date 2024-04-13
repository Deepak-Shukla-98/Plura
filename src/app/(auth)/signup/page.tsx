"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/components/services/axios";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

const metadata: Metadata = {
  title: "Sign Up",
  description: "Created by Plura",
};

interface data {
  email: String;
  password: String;
  first_name: String;
  last_name: String;
}
export default function LoginForm() {
  const router = useRouter();
  const [data, setData] = useState<data>({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const sign_Up = async (values: data) => {
    await signUp({
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
    });
    router.push("/signin");
  };
  return (
    <div className="h-screen w-screen flex items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first_name">First name</Label>
                <Input
                  id="first_name"
                  placeholder="Max"
                  required
                  name="first_name"
                  onChange={(e) =>
                    setData((o) => ({ ...o, first_name: e.target.value }))
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last_name">Last name</Label>
                <Input
                  id="last_name"
                  placeholder="Robinson"
                  required
                  name="last_name"
                  onChange={(e) =>
                    setData((o) => ({ ...o, last_name: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                name="email"
                onChange={(e) =>
                  setData((o) => ({ ...o, email: e.target.value }))
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={(e) =>
                  setData((o) => ({ ...o, password: e.target.value }))
                }
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={() => sign_Up(data)}
            >
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="signin" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
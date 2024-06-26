"use client";
import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const [routes, setRoutes] = useState([
    {
      id: 1,
      path: "home",
      name: "Home",
      active: true,
      icon: <Home className="h-4 w-4" />,
    },
    {
      id: 2,
      path: "messenger",
      name: "Messenger",
      active: false,
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      id: 3,
      path: "profile",
      name: "Profile",
      active: false,
      icon: <Package className="h-4 w-4" />,
    },
    {
      id: 4,
      path: "settings",
      name: "Settings",
      active: false,
      icon: <Users className="h-4 w-4" />,
    },
  ]);
  useEffect(() => {
    setRoutes((o) => {
      let active = o
        .filter((f) => f.path === pathname.split("/")[1])
        .map((d) => ({ ...d, active: true }));
      let nonactive = o
        .filter((f) => f.path !== pathname.split("/")[1])
        .map((d) => ({ ...d, active: false }));
      return [...active, ...nonactive].sort((a, b) => a.id - b.id);
    });
  }, [pathname]);

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {routes.map((d) => (
              <Link
                href={d.path}
                className={
                  d.active
                    ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                    : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                }
              >
                {d.icon}
                {d.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

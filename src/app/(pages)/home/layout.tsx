"use client";
import { useRouter } from "next/navigation";
import { useSharedContext } from "@/components/context/sharedContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    state: { isAuthenticated },
  } = useSharedContext();
  const router = useRouter();

  if (!isAuthenticated) {
    return router.push("/signin");
  } else {
    return <>{children}</>;
  }
}

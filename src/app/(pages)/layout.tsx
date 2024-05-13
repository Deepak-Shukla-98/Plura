"use client";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";
import isAuth from "@/components/utils/auth";
import Header from "./@header/page";
import { Sidebar } from "./@sidebar/page";
import { Suspense } from "react";
import Loader from "@/components/uicomponents/spinner";
import Breadcrumb from "@/components/uicomponents/breadcurmb";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const metadata: Metadata = {
  title: "Plura",
  description: "Created by Plura",
};

function HomeLayout({
  children,
  header,
  sidebar,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Suspense fallback={<Loader display={"grid"} />}>
          <div style={{ maxHeight: "90vh", overflowY: "scroll" }}>
            <div className="m-3 text-sm">
              <Breadcrumb />
            </div>
            <div className="p-2">{children}</div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
export default isAuth(HomeLayout);

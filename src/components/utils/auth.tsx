"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSharedContext } from "../context/sharedContext";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const {
      state: { isAuthenticated },
    } = useSharedContext();
    console.log({ isAuthenticated });
    useEffect(() => {
      if (!isAuthenticated) {
        return redirect("/signin");
      }
    }, []);

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}

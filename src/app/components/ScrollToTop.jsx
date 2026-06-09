"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
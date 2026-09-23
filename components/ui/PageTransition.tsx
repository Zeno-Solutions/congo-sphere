"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./Loader";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    if (pathnameRef.current === pathname) {
      return;
    }

    pathnameRef.current = pathname;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const frameId = requestAnimationFrame(() => {
      setIsLoading(true);
      timeoutId = setTimeout(() => setIsLoading(false), 300);
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pathname]);

  if (isLoading) {
    return <PageLoader />;
  }

  return <div className="animate-in fade-in-0 duration-300">{children}</div>;
}

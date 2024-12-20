"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link
      href="/"
      className="font-normal flex items-center text-sm mr-4 px-2 py-1 relative z-20"
    >
      <Image
        src={(resolvedTheme === "dark" || theme === "dark") ? "/vl_white.svg" : "/vl_black.svg"}
        alt="voiceloop | amplify what matters."
        width={24}
        height={24}
      />
      <span className="font-medium text-[rgb(var(--text-primary))] dark:text-[rgb(var(--background-primary))]">
        &nbsp;voiceloop
      </span>
    </Link>
  );
};

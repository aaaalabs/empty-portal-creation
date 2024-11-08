"use client";
import React from "react";
import { useTheme } from "next-themes";
import { features } from "@/constants/features";
import Image from "next/image";

export const GridFeatures = () => {
  const { theme } = useTheme(); // Get the current theme ("light" or "dark")

  return (
    <div className="flex justify-center w-full relative z-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        {features.map((feature, index) => {
          // Select the correct icon for each feature based on the theme
          const icon =
            feature.iconLight && feature.iconDark
              ? theme === "dark"
                ? feature.iconDark
                : feature.iconLight
              : feature.icon;

          return (
            <Feature
              key={feature.title}
              {...feature}
              index={index}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
};

// Feature component to display individual feature
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  // Find the first colon to bold the initial part of the description
  const colonIndex = description.indexOf(": ");
  const hasColon = colonIndex !== -1;

  const boldText = hasColon ? description.substring(0, colonIndex + 1) : "";
  const restOfDescription = hasColon
    ? description.substring(colonIndex + 2)
    : description;

  return (
    <div
      className={`flex flex-col lg:border-r py-10 relative group dark:border-neutral-800 ${
        index === 0 || index === 4 ? "lg:border-l dark:border-neutral-800" : ""
      } ${index < 4 ? "lg:border-b dark:border-neutral-800" : ""}`}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {boldText && <span className="font-semibold">{boldText} </span>}
        {restOfDescription}
      </p>
    </div>
  );
};

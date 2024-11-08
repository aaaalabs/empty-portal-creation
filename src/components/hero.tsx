"use client";

import React from "react";
import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import { MvCurrentKpis } from "@/db";
import { Avatar, AvatarImage } from "./ui/avatar";
import { getOptimizedImageUrl } from "@/utils/imageKit";
import { MapSection } from './map-section';
import { GradientButton } from "./ui/gradient-button";

export const Hero = ({
  currentKpis,
}: {
  currentKpis: MvCurrentKpis | null;
}) => {
  const router = useRouter();

  return (
    <div className="max-w-[1200px] mx-auto px-3 xxs:px-4 sm:px-8 flex flex-col min-h-screen pt-32 xxs:pt-30 sm:pt-32 md:pt-48 relative">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.9 }}
        className="text-center mb-6"
      >
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full px-4 py-2 inline-block">
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
          Be Part of the Re-humanization Movement – See Our First Case Study Results
          </p>
        </div> 
      </motion.div>

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.01em] leading-[1.1] sm:leading-tight max-w-6xl mx-auto text-center relative z-10 antialiased"
      >
        <Balancer>
          Stop Losing Members<br />
          <span className="relative">
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ 
                backgroundPosition: ["0% 50%", "200% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 
              bg-[size:300%] bg-clip-text text-transparent"
            >
              Start Growing Revenue
            </motion.span>
          </span>
        </Balancer>
      </motion.h1>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 max-w-2xl mx-auto text-center mt-8 mb-12"
      >
        <Balancer>
          Harness AI to Build Lasting Connections, Not Just Numbers.
        </Balancer>
      </motion.p>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
        className="text-center mt-8 sm:mt-12 md:mt-14 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10 px-4"
      >
        <div className="flex items-center justify-center flex-wrap gap-2">
          <span className="text-blue-600 dark:text-blue-400 text-2xl font-semibold">
            {currentKpis?.product_variants_delivered}{" "}
          </span>
          Matches in 3 Month for{" "}
          <div className="flex -space-x-2 sm:-space-x-3 mx-2">
            {currentKpis?.random_image_urls
              ?.filter((url) => url && url.trim() !== "")
              .map((url, index) => (
                <Avatar
                  key={index}
                  className="border-2 border-white w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                >
                  <AvatarImage
                    src={getOptimizedImageUrl(url, 50)}
                    alt={`Avatar ${index + 1}`}
                  />
                </Avatar>
              ))}
          </div>
          <span className="whitespace-nowrap">
            <span className="text-blue-600 dark:text-blue-400 text-2xl font-semibold">
              {currentKpis?.members}
            </span>{" "}
            Thriving Entrepeneurs Worldwide
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-center mt-8 sm:mt-12 md:mt-16 relative z-10 px-4"
      >
        <GradientButton
          containerClassName="w-full sm:w-auto"
          className="w-full sm:w-auto font-medium"
          onClick={() => {
            window.location.href = "https://voiceloop.fillout.com/t/jwmqMMXUsnus";
          }}
        >
          Unlock Your Retention Strategy
        </GradientButton>
        
        <Button
          variant="simple"
          onClick={() => {
            const element = document.getElementById('testimonials');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="w-full sm:w-auto flex items-center justify-center group text-xl px-8 sm:px-14 py-5 sm:py-6 font-medium transition-all duration-200 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <span>Success Stories</span>
          <HiArrowRight className="group-hover:translate-x-1 stroke-[1px] h-6 w-6 transition-transform duration-200 ml-2 relative top-[1px]" />
        </Button>
      </motion.div>
      <MapSection />
    </div>
  );
};

export const metadata = {
  title: "Signup - voiceloop | amplify what matters",
  description: "Re-humanize your community with VoiceLoop. We use AI to cut the noise and amplify what matters - genuine human connections.",
  openGraph: {
    images: ["https://ik.imagekit.io/libralab/VoiceLoop/social"],
  },
};

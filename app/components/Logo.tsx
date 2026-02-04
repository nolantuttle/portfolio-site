"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { assets } from "../../assets/assets";

type LogoProps = {
  width?: number;
  height?: number
}

export default function Logo({ width = 50, height = 25 }: LogoProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Image
      src={currentTheme === "dark" ? assets.logo : assets.logo}
      alt="Logo"
      width={width}
      height={height}
    />
  );
}
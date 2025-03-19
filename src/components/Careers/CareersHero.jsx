"use client";
import React from "react";
import heroImage from "../../../public/Careers/hero.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CareersHero = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);
  const title =
    pathSegments.length === 1
      ? "Careers"
      : pathSegments[pathSegments.length - 1];

  return (
    <section className="containers pt-44">
      <h1 className="main-heading !text-altermain capitalize">{title}</h1>
      <Image
        src={heroImage}
        alt="hero"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto max-h-[530px]-- object-cover mt-10"
      />
    </section>
  );
};

export default CareersHero;

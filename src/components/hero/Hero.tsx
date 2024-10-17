import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between">
      <div className="flex w-full z-0 flex-grow">
        <div className="w-1/2 p-8 flex flex-col justify-center text-left">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-gray-800">Spaced</h1>
          <h1 className="text-5xl md:text-7xl lg:text-9xl">Anywhere</h1>
        </div>
        <div className="w-1/2 relative flex-grow">
          <Image src="/images/hero.jpg" className="object-cover h-full" layout="fill" alt="Picture of the author" />
        </div>
      </div>
    </section>
  );
}

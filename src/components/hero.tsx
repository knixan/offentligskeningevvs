import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <>
      {/* Mobil */}
      <div className="flex md:hidden flex-col items-center text-center px-4 pt-10">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-red-800">
          Din lokala expert på VVS!
        </h1>
        <p className="mb-6 text-lg font-semibold text-sky-700">
          Små i storlek – stora på service
        </p>
        <Button asChild>
          <Link href="#contact" className="inline-flex  bg-red-800 items-center">
            Kontakta oss
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex justify-center mt-8">
          <Image
            src="/images/skeningebuss2.png"
            alt="Skeninge VVS Rörbuss"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex h-screen justify-center items-center bg-opacity-100">
  <div className="relative h-full w-full">
    <Image
      src="/images/skeningebuss2.png"
      alt="Skeninge VVS Rörbuss"
      fill
      className="h-full object-contain w-full"
      priority
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 text-center">
      <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-red-700">
        Din lokala expert på VVS!
      </h1>
      <p className="mb-6 text-4xl font-extrabold text-gray-100">
        Små i storlek – stora på service
      </p>
      <Button asChild>
        <Link
          href="#contact"
          className="inline-flex items-center bg-red-800 hover:scale-105 hover:bg-red-900 transition-transform duration-200"
        >
          Kontakta oss
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
</div>


    </>
  );
};

export default Hero;

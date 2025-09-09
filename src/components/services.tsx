import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Flame } from "lucide-react";
import { FaShower } from "react-icons/fa";
import { GiKitchenTap, GiTap } from "react-icons/gi";
import { TbFridge } from "react-icons/tb";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";

// Definierar typer för tjänster för bättre typsäkerhet
interface ServiceItem {
 icon: React.ElementType;
title: string;
description: string;
}

const services: ServiceItem[] = [
  {
    icon: Wrench,
    title: "Rörinstallationer",
    description: "Nyinstallation, omdragning och byte av vatten- och avloppsledningar i kök, badrum och hela fastigheter.",
  },
  {
    icon: Flame,
    title: "Värmesystem",
    description: "Installation, service och felsökning av värmepumpar, radiatorer och golvvärme. Vi hjälper dig även att sänka dina uppvärmningskostnader med smarta lösningar.",
  },
  {
    icon: FaShower,
    title: "Badrumsrenovering",
    description: "Vi utför allt VVS-arbete vid badrumsrenoveringar enligt gällande branschregler. Montering av WC, dusch, handfat och badkar.",
  },
  {
    icon: GiKitchenTap,
    title: "Köksinstallationer",
    description: "Professionell installation av diskmaskin, köksblandare, vattenlås och avlopp vid köksrenovering eller nyinstallation.",
  },
  {
    icon: GiTap,
    title: "Service & underhåll",
    description: "Vi underhåller och kontrollerar ditt VVS-system för att förebygga problem, spara energi och förlänga livslängden.",
  },
  {
    icon: TbFridge,
    title: "Installation av vitvaror & apparater",
    description: "Anslutning av tvättmaskin, ismaskin, kaffemaskin och andra vattenanslutna produkter.",
  },
  {
    icon: MdOutlineEnergySavingsLeaf,
    title: "Energisparande lösningar",
    description: "Vi hjälper dig hitta miljövänliga alternativ som sänker din energiförbrukning och gör skillnad i plånboken.",
  },
];

const Services: React.FC = () => (
  <section
    id="service"
    className="container mx-auto py-16 px-4" // Använder container för bättre responsivitet
  >
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-sky-700 mb-4">Våra Tjänster</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Vi erbjuder ett brett spektrum av VVS-tjänster för både privatpersoner och företag. Från kompletta badrumsrenoveringar till service och energirådgivning.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <Card
          key={service.title}
          className="flex flex-col transition-all duration-300 hover:shadow-lg border-border/50"
        >
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            {/* Använder text-primary för att ikonfärgen ska följa temat */}
            <service.icon className="text-red-700 h-6 w-6" />
            <CardTitle className="text-xl font-semibold text-sky-700">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow pt-2"> {/* flex-grow säkerställer att alla kort har samma höjd */}
            <p className="text-base text-muted-foreground leading-relaxed">
  {service.description}
 </p>
 </CardContent>
 </Card>
 ))}
 </div>

 {/* Bildsektion */}
 <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12">
 <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
 <Image
 src="/images/skeningevvs-frontbuss.png"
 alt="Skeninge VVS servicebil"
width={500} // Justerade storlek för bättre anpassning
 height={500}

 />
 </div>
</div>
 </section>
);

export default Services;
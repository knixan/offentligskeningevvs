import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const PersonCard: React.FC<{
  img: string;
  name: string;
  title: string;
  phone?: string;
  mail?: string;
}> = ({ img, name, title, phone, mail }) => (
  <Card className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 rounded-2xl border border-border dark:border-gray-800 shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200">
    <Image
      className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-border"
      src={img}
      alt={name}
      width={80}
      height={80}
    />
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>

      {phone && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <a href={`tel:${phone}`} className="text-primary hover:underline">
            {phone}
          </a>
        </div>
      )}

      {mail && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <a href={`mailto:${mail}`} className="text-primary hover:underline">
            {mail}
          </a>
        </div>
      )}
    </div>
  </Card>
);

const Contact: React.FC = () => (
  <section id="contact" className="flex flex-wrap  justify-center gap-6 p-6">
    <PersonCard
      img="/images/kristian.png"
      name="Kristian Engelke"
      title="VVS-montör"
      phone="0735-358075"
      mail="skeningevvsab@msn.se"
    />
    <PersonCard
      img="/images/bosse.png"
      name="Bosse Engelke"
      title="Ägare/VVS-montör"
      phone="0708-417290"
      mail="skeningevvsab@msn.se"
    />
    <PersonCard
      img="/images/nina.png"
      name="Nina Engelke"
      title="Ägare/Administratör"
      mail="skeningevvsab@msn.se"
    />
    <PersonCard
      img="/images/tyson.png"
      name="Tyson"
      title="VVS-Vovve/Säkerhetsansvarig"
      mail="skeningevvsab@msn.se"
    />

    {/* Google map */}
    <div className="w-full mt-6 rounded-2xl overflow-hidden shadow-md">
      <div className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?f=q&source=embed&hl=sv&q=58.386333,15.085444&output=embed"
          frameBorder={0}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  </section>
);

export default Contact;

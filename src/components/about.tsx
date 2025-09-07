import React from "react";
import Image from "next/image";

const About: React.FC = () => (
  <section
    id="omoss"
    className="flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl max-w-6xl mx-auto my-10 bg-card shadow-md border border-border m-4"
  >
    <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 text-left">
      <h2 className="text-2xl font-bold text-sky-700 mb-4">Om oss</h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        Skeninge VVS AB är ett VVS-företag som grundades 1986 i Skänninge. Vi
        erbjuder pålitliga tjänster inom värme, ventelation och sanitet för både
        privatpersoner och företag. Med lång erfarenhet och lokal förankring
        levererar vi trygga lösningar med hög kvalitet.
        <br />
        Vi har certifierade VVS-tekniker med lång erfarenhet och hög kompetens
        för att säkerställa professionellt utförda arbeten. Vi strävar efter att
        leverera bra kundservice genom att vara lyhörda för kundernas behov, ge
        tydlig information och hålla hög kvalitet på våra tjänster.
        <br />
        Vi är certifierade installatörer och har den nödvändiga expertisen för
        att utföra VVS-arbeten på ett professionellt och noggrant sätt. Vi
        använder enbart branschgodkända material av hög kvalitet för att
        säkerställa långvariga och pålitliga VVS-lösningar.
      </p>
    </div>

    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
      <Image
        src="/images/kristiantysonbosse.png"
        alt="Teamet från Skeninge VVS"
        width={600}
        height={400}
        className="rounded-lg "
       
      />
    </div>
  </section>
);

export default About;

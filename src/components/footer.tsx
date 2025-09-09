
import Link from "next/link";
import Logo from "./Logo"; // Se till att din Logo-komponent är importerad

const Footer: React.FC = () => {
  const footerLinks = [
    { href: "#omoss", label: "Om oss" },
    { href: "#service", label: "Våra Tjänster" },
    { href: "#contact", label: "Kontakta oss" },
  ];

  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Övre sektion med logotyp, adress och länkar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Vänster kolumn: Länkar */}
          <div className="flex flex-col items-center md:items-start">
            
            <ul className="space-y-2 text-center md:text-left">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sky-600 hover:text-primary transition-colors font-semibold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mitten kolumn: Adress och telefon */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold text-primery mb-4">Information</h3>
            <p className="text-muted-foreground mb-2">
              <strong>Postadress:</strong> Folkungagatan 35 E, 595 32 MJÖLBY
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Besöksadress:</strong> Fabriksgatan 6, 596 33 Skänninge
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>E-post:</strong> skeningevvsab@msn.se
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Bosse Engelke:</strong> 0708-417290
            </p>
            <p className="text-muted-foreground">
              <strong>Kristian Engelke:</strong> 0735-358075
            </p>
          </div>

          {/* Höger kolumn: Logotyp */}
          <div className="flex flex-col items-center md:items-end">
            <Logo className="h-20 w-auto" />
          </div>
        </div>

        {/* Nedre sektion: Copyright och designinfo */}
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8 mt-8">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Skeninge VVS AB. Alla rättigheter reserverade.
          </p>
          <p>
            Kod & Design By Josefine Eriksson
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
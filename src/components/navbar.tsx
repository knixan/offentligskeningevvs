"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/toggle-theme-button";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const navLinks = [
    { href: "#omoss", label: "Om oss" },
    { href: "#service", label: "Våra Tjänster" },
    { href: "#contact", label: "Kontakta oss" },
  ];

  return (
    <nav className="bg-background/95 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Vänster sida: Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            {isClient && <Logo className="h-14 w-auto" />}
          </Link>
        </div>

        {/* Mitten: Navigeringslänkar (visas endast på desktop) */}
        <div className="hidden md:flex md:w-auto">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sky-600 text-lg text-semibold hover:text-red-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Höger sida: Temaväxling och Mobila kontroller */}
        <div className="flex items-center space-x-2">
          {/* Temaknappen är nu alltid synlig */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>

          {/* Thema knapp i mobilläge */}
          <div className="md:hidden">
            <ModeToggle />
          </div>
          {/* Hamburgermenyn för mobiler */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="flex items-center p-2 text-foreground"
                  aria-label="Öppna huvudmeny"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col">
                <SheetTitle className=" sr-only">Navigationsmeny</SheetTitle>
                <SheetDescription className="sr-only">
                  Huvudnavigationsmeny med länkar till olika sektioner på sidan.
                </SheetDescription>
                <div className="flex justify-end items-center mb-4">
                  {/* Temaknappen här endast för att visa att den inte ska vara där längre */}
                </div>
                <ul className=" space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="p-4 text-sky-700 text-lg transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
          {/* Temaknappen för mobila enheter, nu bredvid hamburgermenyn */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

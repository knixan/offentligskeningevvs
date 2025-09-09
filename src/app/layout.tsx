import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Skeninge VVS AB - Rörmokare, Badrumsrenovering & Värmesystem i Skänninge, Mjölby & Östergötland",
  description: "Skeninge VVS AB – Din lokala expert på VVS-tjänster. Vi erbjuder professionella rörinstallationer, badrumsrenovering, värmesystem och energibesparande lösningar i Skänninge, Mjölby, Linköping, Boxholm, Tranås, Vadstena, Motala och närliggande orter.",
  keywords: "VVS, Skänninge, Mjölby, Linköping, Boxholm, Tranås, Vadstena, Motala, Vädersta, Vikingstad, Mantorp, Rörmokare, Badrumsrenovering, Värmepumpar, Golvvärme, VVS-installation, VVS-tjänster",
  author: "Skeninge VVS AB",
  robots: "index, follow",
  openGraph: {
    title: "Skeninge VVS AB – Professionella VVS-tjänster i Skänninge, Mjölby & Östergötland",
    description: "Familjeföretag med över 35 års erfarenhet av VVS. Vi erbjuder certifierade VVS-tjänster för privatpersoner och företag i hela Östergötland.",
    url: "https://skeningevvsab.pages.dev/",
    images: [{ url: "https://skeningevvsab.pages.dev/content/Images/SkeningeVVS.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

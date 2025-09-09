
"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"; // Importera useEffect och useState

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // State för att veta om komponenten är monterad

  useEffect(() => {
    setMounted(true); // Sätt mounted till true när komponenten har monterats
  }, []);

  // Bestäm den initiala bildkällan baserat på om komponenten är monterad och vilket tema som är aktivt
  // Om inte monterad, använd en standardbild för server-rendering.
  // Om monterad, använd den faktiska temabildkällan.
  const imageSrc = mounted
    ? (resolvedTheme === "dark" ? "/images/skeningevvs-vit.png" : "/images/skeningevvs.png")
    : "/images/skeningevvs.png"; // Standardbild för SSR

  // Använd resolvedTheme för att bestämma det faktiska temat
  const isDarkMode = resolvedTheme === "dark";

  return (
    <Image
      // src={isDarkMode ? "/images/skeningevvs-vit.png" : "/images/skeningevvs.png"} // Gammal rad
      src={imageSrc} // Använd den dynamiskt bestämda källan
      alt="Skeninge VVS Logo"
      width={600}
      height={600}
      className={className}
      priority={false} // För att minska risken för SSR-problem. Om loggan är kritisk för ovanstående, ställ till true.
    />
  );
};

export default Logo;
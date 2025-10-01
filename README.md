⚙️ Installation & Utveckling

# Skeninge VVS AB — Företagssida

Detta repository innehåller källkoden till Skeninge VVS AB:s företagswebbplats. Webbsidan är byggd med moderna verktyg för att ge god prestanda, tillgänglighet och enkel drift.

## Sammanfattning

- Projekt: Skeninge VVS AB — företagssida
- Teknisk grund: Next.js (App Router), TypeScript, Tailwind CSS
- Drift: För närvarande distribuerad via Vercel
- Live: https://skeningevvs.se 

## Högnivåfunktioner

- Responsiv layout och mobilanpassning
- Ljust/mörkt tema med `next-themes`
- Åtkomliga och återanvändbara UI-komponenter (shadcn/ui)
- Startsida med hero-sektion och tydlig Call To Action
- Sidor: Om oss, Tjänster, Kontakt
- Google Maps-embed för adressvisning
- Grundläggande SEO: metadata, Open Graph och JSON-LD

## Projektstruktur (urval)

`public/` — statiska filer och bilder

`src/app/` — Next.js app-router (filer som `head.tsx`, `layout.tsx`, `page.tsx`)

`src/components/` — komponenter för layout, hero, footer, kontakt m.m.

`src/lib/` — hjälpfunktioner

## Installation och körning lokalt

Följande kommandon körs i projektmappen (förutsätter Node.js och npm installerat):

```bash
git clone https://github.com/knixan/skeningevvsab.git
cd skeningevvsab
npm install
npm run dev
# Öppna sedan http://localhost:3000 i din webbläsare
```

## Bygg och distribution

Bygg för produktion:

```bash
npm run build
npm run start
```

Rekommendation för drift: använd Vercel för enkel integrering med Next.js App Router. Om domänen hanteras i Loopia, peka DNS (A/CNAME) mot Vercel enligt deras instruktioner.

## SEO och driftstips

- Säkerställ unika och beskrivande `title` och `description` per sida.
- Använd Open Graph (`og:`) och schema.org (JSON-LD) för bättre sökresultat och delningar.
- Publicera en `robots.txt` och `sitemap.xml` i `public/` (filer finns i detta repository).
- Verifiera domänen i Google Search Console (TXT-post hos din DNS-leverantör, t.ex. Loopia).
- Använd optimerade bilder (webp/avif) och ange `width`/`height` för bättre LCP.

## Innehåll och tillgänglighet

- Alla bilder bör ha beskrivande `alt`-texter.
- Rubriker (`h1`-`h3`) används semantiskt för logisk struktur.
- Fokuspunkter (keyboard) och kontraster kontrolleras för WCAG-efterlevnad.

## Lägg till sidor i `sitemap.xml`

Sitemapen som ligger i `public/sitemap.xml` är en grund och bör uppdateras när nya sidor skapas. Lägg till en `<url>`-sektion för varje publik undersida.

## Contributing

Förändringar och nya funktioner hanteras via pull requests. Följ dessa riktlinjer:

1. Skapa en branch med kort beskrivande namn: `feature/namn` eller `fix/namn`.
2. Skriv tydliga commit-meddelanden.
3. Öppna en pull request med vad som ändrats och varför.

## Kontakt

Projektets kontaktperson och utvecklare: Josefine Eriksson

Webb: https://kodochdesign.se

## Licens

Licensera projektet enligt önskemål. Om inget anges gäller inga särskilda licensrättigheter.

## Ändringslogg

Se Git-historiken för ändringar. För större releaser, överväg att lägga till en `CHANGELOG.md`.

```

```


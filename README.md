# 💧 Skeninge VVS AB – Personlig hemsida

En modern, responsiv och personlig hemsida för **Skeninge VVS AB**, ett familjeägt VVS-företag i Skänninge med lång erfarenhet av rörinstallationer, badrumsrenoveringar och värmesystem.  
Projektet är byggt med **Next.js 13 (App Router)**, **TypeScript**, **TailwindCSS** och **shadcn/ui** för att skapa en stilren, användarvänlig och lättnavigerad webbplats.

---

## 🚀 Funktioner

- **Responsiv design** – fungerar på alla enheter (mobil, surfplatta och desktop)  
- **Ljust & mörkt tema** – automatisk anpassning efter systeminställning  
- **Startsida med hero-sektion** – tydligt budskap och CTA (Kontakta oss)  
- **Om oss-sektion** – företagets historia, värderingar och erfarenhet  
- **Tjänster-sektion** – ikonbaserade kort med beskrivningar av VVS-tjänster  
- **Kontaktsektion** – personalpresentation med bilder, telefonnummer och mail  
- **Google Maps-integration** – visar företagets besöksadress  
- **Footer** – med kontaktinformation, adress och logotyp  
- **SEO-optimerad** – metadata, OpenGraph och beskrivningar för sökmotorer  

---

## 🖼️ Screenshots

### 💻 Desktop
![Screenshot av desktop-versionen](./public/images/screenshot-desktop.png)

### 📱 Mobile
![Screenshot av mobil-versionen](./public/images/screenshot-mobile.png)

---

## 📱 Mockup (Alla enheter)

Här kan du lägga in en mockup-bild på hur hemsidan ser ut i **mobil, surfplatta och desktop**.  
Exempel:  
![All Devices Mockup](./public/images/mockup-all-devices.png)

---

## 📂 Filstruktur (förenklad översikt)

```bash
.
├── public
│   ├── images/
│   │   ├── bosse.png
│   │   ├── kristian.png
│   │   ├── nina.png
│   │   ├── tyson.png
│   │   ├── skeningebuss2.png
│   │   ├── skeningevvs-frontbuss.png
│   │   ├── skeningevvs-vit.png
│   │   ├── SkeningeVVS.png
│   │   └── kristiantysonbosse.png
├── src
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── head.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── services.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── Logo.tsx
│   │   ├── theme-provider.tsx
│   │   └── toggle-theme-button.tsx
│   └── components/ui/ (shadcn/ui-komponenter)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
🛠️ Teknisk stack
Next.js 13 (App Router) – React-ramverk för server-side rendering & statisk generering

TypeScript – Typsäker kod

TailwindCSS – Utility-first CSS för snabb styling

shadcn/ui – Tillgängliga UI-komponenter

Lucide Icons – Ikoner för tjänstekorten

next-themes – Hantering av mörkt & ljust tema

Google Maps Embed – Integrerad karta i kontaktsektionen

⚙️ Installation & utveckling
Klona projektet:

bash
git clone https://github.com/knixan/skeningevvsab.git
cd skeninge-vvs
Installera beroenden:

bash
npm install
Starta utvecklingsserver:

bash
npm run dev
Öppna i webbläsaren:

arduino

http://localhost:3000
🌍 Live-demo
https://skeningevvs.se

👩‍💻 Utvecklare
Projektet är utvecklat av:
Josefine Eriksson – Fullstack utvecklare, Graphic/webb Designer & UI/UX Designer
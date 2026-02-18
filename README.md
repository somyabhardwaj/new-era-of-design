company-website/
│
├── app/
│   ├── layout.tsx              // Root layout (navbar + footer)
│   ├── page.tsx                // Home page (/)
│   ├── loading.tsx
│   ├── not-found.tsx
│   │
│   ├── about/
│   │   └── page.tsx            // /about
│   │
│   ├── services/
│   │   ├── page.tsx            // /services
│   │   └── [slug]/
│   │       └── page.tsx        // /services/web-development
│   │
│   ├── portfolio/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── blog/                   // Optional (for SEO)
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── contact/
│   │   ├── page.tsx
│   │   └── route.ts            // Contact form handler
│   │
│   └── api/                    // Optional APIs
│       └── newsletter/
│           └── route.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/               // Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   │
│   └── ui/                     // Buttons, cards, etc.
│
├── lib/
│   ├── utils.ts
│   └── data.ts
│
├── public/
│   ├── images/
│   ├── logos/
│   └── favicon.ico
│
├── styles/
│   └── globals.css
│
├── middleware.ts               // Optional (e.g., redirects)
├── next.config.js
├── tsconfig.json
└── package.json
# enigma
# new-era-of-design

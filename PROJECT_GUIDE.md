# Sovertick Project Guide (Start to End)

## 1. Project Overview

This is a single-page marketing website for **Sovertick**, built with:

- React 18 + TypeScript
- Vite
- Tailwind CSS + custom CSS
- Framer Motion
- i18next (multi-language support)
- React Router (home + 404)
- TanStack Query (available globally)

Primary live page:

- `src/mvc/views/pages/Index.tsx`

---

## 2. How the App Boots

### Entry Flow

1. `src/main.tsx`
2. `src/App.tsx`
3. Route `/` renders `src/mvc/views/pages/Index.tsx`

### Global Providers (`src/App.tsx`)

- `QueryClientProvider`
- `TooltipProvider`
- `VisitorProvider`
- `Toaster` + `Sonner`
- `BrowserRouter`

---

## 3. Folder Structure (Practical View)

```txt
src/
  main.tsx
  App.tsx
  mvc/
    controllers/
      hooks/
        use-mobile.tsx
        use-toast.ts
        use-visitor-profile.tsx
    models/
      visitor-profile.model.ts
    views/
      pages/
        Index.tsx
        NotFound.tsx
        home/
          data.ts                     # barrel export
          content/
            index.ts                  # content barrel
            services.ts
            portfolio.ts
            about.ts
            testimonials.ts
            vision.ts
            faq.ts
      components/
        ... reusable UI sections (Hero, Services, Sectors, etc.)
  shared/
    i18n/
      index.ts                        # translations + language detector
    styles/
      index.css                       # global theme and section styling
    ui/
      ... shadcn/radix UI primitives
```

---

## 4. Core Page Architecture (`Index.tsx`)

`Index.tsx` is the full landing page composition and contains:

- Intro loader
- Sticky navbar
- Hero section
- Services
- Stats
- Process/Why section
- Projects (`work`)
- Tech stack
- Testimonials
- Vision/Future
- About (vision + mission + values + beliefs)
- FAQ
- Contact form
- Footer
- Floating WhatsApp support CTA

### State handled in `Index.tsx` (main examples)

- Loader visibility
- Navbar solid on scroll
- Mobile menu toggle
- Active section for nav highlight
- Cursor effects
- Portfolio slider indicator
- Modal project details
- Contact form send/submitted states
- WhatsApp button visibility on scroll

---

## 5. Content System (What to Edit)

Main content is split into modular files:

- `src/mvc/views/pages/home/content/services.ts`
- `src/mvc/views/pages/home/content/portfolio.ts`
- `src/mvc/views/pages/home/content/about.ts`
- `src/mvc/views/pages/home/content/testimonials.ts`
- `src/mvc/views/pages/home/content/vision.ts`
- `src/mvc/views/pages/home/content/faq.ts`

Barrel:

- `src/mvc/views/pages/home/content/index.ts`
- `src/mvc/views/pages/home/data.ts` (re-export)

If you want to change text/data quickly, these files are your first target.

---

## 6. Internationalization (i18n)

File:

- `src/shared/i18n/index.ts`

What it does:

- Defines translation resources (`en`, `ar`, `es`, `nl`, `ur`)
- Detects language using `localStorage` and browser navigator
- Sets fallback language to `en`

`Index.tsx` uses `useTranslation()` and keys like:

- `nav.home`
- `services.items`
- `work.viewProject`
- `about.visionText1`
- `contact.submit`

---

## 7. Projects Section Assets

Projects now use local prototype SVGs:

- `public/projects/web-prototype.svg`
- `public/projects/mobile-prototype.svg`
- `public/projects/ai-prototype.svg`

Mapped from:

- `src/mvc/views/pages/home/content/portfolio.ts`

This avoids random stock photos and keeps a consistent branded visual style.

---

## 8. Styling System

Main stylesheet:

- `src/shared/styles/index.css`

Contains:

- Global theme tokens
- Section backgrounds and effects
- Component utility styles (buttons, cards, dots, overlays, etc.)
- Animations (`@keyframes`)
- Responsive behavior (`@media`)
- Floating WhatsApp button style

---

## 9. Start-to-End User Journey

1. User opens `/`
2. Intro loader appears
3. Main page fades in
4. User navigates via sticky header
5. Sections animate into view
6. User checks projects and opens project modal
7. User reads FAQ and About
8. User submits contact form or taps WhatsApp support

---

## 10. Development Commands

Install:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

Type-check:

```bash
npx tsc -p tsconfig.app.json --noEmit
```

Lint:

```bash
npm run lint
```

---

## 11. Recommended Next Engineering Steps

1. Split `Index.tsx` into section components (`sections/Hero`, `sections/Work`, etc.) to reduce file size.
2. Normalize i18n encoding issues in non-English text files.
3. Move constants (WhatsApp number, email, social links) to a central config file.
4. Add targeted tests for critical UI states (FAQ toggle, nav active section, modal behavior).
5. Add CI checks for typecheck + lint + tests.

---

## 12. Quick Edit Cheat Sheet

- Change services cards: `src/mvc/views/pages/home/content/services.ts`
- Change projects/cards/images: `src/mvc/views/pages/home/content/portfolio.ts` + `public/projects/*`
- Change FAQ: `src/mvc/views/pages/home/content/faq.ts`
- Change about text: `src/shared/i18n/index.ts` under `about.*`
- Change footer/whatsapp behavior: `src/mvc/views/pages/Index.tsx`
- Change visual theme: `src/shared/styles/index.css`


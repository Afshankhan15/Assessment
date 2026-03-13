# 💳 Assessment

## 🔗 Quick Links

| | |
|---|---|
| **🌐 Live Demo** | [https://afshankhan15-assessment.vercel.app](https://afshankhan15-assessment.vercel.app) |
| **📦 Repository** | [https://github.com/Afshankhan15/Assessment](https://github.com/Afshankhan15/Assessment) |
---

## ✨ Key Features

### 🎯 Core Interactions

| Feature | Description | Implementation |
|---------|-------------|----------------|
| **➕ Add New Card** | Modal with card holder name input; expiry date and card number are randomly generated. New card appears in carousel immediately. | `add-card-dialog.tsx` + `card-generator.ts` |
| **❄️ Freeze/Unfreeze Card** | Toggles frozen status on active card. Frozen card displays with reduced opacity and "Card Frozen" overlay. Button label toggles dynamically. | `use-cards.ts` + `toggleFreeze()` |
| **🎠 Debit Card Carousel** | Swipeable/scrollable carousel with dot indicators. Active card syncs with all panels. | `embla-carousel-react` + `debit-card-carousel.tsx` |
| **📂 Collapsible Panels** | "Card details" and "Recent transactions" sections with smooth animations. | `@radix-ui/react-collapsible` |
| **✅ Form Validation** | Card holder name must be at least 3 characters; inline error shown on submit. | React state + conditional rendering |
| **💾 Persistent Storage** | Cards stored in `localStorage`; seeded with 3 cards on first load. | `cards-api.ts` + `localStorage` |

### 🎨 UI/UX Highlights

- **Pixel Perfect** — Faithful recreation of Adobe XD designs for desktop
- **📱 Fully Responsive** — Custom breakpoint `aspireMd: 840px` for mobile optimization
- **🔄 Smooth Transitions** — All interactive elements have hover states and transitions
- **♿ Accessibility** — ARIA labels, keyboard navigation, focus management
- **⚡ Optimized Assets** — PNG assets optimized for different screen sizes (`@2x`, `@3x`)

---

## 🛠️ Technology Stack

### Core Dependencies

| Category | Library | Version | Purpose |
|----------|---------|---------|---------|
| **Framework** | React | 19.x | UI component library |
| **Language** | TypeScript | 5.9.x | Type safety & developer experience |
| **Build Tool** | Vite | 7.x | Lightning-fast development & bundling |
| **Styling** | Tailwind CSS | 4.2.x | Utility-first CSS with custom theme |

### UI Components & Libraries

| Library | Version | Usage |
|---------|---------|-------|
| **Embla Carousel React** | 8.6.x | Smooth, performant debit card carousel |
| **Radix UI Collapsible** | 1.1.x | Accessible accordion panels |
| **React Modal** | 3.16.x | Add card dialog with overlay |
| **React Hot Toast** | 2.6.x | Success/error notifications |
| **Lucide React** | 0.577.x | Consistent icon set |
| **React Router DOM** | 7.13.x | Client-side routing |

### Development Dependencies

| Tool | Purpose |
|------|---------|
| ESLint | Code linting & best practices |
| PostCSS | CSS processing |
| Autoprefixer | Vendor prefixing |
| TypeScript ESLint | Type-aware linting |

---

## 📁 Project Structure
```
src/
├── api/
│   └── cards-api.ts          # Simulated async API using localStorage
├── assets/
│   └── images/               # All PNG assets exported from Figma/Adobe XD
├── components/
│   ├── cards/
│   │   ├── add-card-dialog.tsx       # Modal for adding a new card
│   │   ├── card-action-bar.tsx       # Freeze, spend limit, GPay, etc.
│   │   ├── card-summary-panel.tsx    # Card details + recent transactions
│   │   └── debit-card-carousel.tsx   # Embla-powered card carousel
│   └── layout/
│       ├── app-sidebar.tsx           # Navigation sidebar
│       └── main-layout.tsx           # Root layout with sidebar + outlet
├── constants/
│   └── navigation.ts         # Sidebar nav items
├── hooks/
│   └── use-cards.ts          # Cards state management hook
├── pages/
│   ├── cards-page.tsx        # Main cards page
│   └── placeholder-page.tsx  # Stub for other nav routes
├── router/
│   └── app-router.tsx        # BrowserRouter + route definitions
├── types/
│   ├── card.ts               # Card and Transaction interfaces
│   └── navigation.ts         # Nav item type
├── utils/
│   └── card-generator.ts     # Random card number/expiry/CVV generation
└── index.css                 # Global styles: typography, colors, fonts, custom breakpoints
```

## 🎨 Styling & Fonts
 
### `index.css` — Global Stylesheet
`index.css` is the single source of truth for all global styling. It includes:
 
- **Typography** — Sets the base font family to [Open Sans](https://fonts.google.com/specimen/Open+Sans), loaded from Google Fonts via a `<link>` tag in `index.html`.
- **Colors** — CSS custom properties (variables) for brand colors (Aspire green, navy, neutrals).
- **Font weights & sizes** — Baseline text scale applied across the app.
- **Custom Tailwind breakpoint** — `--breakpoint-aspireMd: 840px` to switch between mobile and desktop layouts.
- **Global resets & utilities** — Box-sizing, scroll behavior, and any shared utility classes not covered by Tailwind.
 
```css
/* Example from index.css */
--breakpoint-aspireMd: 840px;
```
 
### Google Fonts
Open Sans is loaded in `index.html` via the Google Fonts CDN, ensuring consistent typography across all browsers without bundling font files.
 
---

## 🃏 Card Generation (`src/utils/card-generator.ts`)
 
All card data is generated **entirely client-side** — no server or external service is involved.
 
`card-generator.ts` exports utility functions that produce:
 
| Field | Generation Method |
|---|---|
| **Card number** | 16 random digits formatted as `XXXX XXXX XXXX XXXX` |
| **Expiry date** | Random month + year between 2 and 5 years from today |
| **CVV** | 3 random digits |
 
These are called inside `add-card-dialog.tsx` when the user submits a new card name, so every card gets a unique, realistic-looking number and expiry instantly.
 
---

## 🚀 Getting Started
 
### Prerequisites
 
- Node.js >= 18
- npm >= 9
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/Afshankhan15/Assessment.git
cd Assessment/aspire
 
# Install dependencies
npm install
```
 
### Development
 
```bash
npm run dev
```
 
Opens at [http://localhost:5173](http://localhost:5173)
 
---

## 🏗 Architecture Decisions
 
### API Layer (`src/api/cards-api.ts`)
All data operations go through an async API layer that simulates network latency (`~80ms`). This means swapping `localStorage` for a real REST or GraphQL API requires only changes inside `src/api/` — no component changes needed.
 
### Custom Hook (`src/hooks/use-cards.ts`)
All card state (loading, active card, freeze toggle, add card) is encapsulated in `useCards`. Components are kept presentational and receive data via props.
 
### Responsive Breakpoint
A custom Tailwind breakpoint `aspireMd` is defined at **840px** in `index.css`:
```css
--breakpoint-aspireMd: 840px;
```
Below this breakpoint the app switches to a mobile layout with a navy background, stacked columns, and a condensed header.
 
### localStorage — Persistence & Seeding
Cards are persisted to `localStorage` via the `src/api/cards-api.ts` layer. On **first load**, if no data exists in storage, three seed cards are automatically created and saved:
 
| # | Card Holder |
|---|---|
| 1 | Mark Henry |
| 2 | Sarah Adams |
| 3 | John Doe |
 
Each seed card is generated using `card-generator.ts`, so they come with unique card numbers and expiry dates. Subsequent loads read directly from `localStorage`, preserving any cards the user has added or frozen.
 
---

# LeadFlow Engine - Landing Page

High-conversion landing page for LeadFlow Engine, a B2B SaaS product focused on lead acquisition, traceability, and management for small and medium-sized businesses in Canada, with initial emphasis on Vancouver.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro and Tailwind CSS
- **Design System**: Centralized CSS variables for rapid iteration
- **Internationalization**: Full support for English and Spanish
- **Modular Components**: Reusable UI components (Button, Card, SectionHeading)
- **Responsive Design**: Mobile-first approach with beautiful gradients
- **Fast Performance**: Static site generation for optimal loading speeds

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI components
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── SectionHeading.astro
│   │   ├── Header.astro     # Navigation with language switcher
│   │   ├── Hero.astro       # Hero section
│   │   ├── PainPoints.astro # Problem statement section
│   │   ├── HowItWorks.astro # Solution explanation
│   │   ├── TrustSection.astro # Canadian compliance features
│   │   ├── Pricing.astro    # Pricing plans in CAD
│   │   └── Footer.astro     # Footer with links
│   ├── i18n/
│   │   └── ui.ts            # Translation strings (EN/ES)
│   ├── layouts/
│   │   └── Layout.astro     # Base layout
│   ├── pages/
│   │   ├── index.astro      # English homepage
│   │   └── es/
│   │       └── index.astro  # Spanish homepage
│   └── styles/
│       └── global.css       # Global styles with CSS variables
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs      # Tailwind with design tokens
└── package.json
```

## 🎨 Design System

### CSS Variables (Easy to Change)

The entire color palette is defined in `src/styles/global.css` using CSS variables:

```css
:root {
  --brand-primary: #2563eb;    /* Blue 600 */
  --brand-secondary: #1e40af;   /* Blue 700 */
  --brand-accent: #f59e0b;      /* Amber 500 */
  --bg-surface: #ffffff;
  --bg-card: #f9fafb;
  --bg-dark: #111827;
  --text-heading: #111827;
  --text-body: #374151;
  --text-muted: #6b7280;
}
```

These variables are consumed by Tailwind through `tailwind.config.mjs`, allowing you to change the entire site's color scheme in seconds.

### UI Components

- **Button**: 3 variants (primary, secondary, outline), 3 sizes (sm, md, lg)
- **Card**: 3 variants (default, glass, border)
- **SectionHeading**: Consistent section titles with optional subtitles

## 🌍 Internationalization

Language support is handled through a simple i18n system:

- Translation strings in `src/i18n/ui.ts`
- Language switcher in the header (EN/ES)
- Separate routes: `/` (English) and `/es` (Spanish)

## 🛠️ Commands

| Command           | Action                                       |
|-------------------|----------------------------------------------|
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:4321`

## 🎯 Key Sections

1. **Hero**: High-impact headline targeting Vancouver businesses
2. **Pain Points**: Three key problems (Fragmented Data, Blind Marketing Spend, Slow Response)
3. **How It Works**: 3-step process (Capture & Track, Normalization, CRM Sync)
4. **Trust & Compliance**: Canadian data hosting, PIPEDA ready, enterprise security
5. **Pricing**: Two plans (Starter $99 CAD, Growth $249 CAD)

## 🎨 Customization

### Changing Colors

Edit `src/styles/global.css` and update the CSS variables. The changes will propagate throughout the entire site.

### Adding New Languages

1. Add translations to `src/i18n/ui.ts`
2. Create a new page in `src/pages/[lang]/index.astro`
3. Update language switcher in `src/components/Header.astro`

### Modifying Content

All content is in the translation files (`src/i18n/ui.ts`). Update the strings there to change text throughout the site.

## 📦 Built With

- [Astro](https://astro.build) - Web framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type safety

## 📝 Best Practices

- **No Technical Debt**: Clean, modular architecture
- **Design System**: Centralized tokens for consistency
- **Performance**: Static site generation
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Maintainability**: Well-organized component structure

## 🇨🇦 Canadian Focus

The landing page emphasizes:
- Data hosted in Canada
- PIPEDA compliance
- Pricing in Canadian Dollars (CAD)
- Focus on Vancouver and BC businesses

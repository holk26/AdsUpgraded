# Nyxok - Software Engineering Solutions

High-performance landing page for Nyxok, a B2B software engineering powerhouse specializing in custom solutions and high-scale automation for the US tech market.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro and Tailwind CSS
- **Design System**: Dark mode professional aesthetic with Electric Indigo and Cyber Mint accents
- **Internationalization**: Full support for English and Spanish
- **Modular Components**: Reusable UI components (Button, Card, SectionHeading)
- **Responsive Design**: Mobile-first approach with high-contrast dark theme
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
  --color-primary: #0D0D0D;    /* Obsidian / Deep Background */
  --color-secondary: #00FFC2;   /* Cyber Mint (Clean Code) */
  --color-accent: #5D5DFF;      /* Electric Indigo (Tech Power) */
  --color-bg: #0D0D0D;
  --color-surface: #1A1A1A;
  --color-text-body: #F2F2F2;
  --color-text-heading: #F2F2F2;
  --color-text-muted: #888888;
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

1. **Hero**: "Engineering the Unseen" - Positioning as a B2B software engineering powerhouse
2. **Architecture Challenge**: Three key problems (Fragmented Systems, Technical Debt, Manual Overhead)
3. **How It Works**: 3-step process (Architecture First, Seamless Automation, Custom Development)
4. **Trust & Excellence**: Enterprise Security, Clean Architecture, High Performance
5. **Services**: Backend Engineering, Workflow Automation, API Integration, Custom SaaS Development

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

## 🌍 Brand Focus

The landing page emphasizes:
- Engineering excellence and precision logic
- Custom software engineering solutions
- Architecture-first approach
- Scalable, high-performance systems
- US B2B Tech Sector specialization

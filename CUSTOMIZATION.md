# Customization Guide

This guide will help you customize and iterate on the Nyxok landing page.

## 🎨 Quick Color Theme Changes

The entire color palette is defined in one place: `src/styles/global.css`

### To change the primary brand color:
```css
--color-primary: #0D0D0D;  /* Change this value */
```

### To change the accent color:
```css
--color-accent: #5D5DFF;   /* Change this value */
```

All buttons, links, and branded elements will automatically update.

## 🌍 Adding/Editing Translations

1. Open `src/i18n/ui.ts`
2. Find the key you want to edit (e.g., `'hero.title'`)
3. Update the value in both `en` and `es` objects
4. Save - changes will be reflected immediately in dev mode

### Adding a new translation key:
```typescript
export const ui = {
  en: {
    // ... existing keys
    'new.key': 'New English text',
  },
  es: {
    // ... existing keys
    'new.key': 'Nuevo texto en español',
  },
}
```

Then use it in components:
```astro
{t('new.key')}
```

## 🎯 Modifying Sections

### To change the pricing:
Edit `src/i18n/ui.ts` and update:
- `pricing.starter.price`: The price displayed
- `pricing.starter.feature1-5`: The feature list
- Repeat for `pricing.growth.*`

### To add a new technical challenge:
Edit `src/components/PainPoints.astro` and add to the `painPoints` array:
```typescript
{
  icon: 'M... (SVG path)',
  titleKey: 'pain.newproblem.title',
  descKey: 'pain.newproblem.desc',
}
```

Then add translations in `src/i18n/ui.ts`.

## 🧩 Adding New Components

### Create a new section:
1. Create `src/components/NewSection.astro`
2. Use the SectionHeading component for consistency
3. Import and add it to `src/pages/index.astro`

Example:
```astro
---
import SectionHeading from './ui/SectionHeading.astro';

export interface Props {
  t: (key: string) => string;
}

const { t } = Astro.props;
---

<section class="py-20 md:py-32 bg-white">
  <div class="container mx-auto px-4">
    <SectionHeading 
      title={t('newsection.title')}
      subtitle={t('newsection.subtitle')}
      centered={true}
      class="mb-16"
    />
    
    <!-- Your content here -->
  </div>
</section>
```

## 🔘 Button Customization

The Button component supports these props:
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `href`: Link URL (makes it an anchor tag)

Example:
```astro
<Button variant="primary" size="lg" href="#demo">
  Click Me
</Button>
```

## 📦 Card Customization

The Card component supports:
- `variant`: 'default' | 'glass' | 'border'
- `class`: Additional CSS classes

Example:
```astro
<Card variant="glass" class="hover:scale-105">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

## 🖼️ Changing Images/Icons

Currently, the page uses SVG icons for:
- Logo (in Header and Footer)
- Feature icons (in all section components)

To replace an icon, find the SVG `<path>` element and replace the `d` attribute with your new icon path. You can get paths from:
- [Heroicons](https://heroicons.com/)
- [Lucide Icons](https://lucide.dev/)
- Any SVG icon library

## 📱 Responsive Design

The page uses Tailwind's responsive prefixes:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

To adjust responsive behavior, edit the class names in components:
```astro
<!-- Mobile: column, Desktop: row -->
<div class="flex flex-col md:flex-row gap-4">
```

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

The static site will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Environment-specific changes:
For production builds, you can add environment variables:
1. Create `.env` file
2. Add variables: `PUBLIC_API_URL=https://api.example.com`
3. Use in components: `import.meta.env.PUBLIC_API_URL`

## 🔍 SEO Optimization

To update meta tags, edit `src/layouts/Layout.astro`:
```astro
<meta name="description" content="Your new description" />
<title>{title}</title>
```

For page-specific meta tags, pass props from page files:
```astro
<Layout 
  title="Custom Page Title"
  description="Custom description"
  lang={lang}
>
```

## 🎨 Design System Extension

### Adding new colors:
1. Add to `src/styles/global.css`:
   ```css
   --brand-tertiary: #10b981;
   ```

2. Add to `tailwind.config.mjs`:
   ```javascript
   brand: {
     primary: 'var(--brand-primary)',
     secondary: 'var(--brand-secondary)',
     accent: 'var(--brand-accent)',
     tertiary: 'var(--brand-tertiary)', // Add this
   }
   ```

3. Use in components: `class="bg-brand-tertiary"`

### Adding new component variants:
Edit the component file (e.g., `Button.astro`) and add to the variants object:
```typescript
const variants = {
  primary: '...',
  secondary: '...',
  outline: '...',
  ghost: 'bg-transparent hover:bg-gray-100', // New variant
};
```

## 📊 Analytics Integration

To add analytics (Google Analytics, Plausible, etc.):
1. Add the script to `src/layouts/Layout.astro` in the `<head>` section
2. Or use Astro integrations like `@astrojs/partytown` for better performance

## 🧪 Testing Changes

Always test your changes:
```bash
# Development
npm run dev

# Production build test
npm run build
npm run preview
```

## 💡 Best Practices

1. **Always use translation keys** - Never hardcode text
2. **Use design system colors** - Don't add arbitrary color values
3. **Follow component patterns** - Use existing components as templates
4. **Keep it responsive** - Test on mobile, tablet, and desktop
5. **Optimize images** - Use WebP format and appropriate sizes
6. **Maintain accessibility** - Use semantic HTML and ARIA labels

## 🆘 Troubleshooting

### Build fails:
- Check for syntax errors in `.astro` files
- Ensure all imports are correct
- Run `npm install` to ensure dependencies are installed

### Styles not applying:
- Check Tailwind class names are correct
- Ensure CSS variables are defined in `global.css`
- Clear browser cache and rebuild

### Translations not showing:
- Verify translation keys exist in `src/i18n/ui.ts`
- Check you're passing the `t` function to components
- Ensure the key name matches exactly (case-sensitive)

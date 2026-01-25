# Z-Index Convention

This document defines the z-index layering system used throughout the application to prevent layout conflicts.

## Z-Index Layers

All z-index values are defined in `tailwind.config.mjs` and should be used via Tailwind classes.

| Layer | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| Skip Link | 100 | `z-skip` | Accessibility skip-to-content link (highest priority) |
| Header | 50 | `z-header` | Main navigation header |
| Modal/Overlay | 40 | `z-modal` or `z-overlay` | Modals, mobile menus, overlays |
| Section | 10 | `z-section` | Content sections when layering is needed |
| Background | 0 | `z-background` | Background effects and decorations |

## Usage Examples

```html
<!-- Header -->
<header class="fixed z-header">...</header>

<!-- Mobile Menu -->
<div class="fixed z-overlay">...</div>

<!-- Skip Link -->
<a href="#main" class="z-skip">Skip to main content</a>

<!-- Section with decorative background -->
<section class="relative z-section">
  <div class="absolute z-background"><!-- decorative --></div>
  <!-- content -->
</section>
```

## Rules

1. **Never use arbitrary z-index values** (e.g., `z-[100]`) without adding them to the Tailwind config first
2. **Use semantic layer names** from the config instead of numeric values
3. **Document any new layers** added to the system
4. **Keep related elements in the same layer** (e.g., all overlays at z-40)
5. **Test across breakpoints** when changing z-index values

## Component Isolation

- Each component should manage its own internal z-index relationships
- Use relative z-index values within components (z-10, z-20, z-30, etc.)
- Only use the global layers for elements that need to appear above/below other components

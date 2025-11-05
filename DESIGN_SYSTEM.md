# Yoonet Career Progression Matrix - Design System

## Brand Overview
This design system defines the visual language for the Yoonet Career Progression Matrix, aligning with Yoonet's brand identity and ensuring consistency across all components.

---

## Color Palette

### Primary Colors
These are the core Yoonet brand colors used throughout the application.

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Yoonet Blue** | `#879bff` | `--color-yoonet-blue` | Primary brand color, links, primary actions, scrollbar hover |
| **Yoonet Pink** | `#f5949f` | `--color-yoonet-pink` | Secondary accents, scrollbar thumb, CTAs |
| **Yoonet Light Blue** | `#71bbe3` | `--color-yoonet-light-blue` | Tertiary accents, info highlights |
| **Yoonet Purple** | `#a36cf3` | `--color-yoonet-purple` | Headings, feature highlights |
| **Yoonet Magenta** | `#e26cdf` | `--color-yoonet-magenta` | Interactive elements, gradient endpoints |

### Neutral Colors

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| **Yoonet Dark** | `#6c7091` | `--color-yoonet-dark` | Body text, descriptions |
| **Yoonet Darker** | `#4d5574` | `--color-yoonet-darker` | Headings, emphasis text |
| **White** | `#ffffff` | N/A | Backgrounds, cards |
| **Light Gray** | `#f1f1f1` | N/A | Scrollbar track |

### Gradient Definitions

```css
/* Primary Gradient - Used for titles and hero elements */
background: linear-gradient(to right, #879bff, #a36cf3, #e26cdf);

/* Usage Example */
.gradient-title {
  background: linear-gradient(to right, #879bff, #a36cf3, #e26cdf);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #879bff; /* Fallback */
}
```

---

## Typography

### Font Families

#### Primary Font: Dosis
- **Type**: Variable sans-serif
- **CSS Variable**: `--font-dosis`
- **Import**: `'Dosis:wght@200..800'` from Google Fonts
- **Usage**: Headlines, titles, card headers, navigation
- **Weight Range**: 200-800

```css
font-family: 'Dosis Variable', 'Dosis', sans-serif;
```

#### Body Font: Lato
- **Type**: Sans-serif
- **CSS Variable**: `--font-lato`
- **Import**: `'Lato:wght@100;300;400;700;900'` from Google Fonts
- **Usage**: Body text, descriptions, paragraphs
- **Weights**: 100, 300, 400, 700, 900

```css
font-family: 'Lato', sans-serif;
```

### Font Size Scale

| Element | Size (Mobile) | Size (Desktop) | Font Family | Weight |
|---------|--------------|----------------|-------------|--------|
| H1 (Hero) | `3rem` (48px) | `4.5rem` (72px) | Dosis | 700 (Bold) |
| H2 (Section) | `1.875rem` (30px) | `3rem` (48px) | Dosis | 700 (Bold) |
| H3 (Card Title) | `1.125rem` (18px) | `1.125rem` (18px) | Dosis | 700 (Bold) |
| Body Large | `1.25rem` (20px) | `1.25rem` (20px) | Lato | 400 (Regular) |
| Body Regular | `1rem` (16px) | `1rem` (16px) | Lato | 400 (Regular) |
| Body Small | `0.875rem` (14px) | `0.875rem` (14px) | Lato | 400 (Regular) |

### Text Colors by Context

| Context | Color | CSS Class/Variable |
|---------|-------|-------------------|
| Hero titles | Gradient | `.gradient-title` |
| Section headings | Yoonet Purple | `text-yoonet-purple` |
| Card headings | Yoonet Darker | `text-yoonet-darker` |
| Body text | Yoonet Dark | `text-yoonet-dark` |
| Selection highlight | White on Blue | `::selection` |

---

## Spacing System

Based on Tailwind CSS default spacing scale (4px base unit).

### Common Spacing Values

| Token | Value | Usage |
|-------|-------|-------|
| `px-4` | 1rem (16px) | Container horizontal padding (mobile) |
| `py-8` | 2rem (32px) | Section vertical padding |
| `gap-6` | 1.5rem (24px) | Grid gaps |
| `mb-4` | 1rem (16px) | Small bottom margin |
| `mb-6` | 1.5rem (24px) | Medium bottom margin |
| `mb-8` | 2rem (32px) | Large bottom margin |
| `mb-12` | 3rem (48px) | Section bottom margin |
| `p-6` | 1.5rem (24px) | Card padding |
| `p-8` | 2rem (32px) | Main container padding |

---

## Components

### Cards

#### Info Cards (Grid Cards)
```css
Properties:
- Background: White (#ffffff)
- Border: 2px solid with 30% opacity of accent color
- Border Radius: 0.75rem (12px)
- Padding: 1.5rem (24px)
- Shadow: shadow-lg (with hover:shadow-xl)
- Transition: transition-shadow

Border Colors (by variant):
- Blue variant: border-yoonet-blue/30
- Purple variant: border-yoonet-purple/30
- Pink variant: border-yoonet-pink/30
```

#### Main Content Container
```css
Properties:
- Background: White (#ffffff)
- Border: 2px solid with 20% opacity (#879bff)
- Border Radius: 1rem (16px)
- Padding: 2rem (32px)
- Shadow: shadow-2xl
- Margin Bottom: 2rem (32px)
```

### Buttons and CTAs

#### Primary Button
```css
Background: Linear gradient or solid Yoonet Blue
Text: White
Padding: 0.75rem 2rem
Border Radius: 0.5rem (8px)
Font: Dosis, Bold (700)
Hover: Slight opacity change or color shift
```

### Icons
- **Size**: 32px (w-8 h-8) for feature cards
- **Style**: Outline/stroke style (not filled)
- **Stroke Width**: 2px
- **Colors**: Match the card's accent color

### Scrollbar Styling

```css
Width: 12px
Track Background: #f1f1f1
Thumb Background: #f5949f (Yoonet Pink)
Thumb Hover: #879bff (Yoonet Blue)
Border Radius: 6px
```

---

## Layout

### Container Structure
```css
Container Class: container mx-auto
Mobile Padding: px-4
Desktop Max Width: Various (3xl, 4xl, 6xl depending on section)
```

### Grid System

#### Three-Column Grid (Info Cards)
```css
Grid: md:grid-cols-3
Gap: gap-6
Max Width: max-w-6xl mx-auto
```

#### Responsive Breakpoints (Tailwind Default)
- Mobile: < 768px
- Tablet: 768px (md)
- Desktop: 1024px (lg)
- Large Desktop: 1280px (xl)

---

## Interactive States

### Hover Effects
```css
Cards: hover:shadow-xl (shadow elevation increase)
Buttons: hover:opacity-90 or color shift
Links: hover:underline (optional)
```

### Focus States
```css
Outline: 2px solid Yoonet Blue
Offset: 2px
```

### Selection
```css
Background: #879bff (Yoonet Blue)
Text Color: White (#ffffff)
```

---

## Accessibility

### Text Contrast Ratios
All text-color combinations meet WCAG AA standards:
- Body text (Yoonet Dark #6c7091) on White: ✓ AA
- Headings (Yoonet Darker #4d5574) on White: ✓ AA

### Font Rendering
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

### Smooth Scrolling
```css
html {
  scroll-behavior: smooth;
}
```

---

## Implementation

### CSS Variables Setup
```css
@theme {
  --color-yoonet-blue: #879bff;
  --color-yoonet-pink: #f5949f;
  --color-yoonet-light-blue: #71bbe3;
  --color-yoonet-purple: #a36cf3;
  --color-yoonet-magenta: #e26cdf;
  --color-yoonet-dark: #6c7091;
  --color-yoonet-darker: #4d5574;

  --font-dosis: "Dosis Variable", "Dosis", sans-serif;
  --font-lato: "Lato", sans-serif;
}
```

### Tailwind Classes (Extended)
Tailwind CSS is configured to recognize Yoonet color classes:
- `text-yoonet-blue`
- `text-yoonet-pink`
- `text-yoonet-light-blue`
- `text-yoonet-purple`
- `text-yoonet-magenta`
- `text-yoonet-dark`
- `text-yoonet-darker`
- `border-yoonet-blue`
- `border-yoonet-purple`
- `border-yoonet-pink`
- `bg-yoonet-*` (as needed)

---

## Brand Consistency Guidelines

### Do's
- Use the Yoonet color palette exclusively
- Apply the gradient to major titles/hero elements
- Use Dosis for all headings and emphasis
- Use Lato for all body text and descriptions
- Maintain consistent card styling with colored borders
- Keep spacing consistent using the defined scale

### Don'ts
- Don't introduce colors outside the defined palette
- Don't mix gradient styles or create new gradients
- Don't use font weights not specified in the imported ranges
- Don't create cards without the signature bordered style
- Don't use hard-coded spacing values outside the system

---

## File Reference
- **Global Styles**: `src/styles/global.css`
- **Main Layout**: `src/pages/index.astro`
- **Data Structure**: `src/data/careerPath.ts`

---

## Version
**Version 1.0** - Initial design system documentation
**Last Updated**: 2025-11-05

# Yoonet Questionnaire Design System
**Version 1.0 - Complete Styling Reference**

---

## Table of Contents
1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Component Specifications](#component-specifications)
4. [CSS Variables](#css-variables)
5. [Layout Structure](#layout-structure)
6. [Interactive States](#interactive-states)
7. [Class Naming Convention](#class-naming-convention)
8. [Implementation Checklist](#implementation-checklist)

---

## Color Palette

### Primary Colors
```css
--primary-color: #6b7094;  /* Main text color - purple-gray */
--brand: #8A9EFF;          /* Brand blue - primary actions, titles */
--accent: #FA6492;         /* Pink accent - progress indicators, alerts */
```

### Text Colors
```css
--text: #6b7094;           /* Body text */
--text-strong: #6b7094;    /* Strong emphasis text */
--muted: #9BA1B4;          /* Muted/secondary text */
```

### Surface Colors
```css
--bg: #F6F7FB;             /* Page background */
--panel: #FFFFFF;          /* Card/panel background */
--border: #E6E8EF;         /* Border color */
--panel-border: #E8EBF4;   /* Panel border color */
--neutral: #E3E8EF;        /* Neutral button background */
```

### Shadows
```css
--shadow-sm: 0 6px 18px rgba(31,41,55,.08);
--shadow-md: 0 10px 30px rgba(31,41,55,.12);
```

### Utility
```css
--radius: 18px;            /* Standard border radius */
```

### Background Gradient
```css
background: linear-gradient(135deg, #f0f2f8 0%, #fafafc 50%, #f5f6fb 100%);
background-attachment: fixed;
```

---

## Typography

### Font Families
- **Headings/Buttons**: `Dosis, sans-serif`
- **Body Text**: `Lato, sans-serif`

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Dosis:wght@400;700&display=swap" rel="stylesheet">
```

### Font Specifications

#### H1 - Brand Title
- **Font**: Dosis
- **Size**: 32px
- **Weight**: 700 (Bold)
- **Color**: `var(--brand)` (#8A9EFF)
- **Usage**: Main header title "Yoonet Partner Assessment"

#### H2 - Step Title
- **Font**: Dosis
- **Size**: 24px
- **Weight**: 700 (Bold)
- **Color**: `#6b7094`
- **Margin Bottom**: 10px
- **Usage**: Current step title (e.g., "Current Podio Usage")

#### Subtitle (Header Meta)
- **Font**: Lato
- **Size**: 15px
- **Weight**: 400 (Normal)
- **Color**: `#6b7094`
- **Usage**: Below main title (e.g., "For Loaves and Fishes Tasmania")

#### Step Subtitle
- **Font**: Lato
- **Size**: 15px
- **Weight**: 400 (Normal)
- **Color**: `#6b7094`
- **Usage**: Below step title (e.g., "Which areas currently use Podio?")

#### Question Text
- **Font**: Lato
- **Size**: 17px
- **Weight**: 700 (Bold)
- **Color**: `#6b7094`
- **Margin Bottom**: 16px
- **Usage**: Main question text in each step

#### Body Text / Option Labels
- **Font**: Lato
- **Size**: 17px
- **Weight**: 400 (Normal)
- **Color**: `#6b7094`
- **Usage**: Choice/option labels, paragraph text

#### Option Details (Small Text)
- **Font**: Lato
- **Size**: 14px
- **Weight**: 400 (Normal)
- **Color**: `var(--text)` (#7d728a)
- **Margin Top**: 4px
- **Usage**: Sub-text under option labels

#### Option Placeholder (Smallest)
- **Font**: Lato
- **Size**: 12px
- **Weight**: 400 (Normal)
- **Color**: `var(--muted)` (#9BA1B4)
- **Style**: italic
- **Margin Top**: 4px
- **Usage**: Hint text like "e.g., Xero, MYOB"

#### Progress Info
- **Step Count**: 14px, `var(--muted)`, font-weight: 600
- **Percentage**: 12px, `var(--muted)`, margin-top: 4px

#### Button Text
- **Font**: Dosis
- **Size**: 16px
- **Weight**: 700 (Bold)
- **Usage**: All navigation buttons

---

## Component Specifications

### 1. Container & Wrapper

#### Main Container
```css
.{prefix}-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f2f8 0%, #fafafc 50%, #f5f6fb 100%);
  background-attachment: fixed;
  padding: 24px 16px;
}
```

#### Content Wrapper
```css
.{prefix}-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
```

---

### 2. Logo Section

#### Logo Container
```css
.{prefix}-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
}
```

#### Logo Image
```css
.{prefix}-logo {
  max-width: 40px;
  height: auto;
}
```

**Logo URL**: `https://s3.amazonaws.com/appforest_uf/f1679452072099x521288658380311800/yoonet-bubble-app-square-logo.svg`

---

### 3. Progress Card

#### Card Container
```css
.{prefix}-progress-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  margin-bottom: 24px;
}
```

#### Progress Header
```css
.{prefix}-progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
```

**Left Side**: Brand title and subtitle
**Right Side**: Step count and percentage

#### Progress Bar
```css
.{prefix}-progress-bar {
  width: 100%;
  height: 8px;
  background: var(--border);
  border-radius: 10px;
  overflow: hidden;
}

.{prefix}-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--brand), var(--accent));
  border-radius: 10px;
  transition: width 0.5s ease;
}
```

---

### 4. Main Content Card

#### Card
```css
.{prefix}-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-md);
}
```

#### Step Header
```css
.{prefix}-header {
  margin-bottom: 32px; /* Optional, can be removed */
}

.{prefix}-title {
  font-family: Dosis, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.{prefix}-subtitle-text {
  font-size: 15px;
  color: var(--primary-color);
  margin-bottom: 10px;
}
```

#### Content Area
```css
.{prefix}-content {
  margin-bottom: 32px;
}
```

---

### 5. Question & Options

#### Question Text
```css
.{prefix}-question {
  font-size: 17px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 16px;
}
```

#### Max Selections Note
```css
.{prefix}-max-selections {
  font-size: 14px;
  color: var(--accent);
  margin-bottom: 16px;
  font-weight: 600;
}
```

#### Options Grid
```css
.{prefix}-options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 768px) {
  .{prefix}-options-grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

---

### 6. Option Buttons

#### **IMPORTANT: Icons in Options**
**Icons should be HIDDEN in option buttons (selections/choices)**

```css
.{prefix}-option-icon {
  display: none; /* Hide icons in option buttons */
}
```

#### Option Button Base
```css
.{prefix}-option {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--panel);
  cursor: pointer;
  text-align: left;
  transition: all 0.12s ease;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}
```

#### Option Hover State
```css
.{prefix}-option:hover {
  background: rgba(138,158,255,0.06);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
```

#### Option Selected State
```css
.{prefix}-option.selected {
  border-color: var(--brand);
  background: rgba(138,158,255,0.1);
  box-shadow: 0 4px 12px rgba(138,158,255,0.2);
}
```

#### Option Content Structure
```css
.{prefix}-option-content {
  display: flex;
  align-items: start;
  gap: 12px;
}

.{prefix}-option-text {
  flex: 1;
}

.{prefix}-option-label {
  font-weight: 400;
  color: var(--primary-color);
  font-size: 17px;
  margin-bottom: 4px;
}

.{prefix}-option-detail {
  font-size: 14px;
  color: var(--text);
  margin-top: 4px;
}

.{prefix}-option-placeholder {
  font-size: 12px;
  color: var(--muted);
  font-style: italic;
  margin-top: 4px;
}
```

#### Checkbox Icon (for multiple choice)
```css
.{prefix}-option-checkbox {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--brand);
}
```

**Selected Checkbox SVG**:
```html
<svg fill="currentColor" viewBox="0 0 24 24" style="color: var(--brand);">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
</svg>
```

**Unselected Checkbox SVG**:
```html
<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #d1d5db;">
  <circle cx="12" cy="12" r="10" stroke-width="2"/>
</svg>
```

---

### 7. Form Inputs

#### Textarea
```css
.{prefix}-textarea {
  width: 100%;
  min-height: 160px;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  color: var(--text);
  resize: vertical;
  transition: all 0.2s ease;
}

.{prefix}-textarea:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px rgba(138,158,255,0.1), 0 2px 8px rgba(0,0,0,0.05);
}

.{prefix}-textarea::placeholder {
  color: var(--muted);
}
```

#### Text Input
```css
.{prefix}-input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  color: var(--text);
  transition: all 0.2s ease;
}

.{prefix}-input:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px rgba(138,158,255,0.1), 0 2px 8px rgba(0,0,0,0.05);
}
```

---

### 8. Navigation Buttons

#### Navigation Container
```css
.{prefix}-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}
```

#### Button Base
```css
.{prefix}-btn {
  border: 1px solid var(--panel-border);
  padding: 12px 24px;
  border-radius: 12px;
  background: var(--neutral);
  color: var(--text-strong);
  cursor: pointer;
  font-weight: 700;
  font-family: Dosis, sans-serif;
  font-size: 16px;
  transition: all 0.12s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}
```

#### Button Hover
```css
.{prefix}-btn:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-1px);
}
```

#### Button Active
```css
.{prefix}-btn:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}
```

#### Button Disabled
```css
.{prefix}-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
```

#### Primary Button (Next/Continue)
```css
.{prefix}-btn.primary {
  border: none;
  background: linear-gradient(180deg, var(--brand), var(--brand));
  color: #fff;
  box-shadow: 0 4px 12px rgba(138,158,255,0.3);
}

.{prefix}-btn.primary:hover:not(:disabled) {
  box-shadow: 0 6px 20px rgba(138,158,255,0.4);
  transform: translateY(-1px);
}
```

#### Restart Button (Final Step - "Visit our website")
**Color**: Should use brand color (blue/purple), NOT green
```css
.{prefix}-btn.restart {
  border: none;
  background: linear-gradient(180deg, var(--brand), var(--brand));
  color: #fff;
  box-shadow: 0 4px 12px rgba(138,158,255,0.3);
}

.{prefix}-btn.restart:hover:not(:disabled) {
  box-shadow: 0 6px 20px rgba(138,158,255,0.4);
  transform: translateY(-1px);
}
```

#### Button SVG Icons
**Next/Right Arrow**:
```html
<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
</svg>
```

**Previous/Left Arrow**:
```html
<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
</svg>
```

---

### 9. Step Indicators

#### Container
```css
.{prefix}-step-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}
```

#### Step Dots
```css
.{prefix}-step-dot {
  height: 8px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

/* Active step - elongated, brand color */
.{prefix}-step-dot.active {
  width: 32px;
  background: var(--brand);
}

/* Completed step - small, accent color */
.{prefix}-step-dot.completed {
  width: 8px;
  background: var(--accent);
}

/* Upcoming step - small, border color */
.{prefix}-step-dot.upcoming {
  width: 8px;
  background: var(--border);
}
```

---

### 10. Info Blocks

#### Base Info Block
```css
.{prefix}-info-block {
  padding: 16px 20px;
  border-radius: 12px;
  margin: 16px 0;
}

.{prefix}-info-block p {
  font-size: 17px;
  line-height: 1.6;
  color: var(--primary-color);
}
```

#### Primary Info Block (Blue)
```css
.{prefix}-info-block.primary {
  background: rgba(138,158,255,0.1);
  border: 1px solid rgba(138,158,255,0.3);
}
```

#### Success Info Block (Green)
```css
.{prefix}-info-block.success {
  background: rgba(72,187,120,0.1);
  border: 1px solid rgba(72,187,120,0.3);
}
```

#### Warning Info Block (Pink)
```css
.{prefix}-info-block.warning {
  background: rgba(250,100,146,0.1);
  border: 1px solid rgba(250,100,146,0.3);
}
```

#### Info Block Content
**Icons in info blocks**: Keep visible (emojis like 🎯 are allowed)
```html
<div class="info-block primary">
  <p style="font-weight: 600; margin-bottom: 8px;">🎯 What we'll cover:</p>
  <ul style="list-style: none; margin-left: 0; padding-left: 0;">
    <li>• Current Podio usage across your organisation</li>
    <li>• Your software and technology stack</li>
  </ul>
</div>
```

---

### 11. Summary Page Components

#### Summary Box
```css
.{prefix}-summary-box {
  margin-top: 16px;
  padding: 16px 20px;
  background: white;
  border: 1px solid var(--panel-border);
  border-radius: 12px;
}

.{prefix}-summary-box h4 {
  font-family: Dosis, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 12px;
}

.{prefix}-summary-list {
  font-size: 15px;
  color: var(--text);
}

.{prefix}-summary-list p {
  margin: 8px 0;
  color: var(--primary-color);
}
```

#### Check Icon with Text
```css
.{prefix}-check-icon-summary {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.{prefix}-check-icon-summary svg {
  width: 32px;
  height: 32px;
  color: #38a169; /* Green checkmark */
  flex-shrink: 0;
  margin-top: 4px;
}
```

---

## Interactive States

### Focus States
- **Inputs/Textareas**: Border changes to `var(--brand)`, add `box-shadow: 0 0 0 3px rgba(138,158,255,0.1)`
- **Buttons**: No outline, use hover state

### Hover States
- **Option Buttons**: Background `rgba(138,158,255,0.06)`, `transform: translateY(-1px)`, enhanced shadow
- **Navigation Buttons**: Enhanced shadow, `transform: translateY(-1px)`

### Active States
- **Buttons**: `transform: translateY(1px)`, reduced shadow (pressed effect)

### Selected States
- **Option Buttons**: Border `var(--brand)`, background `rgba(138,158,255,0.1)`, branded shadow

### Disabled States
- **Buttons**: `opacity: 0.6`, `cursor: not-allowed`, remove hover effects

---

## CSS Variables

### Complete Variable Set
```css
:root {
  /* Primary Color */
  --primary-color: #6b7094;

  /* Brand Colors */
  --brand: #8A9EFF;
  --accent: #FA6492;

  /* Text Colors */
  --text: #6b7094;
  --text-strong: #6b7094;
  --muted: #9BA1B4;

  /* Surface Colors */
  --bg: #F6F7FB;
  --panel: #FFFFFF;
  --border: #E6E8EF;
  --panel-border: #E8EBF4;
  --neutral: #E3E8EF;

  /* Shadows */
  --shadow-sm: 0 6px 18px rgba(31,41,55,.08);
  --shadow-md: 0 10px 30px rgba(31,41,55,.12);

  /* Misc */
  --radius: 18px;
}
```

---

## Layout Structure

### HTML Structure Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yoonet Partner Assessment - [Client Name]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Dosis:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* CSS variables and styles here */
  </style>
</head>
<body>
  <div class="{prefix}-container">
    <div class="{prefix}-wrapper">

      <!-- Logo -->
      <div class="{prefix}-logo-container">
        <img src="https://s3.amazonaws.com/appforest_uf/f1679452072099x521288658380311800/yoonet-bubble-app-square-logo.svg"
             alt="Yoonet Logo"
             class="{prefix}-logo">
      </div>

      <!-- Progress Card -->
      <div class="{prefix}-progress-card">
        <div class="{prefix}-progress-header">
          <div>
            <h1 class="{prefix}-brand-title">Yoonet Partner Assessment</h1>
            <p class="{prefix}-subtitle">For [Client Name]</p>
          </div>
          <div class="{prefix}-progress-info">
            <div class="{prefix}-step-count">Step <span id="current-step">1</span> of <span id="total-steps">25</span></div>
            <div class="{prefix}-percentage"><span id="progress-percent">4</span>% Complete</div>
          </div>
        </div>
        <div class="{prefix}-progress-bar">
          <div class="{prefix}-progress-fill" id="progress-fill" style="width: 4%;"></div>
        </div>
      </div>

      <!-- Main Content Card -->
      <div class="{prefix}-card">
        <div class="{prefix}-header">
          <h2 class="{prefix}-title" id="step-title">Welcome!</h2>
          <p class="{prefix}-subtitle-text" id="step-subtitle">Help us understand your needs</p>
        </div>

        <div class="{prefix}-content" id="content-area">
          <!-- Dynamic content here -->
        </div>

        <!-- Navigation -->
        <div class="{prefix}-navigation">
          <button class="{prefix}-btn" id="prev-button" disabled>
            <!-- Left arrow SVG -->
            Previous
          </button>
          <button class="{prefix}-btn primary" id="next-button">
            Let's Begin
            <!-- Right arrow SVG -->
          </button>
        </div>
      </div>

      <!-- Step Indicators -->
      <div class="{prefix}-step-indicators" id="step-indicators">
        <!-- Dots generated by JavaScript -->
      </div>

    </div>
  </div>

  <script>
    // JavaScript logic here
  </script>
</body>
</html>
```

---

## Class Naming Convention

### Format
Use project-specific prefix followed by component name:
```
{prefix}-{component-name}
```

### Examples by Project
- **Loaves and Fishes**: `loaves-fishes-option`, `loaves-fishes-btn`
- **RPR Haircare**: `rpr-option`, `rpr-btn`
- **Salon Spot**: `salon-spot-option`, `salon-spot-btn`
- **Jacksons Engineering**: `jacksons-option`, `jacksons-btn`

### Standard Component Names
- `container`, `wrapper`
- `logo-container`, `logo`
- `progress-card`, `progress-header`, `progress-bar`, `progress-fill`
- `card`, `header`, `content`
- `title`, `subtitle`, `subtitle-text`
- `question`, `max-selections`
- `options-grid`, `option`, `option-content`, `option-text`, `option-label`
- `option-icon` (hidden), `option-detail`, `option-placeholder`, `option-checkbox`
- `textarea`, `input`
- `navigation`, `btn`
- `step-indicators`, `step-dot`
- `info-block`, `summary-box`, `summary-list`

---

## Implementation Checklist

When creating a new Yoonet questionnaire form, follow this checklist:

### Setup
- [ ] Copy HTML structure template
- [ ] Replace `{prefix}` with project-specific prefix (e.g., `client-name`)
- [ ] Update page title with client name
- [ ] Include Google Fonts link (Lato and Dosis)

### CSS
- [ ] Copy complete CSS variable set to `:root`
- [ ] Copy all component styles
- [ ] Update all class names with project prefix
- [ ] Verify `.{prefix}-option-icon { display: none; }` to hide icons in options
- [ ] Verify restart button uses brand color, not green

### Typography
- [ ] H1 (Brand Title): 32px Dosis Bold, `var(--brand)`
- [ ] H2 (Step Title): 24px Dosis Bold, `#6b7094`, 10px margin-bottom
- [ ] Subtitle: 15px Lato Normal, `#6b7094`
- [ ] Question: 17px Lato Bold, `#6b7094`
- [ ] Option Labels: 17px Lato Normal, `#6b7094`
- [ ] Buttons: 16px Dosis Bold

### Components
- [ ] Logo displays correctly (40px max-width)
- [ ] Progress bar gradient: `linear-gradient(90deg, var(--brand), var(--accent))`
- [ ] Options grid: 1 column mobile, 2 columns desktop (768px+)
- [ ] Icons hidden in option buttons, visible in info blocks
- [ ] Checkbox icons show correct SVG (filled when selected, outline when not)
- [ ] Navigation buttons styled correctly
- [ ] Step indicators: active (32px brand), completed (8px accent), upcoming (8px border)

### Interactive States
- [ ] Option hover: light blue background, transform up, shadow
- [ ] Option selected: brand border, light blue background, branded shadow
- [ ] Button hover: transform up, enhanced shadow
- [ ] Button active: transform down, reduced shadow
- [ ] Input/textarea focus: brand border, blue glow shadow

### Content
- [ ] Update client name in header
- [ ] Add all questions and options
- [ ] Set correct total steps count
- [ ] Add info blocks where needed (with visible emojis)
- [ ] Create summary page content

### JavaScript
- [ ] Step management logic
- [ ] Progress calculation
- [ ] Option selection handling (single/multiple)
- [ ] Navigation enabling/disabling
- [ ] Step indicators updating
- [ ] Response storage
- [ ] Final page: "Visit our website" button with brand color

### Testing
- [ ] Desktop layout (800px max-width)
- [ ] Mobile responsive (single column options)
- [ ] All hover states working
- [ ] All buttons functional
- [ ] Progress bar animates smoothly
- [ ] Step indicators update correctly
- [ ] Form validation works
- [ ] Final button color is brand blue, not green

---

## Key Design Rules

### DO's ✅
- Use Dosis for headings and buttons
- Use Lato for body text
- Make question text bold (700)
- Make option labels normal weight (400)
- Keep step titles bold (700) at 24px
- Show logo at top
- Hide icons in option buttons (selections/choices)
- Show icons/emojis in info blocks
- Use brand color (#8A9EFF) for primary actions
- Use accent color (#FA6492) for progress indicators
- Keep 800px max-width for content
- Use 12px gap for options grid
- Use 16px border-radius for cards
- Use 12px border-radius for buttons/inputs
- Animate transforms and shadows on hover
- Use brand color for restart/final button

### DON'Ts ❌
- Don't use green for restart button (use brand color)
- Don't show icons/emojis in option buttons
- Don't make option labels bold
- Don't make step subtitle bold
- Don't use uppercase text transform on step titles
- Don't exceed 800px max-width
- Don't use sharp corners (always use border-radius)
- Don't forget hover states
- Don't forget disabled states
- Don't forget focus states for inputs

---

## Quick Reference Card

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| H1 Brand Title | Dosis | 32px | 700 | #8A9EFF |
| H2 Step Title | Dosis | 24px | 700 | #6b7094 |
| Header Subtitle | Lato | 15px | 400 | #6b7094 |
| Step Subtitle | Lato | 15px | 400 | #6b7094 |
| Question Text | Lato | 17px | 700 | #6b7094 |
| Option Label | Lato | 17px | 400 | #6b7094 |
| Option Detail | Lato | 14px | 400 | #7d728a |
| Option Placeholder | Lato | 12px | 400 | #9BA1B4 |
| Button Text | Dosis | 16px | 700 | varies |

---

## Example Usage

### Creating a New Form

1. **Start with template**: Copy the HTML structure template
2. **Set prefix**: Replace `{prefix}` with `client-name` (e.g., `acme-corp`)
3. **Update CSS**: Replace all `{prefix}` in CSS with `acme-corp`
4. **Add content**: Fill in questions, options, and client-specific text
5. **Test responsive**: Verify mobile and desktop layouts
6. **Test interactions**: Check all hover, selected, and disabled states
7. **Verify colors**: Ensure all buttons use correct colors (brand blue for primary/restart)

---

## Version History

- **v1.0** - Initial comprehensive design system
  - Complete color palette
  - Full typography specifications
  - All component specifications
  - Implementation checklist
  - Key design rules

---

**Document maintained by**: Yoonet Design Team
**Last updated**: 2025

# Design Guidelines: apna hisaab - High-Fashion Finance Landing

## Design Approach
**Reference-Based: Luxury Editorial** - Inspired by Zara's minimalist marketing and high-end fashion magazines (Vogue, Kinfolk). The design embodies expensive simplicity through dramatic typography, generous whitespace, and monochromatic sophistication.

---

## Core Design Elements

### A. Color Palette
**Monochromatic Luxury**
- **Primary Dark**: 0 0% 8% (Rich black, almost charcoal)
- **Secondary Dark**: 0 0% 15% (Lighter charcoal for depth)
- **Background**: 0 0% 98% (Off-white, editorial paper feel)
- **Accent**: 0 0% 25% (Muted grey for borders and subtle elements)
- **Text Primary**: 0 0% 10%
- **Text Secondary**: 0 0% 40%

**Indian Currency Accent** (sparingly):
- **₹ Symbol Highlight**: 142 30% 25% (Muted sage green - subtle reference to Indian currency without being literal)

### B. Typography
**Editorial Hierarchy**
- **Primary Display**: Playfair Display (900) - Hero headlines, brand name
- **Secondary Headers**: Libre Baskerville (700) - Section titles  
- **Body/UI**: Inter (400, 500, 600) - Clean, readable for data and descriptions
- **Accent**: Space Mono (400) - Monospace for numbers and financial data

**Scale**:
- Hero: text-7xl to text-8xl (desktop), text-5xl (mobile)
- Section Headers: text-4xl to text-5xl
- Body: text-base to text-lg
- Financial Data: text-3xl to text-4xl (monospace)

### C. Layout System
**Editorial Grid with Breathing Room**
- **Spacing Units**: Consistently use 8, 16, 24, 32 for rhythm (p-8, p-16, p-24, p-32)
- **Max Width**: max-w-7xl for full sections, max-w-4xl for text-focused content
- **Vertical Rhythm**: py-32 desktop sections, py-20 mobile
- **Asymmetric Balance**: Offset hero content, staggered data displays

---

## Page Structure & Components

### 1. Hero Section (Full Viewport - 100vh)
**Composition**:
- Large hero image: Minimalist lifestyle shot (person checking phone with coffee/minimal desk setup - muted tones, lots of negative space, editorial lighting)
- Image treatment: Slight desaturation, high contrast, vignette edge fade
- Overlay: Subtle gradient overlay (0 0% 0% at 40% opacity) for text legibility
- Typography: "apna hisaab" in massive Playfair Display (text-8xl), positioned upper-left with dramatic spacing
- Motto: "keep track of your money, simply!" in lighter weight below, text-2xl
- CTA Button: Outlined button with backdrop-blur-md, white border, white text - "Join the Waitlist"

**Layout**: Asymmetric - brand/motto on left 60%, hero image bleeds right, button centered bottom third

### 2. Value Proposition (Split Section)
**Left Column** (40% width):
- Large editorial number "01" in Playfair Display
- Subhead: "WhatsApp. That's it."
- Body text: Elegant description of simplicity

**Right Column** (60% width):
- Mock WhatsApp chat interface showing finance tracking
- Clean message bubbles with ₹ amounts
- Subtle shadow, rounded corners, authentic WhatsApp green (#075E54) used minimally

### 3. Data Showcase (Full Width, Dark Background)
**Background**: 0 0% 8% (rich black section for contrast)
**Content**: Three staggered cards displaying:
- "Spent Today: ₹2,847" 
- "Spent This Week: ₹18,432"
- "Spent This Month: ₹64,219"

**Card Design**:
- Glass morphism effect: bg-white/5, backdrop-blur-sm
- Border: 1px solid white/10
- Typography: Space Mono for numbers (text-4xl), Inter for labels
- Layout: Asymmetric grid - desktop 3 columns with varying vertical alignment, mobile stacked

### 4. Waitlist Form Integration (Premium Section)
**Background**: 0 0% 98% (back to light)
**Composition**:
- Section header: "Be Among the First" (Libre Baskerville, text-5xl)
- Supporting text: "Join our exclusive waitlist for early access"
- Visual frame for form: Minimal border container with shadow
- Google Form embedded in clean iframe OR styled button linking to form
- Button design: Solid dark background (0 0% 8%), white text, hover lift effect

### 5. Footer (Minimal Editorial)
**Layout**: Single line, centered
- "apna hisaab © 2024" in small Inter
- Subtle divider lines flanking text
- Muted text color (0 0% 40%)

---

## Component Library

### Buttons
- **Primary CTA**: bg-[hsl(0 0% 8%)] text-white, hover:bg-[hsl(0 0% 15%)], px-12 py-4
- **Outline on Image**: border-2 border-white text-white backdrop-blur-md bg-white/10 NO hover interactions (button handles its own states)

### Cards
- **Data Cards**: Subtle borders, generous padding (p-12), minimal shadows
- **WhatsApp Mock**: Authentic styling, subtle drop shadow, rounded-2xl

### Typography Elements
- **Drop Caps**: First letter enlarged for editorial sections
- **Pull Quotes**: If testimonials added, use 3xl italic with decorative quotation marks
- **Number Treatment**: Monospace (Space Mono) for all financial data

---

## Images

### Required Images:
1. **Hero Image**: Editorial lifestyle photography - minimal desk/workspace, person with phone, muted color palette (beige/cream tones), professional lighting, lots of negative space for text overlay. Think Kinfolk magazine aesthetic.

2. **WhatsApp Interface Mock**: Clean screenshot or designed mockup showing finance tracking messages with ₹ amounts, timestamps, check marks

### Image Treatment:
- Subtle desaturation (80% saturation)
- High contrast with controlled highlights
- Vignette edges where text overlays
- All images should feel cohesive in tone - muted, professional, uncluttered

---

## Animation & Interaction
**Minimal & Purposeful**:
- Smooth scroll behavior
- Fade-in on scroll for data cards (staggered, 100ms delay each)
- Subtle hover lift on CTA buttons (translateY(-2px))
- NO distracting animations - maintain editorial stillness

---

## Responsive Behavior
- **Mobile**: Stack all sections, maintain generous padding (reduce to py-16)
- **Tablet**: Begin introducing asymmetric layouts  
- **Desktop**: Full editorial grid with dramatic spacing

**Critical**: Maintain the high-fashion, uncluttered feel across all breakpoints. Never compromise whitespace for content density.
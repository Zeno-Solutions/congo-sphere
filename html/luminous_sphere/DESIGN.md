# Design System Strategy: The Luminescent Void

## 1. Overview & Creative North Star
This design system is built to transform 'Congo Sphere' from a mere utility into a premium digital destination. Our Creative North Star is **"The Luminescent Void."** 

We treat the screen not as a flat surface, but as a deep, nocturnal expanse where information floats in layers of light and frosted glass. To move beyond the "standard template" look, we utilize intentional asymmetry and high-contrast editorial typography. We break the rigid grid by allowing glass elements to overlap and by using tonal depth rather than structural lines to define hierarchy. Every interaction should feel like peering into a high-end, exclusive event space.

---

## 2. Colors
Our palette is rooted in deep indigo and obsidian tones, punctuated by vibrant, energetic pulses of light.

### The Palette
*   **Core Base:** `background` (#0d0d18) and `surface_container_lowest` (#000000).
*   **The Signature Gradient:** Our primary visual "soul" is a linear gradient transitioning from `primary` (#cc97ff) to `secondary` (#ff67ad). Use this for high-impact actions and hero states.
*   **Functional Tones:** `tertiary` (#9093ff) acts as a cooling agent for informative states, while `error` (#ff6e84) provides a high-visibility warning that feels integrated, not jarring.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off the UI. Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` section sitting on a `surface` background creates a natural, sophisticated edge without the "boxed-in" feel of traditional UI.

### The "Glass & Gradient" Rule
To achieve a custom, premium feel, floating elements (modals, navigation bars, featured cards) must utilize Glassmorphism. Apply a semi-transparent surface color combined with a `backdrop-filter: blur(20px)`. This allows the "Void" to bleed through, ensuring the UI feels like a single, cohesive atmosphere.

---

## 3. Typography
We use a dual-typeface system to balance authority with readability.

*   **Display & Headlines (Plus Jakarta Sans):** Used for all `display-` and `headline-` tokens. This should be high-contrast white (`on_surface`). Use these for event titles and main headers to establish a bold, editorial voice.
*   **Body & Labels (Manrope):** Used for `title-`, `body-`, and `label-` tokens. This font provides a clean, modern technical feel. Use `on_surface_variant` (#aba9b9) for body text to reduce eye strain and maintain the dark-mode aesthetic.

**Hierarchy Strategy:** 
Large, tight-leading headlines paired with generous white space around body text creates an "Editorial" look. Don't be afraid of the `display-lg` scale; it commands attention and defines the platform's premium positioning.

---

## 4. Elevation & Depth
In this design system, depth is achieved through **Tonal Layering**, not structural shadows.

### The Layering Principle
Think of the UI as a series of stacked sheets of frosted glass. 
1.  **Level 0 (Base):** `surface` (#0d0d18).
2.  **Level 1 (Sections):** `surface_container_low` (#12121e).
3.  **Level 2 (Cards/Floating):** `surface_container_high` (#1e1e2d) or `surface_container_highest` (#242434).

### Ambient Shadows
When a "floating" effect is required (e.g., a primary CTA or a featured event card), shadows must be extra-diffused.
*   **Blur:** 24px to 40px.
*   **Opacity:** 10%–15%.
*   **Color:** Use a tinted version of `primary` or `surface_tint` to mimic the glow of the accent colors against the dark background.

### The "Ghost Border" Fallback
If a border is required for accessibility, use a **Ghost Border**: the `outline_variant` token at 15% opacity. Never use 100% opaque, high-contrast borders.

---

## 5. Components

### Buttons
*   **Primary:** Rounded `full` (9999px). Uses the Signature Gradient (Primary to Secondary). Text is `on_primary_fixed` (Black) for maximum legibility.
*   **Secondary:** Rounded `full`. Semi-transparent `surface_variant` with a Ghost Border.
*   **Tertiary:** No background. Text-only using the `primary` color token.

### Input Fields
*   **Style:** `surface_container_low` background with a `sm` (0.5rem) or `DEFAULT` (1rem) corner radius. 
*   **State:** On focus, the border transitions from a Ghost Border to a subtle `primary` glow.

### Cards & Lists
*   **Forbid Dividers:** Do not use lines to separate list items. Use vertical white space (`spacing-4` or `spacing-6`) or subtle alternating background shifts (`surface` to `surface_container_low`).
*   **Event Cards:** Use `xl` (3rem) or `lg` (2rem) rounded corners. Apply a subtle backdrop-blur if the card overlays an image.

### Chips
*   **Action Chips:** High-radius `full`. Use `surface_container_highest` for the background to make them "pop" against the base layer.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Let images or text blocks bleed off-center to create a dynamic feel.
*   **Do** prioritize "negative space." The dark background is a feature, not a void to be filled.
*   **Do** use the `primary` glow effect sparingly to highlight the single most important action on a screen.
*   **Do** use high-quality, vibrant photography to contrast against the dark UI.

### Don't
*   **Don't** use pure white (#FFFFFF) for long-form body text; it creates "halation" (visual vibration) on dark backgrounds. Use `on_surface_variant`.
*   **Don't** use sharp 90-degree corners. Everything in the system should feel organic and smooth.
*   **Don't** use traditional drop shadows with a "Y" offset and high opacity. They look dated and heavy.
*   **Don't** cram components together. Follow the Spacing Scale strictly to maintain the high-end, breathable feel.
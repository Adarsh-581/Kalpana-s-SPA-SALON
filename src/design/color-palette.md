# Kalpana — Color Palette (Hex + Usage)

This page is for teammates and design QA. Hex values are the canonical tokens; the app’s runtime uses HSL CSS variables derived from the same palette.

## Canonical Hex Tokens

### Background & Surfaces
- `ivory` — `#F9F6F1`
- `beige` — `#EDE3D3`
- `sand` — `#DCCBB3`
- `taupe` — `#B7A38C`

### Text
- `textHeading` — `#2E2E2E`
- `textBody` — `#4A3E38`
- `textMuted` — `#8C7B73`

### Sage (Premium Greens)
- `sageSoft` — `#EEF4EC`
- `sageLight` — `#D4E0D0`
- `sage` — `#A8B5A2`
- `sageDeep` — `#7A9172`
- `sageDark` — `#546852`

### Earth / Terracotta
- `earthDeep` — `#6B4F3A`
- `terracotta` — `#C89B7B`
- `clay` — `#A6785A`

### Gold (Primary CTA)
- `goldSoft` — `#FAF4EB`
- `goldLight` — `#E8D5B7`
- `gold` — `#C9A96E`
- `goldDeep` — `#A07B45`

### Borders / Inputs
- `border` — `#DCCBB3`

## Semantic Mapping (Recommended)

Use semantic meanings instead of raw colors when possible:
- `background` → `ivory`
- `surface` → `#FFFFFF`
- `border` → `sand`
- `textHeading` → `#2E2E2E`
- `textBody` → `#4A3E38`
- `textMuted` → `#8C7B73`
- `primary` → `gold` (`#C9A96E`)
- `primaryHover` → `goldDeep` (`#A07B45`)
- `primaryText` → `#FFFFFF`
- `secondary` → `sage` (`#A8B5A2`)

## Luxury Contrast Rules (Must Not Break)

1. Never use light text on light backgrounds without a dark overlay or sufficient contrast.
2. Never use gold text on beige surfaces without careful contrast checks.
3. For image hero backgrounds: apply a subtle overlay (~`0.3–0.45` opacity) so text remains crisp.

## Button System (Gold Pill)

Primary button:
- Default: `bg = gold (#C9A96E)`, `text = earthDeep (#6B4F3A)`
- Hover: `bg = goldDeep (#A07B45)`, subtle lift animation

Secondary button:
- Default: `transparent` + `border = gold`
- Hover: fill to gold, `text = earthDeep`

## Section Flow (Brand Rhythm)

Maintain the calm, premium progression:
`ivory → beige → white → sageSoft (repeat)`

## Gradients & Overlays (How to Use)

### Gold Gradient (CTA richness)
Use a two-stop or three-stop gold gradient for “premium emphasis”.
- `goldLight` → `gold` → `goldDeep`
  - Start: `#E8D5B7`
  - Middle: `#C9A96E`
  - End: `#A07B45`

### Luxury Background Gradient (Hero / section depth)
Blend light warm gold and sage softness:
- Suggested stops:
  - `#FAF4EB` (goldSoft)
  - `#EDE3D3` (beige)
  - `#EEF4EC` (sageSoft)

### Image Background Typography Rule
For heroes and image-heavy sections, use a subtle overlay so text always stays readable:
- Overlay base: `#2E2014` (earthDeep-ish)
- Recommended opacity: `0.30–0.45`

Example rule:
- dark overlay: `rgba(46, 32, 20, 0.35)`


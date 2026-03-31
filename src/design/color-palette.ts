/**
 * Kalpana — Color Palette (hex + semantic mapping)
 * Use this file to keep UI consistent across components.
 *
 * Notes:
 * - Hex values are the canonical tokens for cross-team discussion.
 * - The app itself uses HSL CSS variables in `src/index.css`.
 * - When adding new UI, pick from `semantic` whenever possible.
 */

export const colors = {
  // Background / surfaces
  ivory: "#F9F6F1",
  beige: "#EDE3D3",
  sand: "#DCCBB3",
  taupe: "#B7A38C",

  // Text (base)
  textHeading: "#2E2E2E",
  textBody: "#4A3E38",
  textMuted: "#8C7B73",

  // Sage (premium greens)
  sageSoft: "#EEF4EC",
  sageLight: "#D4E0D0",
  sage: "#A8B5A2",
  sageDeep: "#7A9172",
  sageDark: "#546852",

  // Earth / terracotta accents
  earthDeep: "#6B4F3A",
  terracotta: "#C89B7B",
  clay: "#A6785A",

  // Gold (primary CTA)
  goldSoft: "#FAF4EB",
  goldLight: "#E8D5B7",
  gold: "#C9A96E",
  goldDeep: "#A07B45",

  // Borders / inputs
  border: "#DCCBB3",
};

/**
 * Semantic tokens: prefer these keys in UI code.
 * This keeps meaning stable even if raw hex values ever change later.
 */
export const semantic = {
  background: colors.ivory,
  surface: "#FFFFFF",
  border: colors.border,
  textHeading: colors.textHeading,
  textBody: colors.textBody,
  textMuted: colors.textMuted,

  primary: colors.gold,
  primaryHover: colors.goldDeep,
  primaryText: "#FFFFFF",

  secondary: colors.sage,
  secondaryText: "#FFFFFF",

  // Common on dark/photography overlays
  overlayText: "#FFFFFF",
  overlayTint: "#2E2014", // used as a general dark overlay base (combine with opacity)
};

/**
 * Contrast checklist (qualitative guidance)
 * - Never place `textBody` on `ivory` without enough opacity/weight.
 * - For light backgrounds: use `textHeading` or `textBody`.
 * - For gold buttons: dark text is `earthDeep` to keep the premium feel.
 */
export const representationNotes = {
  luxuryBackgroundFlow: ["ivory → beige → white → sageSoft (repeat)"],
  buttonSystem: {
    primary: { bg: colors.gold, hoverBg: colors.goldDeep, text: colors.earthDeep },
    secondary: { border: colors.gold, hoverBg: colors.gold, text: colors.earthDeep },
  },
  imageryOverlays: "Use subtle dark overlay ~0.3–0.45 opacity so typography stays readable.",
};


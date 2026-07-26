/** Product name constants — used across pages and metadata */
export const productNames = {
  /** Primary social platform under active development */
  aurora: "Aurora",

  /** Humanoid robotics research initiative */
  xom: "XO-M",

  /** Medical robotics research initiative */
  xomed: "XO-Med",

  /** Portfolio-level label for future exploration */
  futureInitiatives: "Future Initiatives",
} as const;

/** All product names as an array */
export const allProductNames = [
  productNames.aurora,
  productNames.xom,
  productNames.xomed,
] as const;

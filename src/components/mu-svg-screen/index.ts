export type Link = {
  /**
   * Type of link
   */
  type: "circle" | "rect";
  /**
   * Href (url) for link
   */
  href: string;
};

export type CircleLink = Link & {
  /**
   * Center X coord
   */
  cx: number;
  /**
   * Center Y coord
   */
  cy: number;
  /**
   * Radius
   */
  r: number;
};

export type RectLink = Link & {
  /**
   * Width
   */
  width: number;
  /**
   * Height
   */
  height: number;
  /**
   * X coord
   */
  x: number;
  /**
   * Y coord
   */
  y: number;
};

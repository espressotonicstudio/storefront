// import { tv } from "tailwind-variants";

export type Shapes = "circle" | "rounded" | "sharp";
export type Themes = "solid" | "outline" | "retro" | "glass";

export type DefaultStyleProps = {
  fontColour?: string;
  backgroundColor?: string;
  shape?: Shapes;
  theme?: Themes;
};

export const getShapeStyles = (shape?: Shapes) => {
  if (!shape) return "";

  return {
    "rounded-full": shape === "circle",
    "rounded-md": shape === "rounded",
    "rounded-none": shape === "sharp",
  };
};

export type Shadows = "none" | "soft" | "hard" | "none";

export const getShadowStyles = (shadow?: Shadows, color?: string) => {
  if (!shadow) return "";

  return {
    [`drop-shadow(6px_6px_${color})`]: shadow === "hard",
  };
};

export const getThemeStyles = (theme?: Themes) => {
  switch (theme) {
    case "solid":
      return "";
    case "outline":
      return "bg-transparent";
    case "retro":
      return ``;
    case "glass":
      return "bg-transparent backdrop-blur-sm";
    default:
      return "";
  }
};

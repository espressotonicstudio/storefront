export type Shapes = "circle" | "square" | "rounded" | "sharp";

export type DefaultStyleProps = {
  fontColour?: string;
  backgroundColor?: string;
  shape?: Shapes;
};

export const getShapeStyles = (shape?: Shapes) => {
  if (!shape) return "";

  return {
    "rounded-full": shape === "circle",
    "rounded-md": shape === "rounded",
    "rounded-none": shape === "sharp",
  };
};

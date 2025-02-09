import Image from "next/image";

// https://cdn.simpleicons.org/[ICON SLUG]/[COLOR]/[DARK_MODE_COLOR]
const cdnLink = `https://cdn.simpleicons.org`;

const Brand = {
  instagram: `instagram`,
  x: `x`,
  github: `github`,
  youtube: `youtube`,
  tiktok: `tiktok`,
};

const createBrandLink = (
  brand: keyof typeof Brand | (string & {}),
  color: string,
  darkColor: string
) => {
  return `${`${cdnLink}/${
    Brand[brand as keyof typeof Brand] || brand
  }`}/${color}/${darkColor}`;
};

export const Social = ({
  url,
  brand,
  color = "black",
  darkColor = "white",
  size = "sm",
}: {
  url: string;
  brand: keyof typeof Brand | (string & {});
  color?: string;
  darkColor?: string;
  size?: "sm" | "md";
}) => {
  return (
    <a
      href={url}
      target="_blank"
    >
      <Image
        src={createBrandLink(brand, color, darkColor)}
        alt={url}
        width={size === "sm" ? 20 : 24}
        height={size === "sm" ? 20 : 24}
        unoptimized
      />
    </a>
  );
};

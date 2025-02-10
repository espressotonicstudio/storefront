/**
 * A link component directs users to a resource.
 * It can be used to link to a website, a social media profile, or a document.
 */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import { Button } from "../ui/button";
import { getShapeStyles, getThemeStyles, Shapes } from "@/lib/styles";
import {
  CardProps,
  MediumCardProps,
  SizeVariants,
  SmallCardProps,
} from "./types";

const mapSizeToWidth = {
  sm: 40,
  md: 140,
  lg: 100,
};

const Thumbnail = ({
  image,
  alt,
  emoji,
  size,
  shape,
}: {
  image?: string;
  alt: string;
  emoji?: string;
  size: SizeVariants;
  shape?: Shapes;
}) => {
  if (image) {
    return (
      <div>
        <img
          // priority
          src={image}
          alt={alt}
          width={mapSizeToWidth[size]}
          height={mapSizeToWidth[size]}
          className={cn(
            "aspect-square min-w-10 min-h-10",
            getShapeStyles(shape)
          )}
        />
      </div>
    );
  }

  if (emoji) {
    return (
      <span
        className={cn(
          "size-10 text-3xl content-center aspect-square",
          getShapeStyles(shape)
        )}
      >
        {emoji}
      </span>
    );
  }

  return null;
};

const SmallLinkCard = ({
  url,
  title,
  thumbnailImage,
  thumbnailEmoji,
  newTab = false,
  fontColour,
  shape = "circle",
  theme = "solid",
}: SmallCardProps) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
      style={{
        color: fontColour,
      }}
    >
      <Card
        className={cn(
          "shadow-none border-none p-2 min-h-14 rounded-full h-auto w-full relative text-center flex items-center gap-4 text-inherit",
          getShapeStyles(shape),
          getThemeStyles(theme)
        )}
      >
        <Thumbnail
          image={thumbnailImage}
          emoji={thumbnailEmoji}
          alt={title}
          shape={shape}
          size="sm"
        />
        <div
          className={cn("w-full mr-auto text-sm", {
            "pr-10": thumbnailEmoji || thumbnailImage,
          })}
        >
          {title}
        </div>
      </Card>
    </a>
  );
};

const MediumLinkCard = ({
  url,
  title,
  thumbnailImage,
  thumbnailEmoji,
  description,
  fontColour,
  newTab = false,
  shape = "rounded",
  buttonText = "Purchase",
}: MediumCardProps) => {
  return (
    <Card
      className={cn(
        "shadow-none border-none p-3 rounded-2xl w-full relative flex flex-wrap items-stretch gap-4 text-inherit",
        getShapeStyles(shape)
      )}
      style={{
        color: fontColour,
      }}
    >
      <Thumbnail
        image={thumbnailImage}
        emoji={thumbnailEmoji}
        alt={title}
        size="md"
        shape={shape}
      />
      <div className="flex flex-col flex-1 w-full mr-auto text-sm gap-2">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{description}</p>
        <a
          className="mt-auto"
          href={url}
          target={newTab ? "_blank" : "_self"}
        >
          <Button
            variant="outline"
            className="w-full whitespace-normal h-auto"
          >
            {buttonText}
          </Button>
        </a>
      </div>
    </Card>
  );
};

// Type guards to narrow the props
function isSmallCardProps(props: CardProps): props is SmallCardProps {
  return props.size === "sm";
}

function isMediumCardProps(props: CardProps): props is MediumCardProps {
  return props.size === "md";
}

export const Link = (props: CardProps) => {
  if (isSmallCardProps(props)) {
    return <SmallLinkCard {...props} />;
  }

  if (isMediumCardProps(props)) {
    return <MediumLinkCard {...props} />;
  }

  return null;
};

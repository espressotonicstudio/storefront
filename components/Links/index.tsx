/**
 * A link component directs users to a resource.
 * It can be used to link to a website, a social media profile, or a document.
 */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

type SizeVariants = "sm" | "md" | "lg";

type CardProps = {
  size: SizeVariants;
  url: string;
  thumbnailImage?: string;
  thumbnailEmoji?: string;
  title: string;
  description?: string;
  newTab?: boolean;
};

const Thumbnail = ({
  image,
  alt,
  emoji,
  size,
}: {
  image?: string;
  alt: string;
  emoji?: string;
  size: SizeVariants;
}) => {
  const mapSizeToWidth = {
    sm: 40,
    md: 140,
    lg: 100,
  };

  if (image) {
    return (
      <Image
        src={image}
        alt={alt}
        width={mapSizeToWidth[size]}
        height={mapSizeToWidth[size]}
        className={cn("rounded-full", size === "md" && "rounded-xl")}
      />
    );
  }

  if (emoji) {
    return (
      <span className="size-10 text-3xl content-center rounded-full">
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
}: Omit<CardProps, "size">) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
    >
      {/* animate-shimmer bg-[linear-gradient(110deg,#ffffff,45%,#f0f0f0,55%,#ffffff)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  */}
      <Card className="p-2 rounded-full h-auto w-full relative text-center flex items-center gap-2">
        <Thumbnail
          image={thumbnailImage}
          emoji={thumbnailEmoji}
          alt={title}
          size="sm"
        />
        <div className={cn("w-full mr-auto text-sm pr-10")}>{title}</div>
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
  newTab = false,
}: Omit<CardProps, "size">) => {
  return (
    <a
      href={url}
      target={newTab ? "_blank" : "_self"}
    >
      {/* animate-shimmer bg-[linear-gradient(110deg,#ffffff,45%,#f0f0f0,55%,#ffffff)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  */}
      <Card className="p-3 rounded-2xl w-full relative flex items-stretch gap-3">
        <Thumbnail
          image={thumbnailImage}
          emoji={thumbnailEmoji}
          alt={title}
          size="md"
        />
        <div className="flex flex-col w-full mr-auto text-sm gap-2">
          <p className="font-bold">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
          <Button
            variant="outline"
            className="w-full mt-auto"
          >
            Purchase
          </Button>
        </div>
      </Card>
    </a>
  );
};

export const Link = ({ size = "sm", ...props }: CardProps) => {
  if (size === "sm") {
    return <SmallLinkCard {...props} />;
  }

  if (size === "md") {
    return <MediumLinkCard {...props} />;
  }

  return null;
};

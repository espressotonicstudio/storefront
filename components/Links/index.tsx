/**
 * A link component directs users to a resource.
 * It can be used to link to a website, a social media profile, or a document.
 */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SizeVariants = "sm" | "md" | "lg";

type CardProps = {
  size: SizeVariants;
  url: string;
  thumbnailImage?: string;
  thumbnailEmoji?: string;
  title: string;
  newTab?: boolean;
};

const CardContent = ({
  size,
  children,
}: {
  size: SizeVariants;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={cn(
        "w-full mr-auto text-sm",
        size === "sm" && "pr-10",
        size === "md" && "pr-12",
        size === "lg" && "pr-14"
      )}
    >
      {children}
    </span>
  );
};

const Thumbnail = ({
  image,
  alt,
  emoji,
}: {
  image?: string;
  alt: string;
  emoji?: string;
}) => {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt}
        width={40}
        height={40}
        className="rounded-full"
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
      className="hover:scale-[1.03] transition-all duration-300"
    >
      {/* animate-shimmer bg-[linear-gradient(110deg,#ffffff,45%,#f0f0f0,55%,#ffffff)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  */}
      <Card className="p-2 rounded-full h-auto w-full relative text-center flex items-center gap-2">
        <Thumbnail
          image={thumbnailImage}
          emoji={thumbnailEmoji}
          alt={title}
        />
        <CardContent size="sm">{title}</CardContent>
      </Card>
    </a>
  );
};

export const Link = ({ size = "sm", ...props }: CardProps) => {
  if (size === "sm") {
    return <SmallLinkCard {...props} />;
  }

  return null;
};

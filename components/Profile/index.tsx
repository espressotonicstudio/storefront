"use server";

/**
 * Displays the profile header with the user's name, email, and profile picture
 */

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type ProfilePictureProps = {
  src: string;
  fallback?: string;
};

const ProfilePicture = ({ src, fallback }: ProfilePictureProps) => {
  return (
    <Avatar className="size-24">
      <AvatarImage
        src={src}
        fetchPriority="high"
      />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

type ProfileProps = {
  name: string;
  description: string;
} & ProfilePictureProps;

export const Profile = async ({
  src,
  fallback = "",
  name,
  description,
}: ProfileProps) => {
  return (
    <section className="flex flex-col items-center gap-2">
      <ProfilePicture
        src={src}
        fallback={fallback}
      />
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </section>
  );
};

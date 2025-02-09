"use server";

import { Link } from "@/components/Links";
import { Profile } from "@/components/Profile";

export default async function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-md mx-auto space-y-16">
        <Profile
          src="https://github.com/shadcn.png"
          name="@espressotonicstudio"
          description="We're a lovely team of two! We teach you how to create your own apps on the web."
        />
        <section className="flex flex-col gap-4">
          <Link
            size="sm"
            url="https://github.com/espressotonicstudio"
            title="FIRE Podcast 🎧 🔥"
            thumbnailEmoji="🎧"
          />
          <Link
            size="sm"
            url="https://buy.polar.sh/polar_cl_6fyV7yILyAAKa9tLkMDHBBL2AGSxq8KaRVkjb3K2G1O"
            title="Want to build your own app? Book a free consultation with Espresso Tonic Studio"
            thumbnailImage="https://github.com/shadcn.png"
          />
          <Link
            size="md"
            url="https://buy.polar.sh/polar_cl_6fyV7yILyAAKa9tLkMDHBBL2AGSxq8KaRVkjb3K2G1O"
            title="Want to build your own app?"
            description="We're a lovely team of two! We teach you how to create your own apps on the web."
            thumbnailImage="https://github.com/shadcn.png"
          />
        </section>
      </main>
    </div>
  );
}

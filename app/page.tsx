import { Link } from "@/components/Links";
import { OneClickDeploy } from "@/components/OneClickDeploy";
import { Profile } from "@/components/Profile";
import { Social } from "@/components/Socials";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Espresso Tonic Studio",
    description:
      "We're a development studio and we teach you how to build your own apps on the web.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://espressotonicstudio.com",
      title: "Espresso Tonic Studio",
      description:
        "We're a development studio and we teach you how to build your own apps on the web.",
    },
  };
};

export default async function Home() {
  return (
    <div className="min-h-screen px-4 py-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-md mx-auto space-y-12 sm:space-y-16">
        <Profile
          src="/logo.png"
          name="@espressotonicstudio"
          description="We're a development studio and we teach you how to build your own apps on the web."
        />
        <section
          id="links"
          className="flex flex-col gap-4"
        >
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
            thumbnailImage="/logo.png"
          />
          <Link
            size="md"
            url="https://buy.polar.sh/polar_cl_6fyV7yILyAAKa9tLkMDHBBL2AGSxq8KaRVkjb3K2G1O"
            title="Want to build your own app?"
            description="We're a lovely team of two! We teach you how to create your own apps on the web."
            thumbnailImage="/logo.png"
          />
        </section>
        <section
          id="socials"
          className="flex gap-4 mx-auto justify-center"
        >
          <Social
            url="https://x.com/espressotonicstudio"
            brand="x"
          />
          <Social
            url="https://youtube.com/@espressotonicstudio"
            brand="youtube"
          />
          <Social
            url="https://tiktok.com/@espressotonicstudio"
            brand="tiktok"
          />
        </section>
        <OneClickDeploy />
      </main>
    </div>
  );
}

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { OpenPanelComponent } from "@openpanel/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <OpenPanelComponent
          clientId={process.env.OPEN_PANEL_CLIENT_ID!}
          trackScreenViews={true}
          // trackAttributes={true}
          // trackOutgoingLinks={true}
          // If you have a user id, you can pass it here to identify the user
          // profileId={'123'}
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

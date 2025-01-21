import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./styles/globals.css";
import "../themes/themes.css";

import { env } from "@/env.mjs";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers/providers";
import { ThemeWrapper } from "@/components/themes/theme-wrapper";
import { ThemeSwitcher } from "@/components/themes/theme-swticher";
import { MountClientWrapper } from "@/components/providers/mount-client-wrapper";

const font = Montserrat({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: `${siteConfig.name} - AI-Powered Pharmacy Management`,
    template: `%s - ${siteConfig.name}`,
  },
  description: "PillHub AI revolutionizes pharmacy operations with intelligent automation, prescription processing, and patient care management. Streamline your pharmacy workflow with our advanced AI solutions.",
  manifest: "/manifest.json",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
  keywords: [
    "Pharmacy Management",
    "PillHub AI",
    "Healthcare Technology",
    "Prescription Processing",
    "AI Healthcare",
    "Pharmacy Automation",
    "Patient Care Management",
    "Digital Pharmacy",
    "Healthcare Innovation",
    "Pharmacy Software",
    "Medical Technology",
    "Pharmacy Operations",
    "Healthcare Automation",
    "Prescription Management",
    "Smart Pharmacy",
    "Healthcare Solutions"
  ],
  authors: [
    {
      name: "Mahmood Hamsho",
      url: "",
    },
  ],
  creator: "PillHub AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "PillHub AI - Intelligent Pharmacy Management",
    description: "Transform your pharmacy operations with AI-powered automation, smart prescription processing, and enhanced patient care management.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/pharmacy_875x875.png",
        width: 875,
        height: 875,
        alt: "PillHub AI Logo"
      }
    ]
  },
  icons: {
    icon: "/pharmacy_logo.ico", // Add this line to specify the favicon path
    shortcut: "/pharmacy_logo.ico", // Add this line for the shortcut icon
    apple: "/pharmacy_logo.ico", // Add this line for the Apple touch icon
  },
  twitter: {
    card: "summary_large_image",
    title: "PillHub AI - Intelligent Pharmacy Management",
    description: "Transform your pharmacy operations with AI-powered automation and smart prescription processing.",
    images: ["/pharmacy_875x875.png"],
    creator: "@pillhub_ai"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background antialiased", font.className)}>
        <Providers>
          <ThemeWrapper>
            <Toaster />
            <MountClientWrapper>{children}</MountClientWrapper>
          </ThemeWrapper>
          <ThemeSwitcher />
        </Providers>
      </body>
    </html>
  );
}
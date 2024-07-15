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
    default: `${siteConfig.name} - Embedded Insurance Solutions`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: "/manifest.json",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
  keywords: [
    "Embedded",
    "Bedouin",
    "Lloyds",
    "Staffing",
    "Healthcare",
    "Nursing",
    "Cancellation",
    "Expenses",
    "Income",
    "Finance",
    "Expense Tracker",
    "Budget",
    "Money",
    "Transactions",
    "Dashboard",
    "Transfer",
    "Insurance",
    "Savings",
    "Investments",
    "Miscellaneous",
    "Dues",
    "Custom Theme",
  ],
  authors: [
    {
      name: "Mahmood Hamsho",
      url: "",
    },
  ],
  creator: "Bedouin",
  openGraph: {
    type: "website",
    locale: "",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/bedouin_logo.ico", // Add this line to specify the favicon path
  },
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

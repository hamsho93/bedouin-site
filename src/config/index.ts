import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Bedouin",
  description:
    "Embedded Insurance",
  url: "https://withbedouin.com",
};

export const currencies = [
  {
    value: "₹",
    label: "INR",
  },
  {
    value: "$",
    label: "USD",
  },
  {
    value: "€",
    label: "EUR",
  },
  {
    value: "£",
    label: "GBP",
  },
];

export const accountTypes = [
  {
    value: "savings",
    label: "Savings",
  },
  {
    value: "investments",
    label: "Investments",
  },
  {
    value: "miscellaneous",
    label: "Miscellaneous",
  },
];

export const accounts = [
  {
    label: "Dashboard",
    href: "/dashboard",
    Icon: Icons.dashboard,
  },
  {
    label: "Expense Tracker",
    href: "/expense-tracker",
    Icon: Icons.wallet,
  },
  {
    label: "Savings",
    href: "/savings",
    Icon: Icons.piggy,
  },
  {
    label: "Investments",
    href: "/investments",
    Icon: Icons.investments,
  },
  {
    label: "Miscellaneous",
    href: "/miscellaneous",
    Icon: Icons.siren,
  },
  {
    label: "Dues",
    href: "/dues",
    Icon: Icons.due,
  },
];

export const settings = [
  {
    label: "Customize",
    href: "/customize",
    Icon: Icons.customize,
    hardReload: true,
  },
  {
    label: "About",
    href: "/about",
    Icon: Icons.info,
  },
  {
    label: "Help",
    href: "/help",
    Icon: Icons.help,
  },
];

export const INFINITE_SCROLLING_PAGINATION_RESULTS = 10;

export const techStack = [
  {
    name: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    name: "tRPC",
    url: "https://trpc.io/",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Drizzle",
    url: "https://orm.drizzle.team/",
  },
  {
    name: "Supabase",
    url: "https://supabase.com",
  },
  {
    name: "NextAuth",
    url: "https://next-auth.js.org/",
  },
];

export const features = [
  "Authentication with NextAuth",
  "Type-safe API with tRPC",
  "Database with Supabase",
  "ORM with Drizzle",
  "Tailwind CSS for styling",
];

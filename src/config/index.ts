import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Limetta",
  description:
    "Elevate your financial management with Limetta. Our user-friendly Next.js app simplifies expense tracking, offers multiple account management, easy money transfers, and efficient dues tracking. Take charge of your finances and make informed choices, all in one platform.",
  url: "https://balancewise.vercel.app",
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
    label: "Overview",
    href: "/overview",
    Icon: Icons.overview,
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
    name: "PlanetScale",
    url: "https://planetscale.com/",
  },
  {
    name: "NextAuth",
    url: "https://next-auth.js.org/",
  },
];

export const features = [
  "Authentication with NextAuth",
  "Type-safe API with tRPC",
  "Database with PlanetScale",
  "ORM with Drizzle",
  "Tailwind CSS for styling",
];

export const credits = [
  {
    name: "Bhargav Sadineni",
    role: "Entrepreneur and Tester",
    social: "https://www.linkedin.com/in/bhargav-sadieni-830892204",
  },
  // {
  //   name: "Agamjot Singh",
  //   role: "Entrepreneur, Innovator and Tester",
  //   social: "https://www.linkedin.com/in/bhargav-sadieni-830892204",
  // },
];

export const socials = [
  {
    id: 1,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sukrit-saha-b6117a242/",
  },
  {
    id: 2,
    label: "GitHub",
    href: "https://github.com/Sukrittt",
  },
  {
    id: 3,
    label: "Twitter",
    href: "https://twitter.com/SukritSaha11",
  },
  {
    id: 4,
    label: "Instagram",
    href: "https://www.instagram.com/sukrit_04/",
  },
];

export const contact = [
  {
    id: 1,
    label: "Email",
    linkLabel: "sukritsaha27@gmail.com",
    href: "mailto:sukritsaha27@gmail.com",
  },
  {
    id: 2,
    label: "Phone",
    linkLabel: "+91 8240849936",
    href: "tel:+918240849936",
  },
  {
    id: 3,
    label: "Twitter",
    linkLabel: "@SukritSaha11",
    href: "https://twitter.com/SukritSaha11",
  },
];

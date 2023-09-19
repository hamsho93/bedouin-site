"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const NavSection = () => {
  const pathname = usePathname();

  const sections = [
    {
      name: "Expense Tracker",
      href: "/expense-tracker",
    },
    {
      name: "Investments",
      href: "/investments",
    },
    {
      name: "Savings",
      href: "/savings",
    },
    {
      name: "Miscellaneous",
      href: "/miscellaneous",
    },
  ];

  if (pathname === "/onboarding") return;

  return (
    <div className="hidden rounded-full border py-2 px-3 text-xs lg:flex gap-x-2">
      {sections.map((section, index) => (
        <Link
          key={index}
          href={section.href}
          className={cn(
            "hover:text-primary transition focus:outline-none focus:text-primary",
            {
              "text-primary": pathname === section.href,
            }
          )}
        >
          {section.name}
        </Link>
      ))}
    </div>
  );
};

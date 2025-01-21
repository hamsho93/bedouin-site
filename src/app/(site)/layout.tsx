import { ReactNode } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#EEEEEE]">
      <Navbar />
      <main className="flex-1 bg-[#EEEEEE]">{children}</main>
      <Footer />
    </div>
  );
}

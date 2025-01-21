import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Balancer } from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config";
import { Shell } from "@/components/shell";
import { Dues } from "@/components/features/dues";
import { buttonVariants } from "@/components/ui/button";
import { ExpenseTracker } from "@/components/features/expense-tracker";
import { MaintainingAccounts } from "@/components/features/maintaining-accounts";
import Spline from '@splinetool/react-spline/next';
import ClientComponent from "@/components/client/ClientComponent";
import { TeamSection } from "@/components/features/team-section";

export default function Home() {
  return (
    <Shell>
      {/* Add the Client Component */}

      <section className="relative w-full min-h-[800px] flex flex-col items-center justify-center">
        {/* Spline Background */}
        <div className="absolute left-1/2 -translate-x-1/2 z-0 w-screen h-[800px]">
          <Spline scene="https://prod.spline.design/pXRmzRLNLIOLv9XY/scene.splinecode" />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 text-center pt-24 sm:pt-32 lg:pb-10">
          <Balancer className="font-bold leading-tight tracking-tight text-5xl sm:text-7xl lg:text-8xl lg:leading-[1.1] text-[#333333] [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
            Pharmacy <span className="font-mono text-[#333333] [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]"></span>{" "}
            
          </Balancer>
          {/* <Button
            className={cn(buttonVariants(), "rounded-full text-lg lg:h-15 bg-brown text-white")}
            as={Link}
            href="https://share.hsforms.com/1Ma6zKIU5SXmeaIi31qynIgq5drz"
          >
            Contact Us
          </Button> */}
        </div>
      </section>
      <div className="flex flex-col items-center justify-center py-12 gap-y-4 mt-20">
        <h3 className="text-4xl text-center font-extrabold tracking-tighter text-[#333333] [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
          Power your pharmacy with PillHub, the next generation of Pharmacutical AI.
        </h3>
        <Balancer className="text-[#333333] text-center text-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
          Optimize your logistics, administration, and patient care with PillHub&apos;s platform. 
        </Balancer>
      </div>
      {/* <ExpenseTracker /> */}
      {/* <MaintainingAccounts /> */}
      <Dues />
      <TeamSection />
    </Shell>
  );
}
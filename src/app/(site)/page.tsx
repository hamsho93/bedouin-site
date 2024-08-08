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

export default function Home() {
  return (
    <Shell>
      {/* Add the Client Component */}
      <ClientComponent />
      <section className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Spline Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/ERzXSYRqElM0xU82/scene.splinecode" />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 text-center pt-10 sm:pt-20 lg:pb-10">
          <Balancer className="font-bold leading-tight tracking-tight text-5xl sm:text-7xl lg:text-8xl lg:leading-[1.1]">
            Autonomous<span className="font-mono text-purple">
            {" "} Fraud Agents</span>{" "}
            To Supercharge Your Operations
          </Balancer>
          <Button
            className={cn(buttonVariants(), "rounded-full text-lg lg:h-15 bg-purple text-white")}
            as={Link}
            href="https://share.hsforms.com/1Ma6zKIU5SXmeaIi31qynIgq5drz"
          >
            Contact Us
          </Button>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center py-12 gap-y-4">
        <h3 className="text-4xl text-center font-extrabold tracking-tighter">
        Lloyd automates all the manual, time-consuming tasks of manual fraud reviews, speeding application decisions.
        </h3>
        <Balancer className="text-muted-foreground text-center text-lg">
        Our AI Fraud Agents perform like human professionals, handling reading, writing, and reasoning tasks without the risk of errors. They take on routine onboarding and underwriting duties, coordinate system outputs, summarize key findings, and recommend next steps. 
        Operating around the clock, they offer unmatched scalability, seamlessly integrating with your team and resources.
        </Balancer>
      </div>
      <ExpenseTracker />
      {/* <MaintainingAccounts /> */}
      {/* <Dues /> */}
    </Shell>
  );
}
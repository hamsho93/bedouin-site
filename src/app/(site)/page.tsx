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

export default function Home() {
  return (
    <Shell>
      <section className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Spline Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/ERzXSYRqElM0xU82/scene.splinecode" />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 text-center pt-10 sm:pt-20 lg:pb-10">
          <Balancer className="font-bold leading-tight tracking-tight text-5xl sm:text-7xl lg:text-8xl lg:leading-[1.1]">
            Embedded <span className="font-mono text-brown">Insurance</span>{" "}
            For Cancellation and Loss Events
          </Balancer>
          <Button
            className={cn(buttonVariants(), "rounded-full text-lg lg:h-15 bg-brown text-white")}
            as={Link}
            href="https://share.hsforms.com/1Ma6zKIU5SXmeaIi31qynIgq5drz"
          >
            Contact Us
          </Button>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center py-12 gap-y-4">
        <h3 className="text-4xl text-center font-extrabold tracking-tighter">
          Peace of mind and security through innovative insurance products.
        </h3>
        <Balancer className="text-muted-foreground text-center text-lg">
          Bedouin integrates with HR Systems, Staffing Agencies, and other Employers to provide both businesses and 
          employees financial protection. 
        </Balancer>
      </div>
      <ExpenseTracker />
      <MaintainingAccounts />
      <Dues />
    </Shell>
  );
}
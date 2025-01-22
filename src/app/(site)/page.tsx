'use client';

import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Balancer } from "react-wrap-balancer";
import Script from 'next/script';

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

function HeapAnalytics() {
  return (
    <Script
      id="heap-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.heapReadyCb=window.heapReadyCb||[],window.heap=window.heap||[],heap.load=function(e,t){window.heap.envId=e,window.heap.clientConfig=t=t||{},window.heap.clientConfig.shouldFetchServerConfig=!1;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.us.heap-api.com/config/"+e+"/heap_config.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var n=["init","startTracking","stopTracking","track","resetIdentity","identify","getSessionId","getUserId","getIdentity","addUserProperties","addEventProperties","removeEventProperty","clearEventProperties","addAccountProperties","addAdapter","addTransformer","addTransformerFn","onReady","addPageviewProperties","removePageviewProperty","clearPageviewProperties","trackPageview"],i=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);window.heapReadyCb.push({name:e,fn:function(){heap[e]&&heap[e].apply(heap,t)}})}};for(var p=0;p<n.length;p++)heap[n[p]]=i(n[p])};
          heap.load("1532518150");
        `
      }}
    />
  );
}

export default function Home() {
  return (
    <Shell>
      <HeapAnalytics />
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
          Power your pharmacy with PillHub, the next generation of pharmacutical AI.
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
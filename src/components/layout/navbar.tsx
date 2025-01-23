import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from 'next/image';

import { cn } from "@/lib/utils";
import { getAuthSession } from "@/lib/auth";
import { buttonVariants } from "@/components/ui/button";

export const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="sticky top-0 z-40 w-full bg-[#EEEEEE] flex justify-between items-center py-5 px-8 lg:px-24">
      <div className="relative z-20 flex items-center">
        <Link href="/">
          <Image src="/pharmacy_875x875.png" alt="Site Logo" width={100} height={350} className="h-18 md:h-24" />
        </Link>
      </div>
      <div className="flex gap-x-4 items-center">
        {session ? (
          <Avatar
            src={session.user.image ?? ""}
            size="sm"
            showFallback
            name={session.user.name ?? ""}
          />
        ) : (
          <>
            <Button
              className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-[#117c6f] text-white hover:bg-[#333333]")}
              as={Link}
              href="https://share.hsforms.com/1Ma6zKIU5SXmeaIi31qynIgq5drz"
            >
              Contact Us
            </Button>
            <Button
              className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-[#333333] text-white hover:bg-[#117c6f]")}
              as={Link}
              href="https://api.pillhub.ai/login"
            >
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
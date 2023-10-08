import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features, siteConfig, socials, techStack } from "@/config";

const About = () => {
  return (
    <Card>
      <ScrollShadow className="h-[calc(100vh-120px)] xl:h-[calc(100vh-90px)] w-full no-scrollbar">
        <CardContent className="grid items-center gap-8 pb-8 pt-6 md:py-6">
          <div>
            <div className="grid gap-1">
              <h1 className="line-clamp-1 text-3xl font-bold tracking-tight py-1">
                About
              </h1>
              <p className="text-muted-foreground">
                About the project and the author of the project.
              </p>
            </div>
            <Divider className="my-4" />
            <p className="font-light">
              Experience a smarter way to manage your finances with{" "}
              {siteConfig.name}, a cutting-edge application crafted on{" "}
              <Link
                href="https://nextjs.org/"
                target="_blank"
                className="underline font-medium tracking-tight underline-offset-4"
              >
                Next.js.
              </Link>{" "}
              Our mission is to empower you with effortless expense tracking and
              provide a comprehensive monthly budget overview. Gain control,
              make informed decisions, and pave the way to financial success,
              all in one user-friendly platform.
            </p>
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Tech stack used
            </h1>
            <Divider className="mt-2 mb-4" />
            <ul className="space-y-2 mx-5 mt-2">
              {techStack.map((tech, index) => (
                <li key={index} className="list-disc">
                  <Link
                    href={tech.url}
                    target="_blank"
                    className="underline font-medium tracking-tight underline-offset-4"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Key features
            </h1>
            <Divider className="mt-2 mb-4" />
            <ul className="space-y-2 mx-5 mt-2">
              {features.map((feature, index) => (
                <li key={index} className="list-disc">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              About the author
            </h1>
            <Divider className="mt-2 mb-4" />
            <ul className="space-y-2 mx-5 mt-2">
              {socials.map((social) => (
                <li key={social.id} className="list-disc">
                  <Link
                    href={social.href}
                    target="_blank"
                    className="underline font-medium tracking-tight underline-offset-4"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex justify-end items-center">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "w-fit"
              )}
            >
              Contact <Icons.right className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </ScrollShadow>
    </Card>
  );
};

export default About;

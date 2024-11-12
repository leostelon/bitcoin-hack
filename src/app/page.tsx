import { LandingPageNavbar } from "../app/components/LandingPageNavbar";
import { Button, buttonVariants } from "../app/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col  w-full bg-[url('../../public/bg.svg')] bg-cover bg-center bg-no-repeat">
      <LandingPageNavbar />
      <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-12rem)] gap-6">
        <h1 className="text-center text-7xl text-white font-extralight tracking-tighter">
          Rolling <span className="text-accent">Bitcoin</span> <br/> Privacy Forward
          with <br /> Untraceable
          Stealth Addresses <br/> on <span className="text-accent">Citrea</span>

          <br />
        </h1>
        <p className="text-sm text-white opacity-30 text-center max-w-[50rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          asperiores pariatur perferendis laboriosam sunt! Inventore enim saepe
          distinctio dolore iusto aspernatur ex in vel necessitatibus minus!
          Ratione?
        </p>
        <div className="flex items-center gap-8">
          <Button
            className="border-1 borer-accent text-white font-bold bg-accent-foreground"
            variant="outline"
          >
            Learn More
          </Button>
          <Link
            href="https://github.com/leostelon/sisyfus"
            className={cn(buttonVariants({}), "bg-accent text-white font-bold")}
            target="_blank"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

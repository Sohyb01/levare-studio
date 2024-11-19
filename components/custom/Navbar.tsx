import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import { links } from "@/lib/data";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-internal">
        {/* Logo */}
        <Link href="/" className="relative aspect-[69.17/18] w-[100px]">
          <Image src="./Levare.svg" alt="Levare" fill />
        </Link>
        {/* Links */}
        <div className="hidden lg:flex gap-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              className="flex w-fit items-center justify-center px-3 hover:text-foreground transition h-8"
              href={link.hash}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={buttonVariants({ variant: "default" })}
          >
            Start a project
          </Link>
          {/* Sheet */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <AlignJustify size={16} className="stroke-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent className="lg:hidden w-[240px] flex flex-col gap-6 items-start text-start pt-20">
              {/* Links */}
              {links.map((link, idx) => (
                <Link key={idx} href={link.hash}>
                  {link.name}
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

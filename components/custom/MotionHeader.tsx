"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignLeft } from "lucide-react";

export default function MotionHeader() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative w-[100vw] grid place-items-center">
      <motion.nav
        className="flex fixed gap-4 items-center justify-center py-3 px-4 mt-8 rounded-full border-border border-[1px] backdrop-blur-[0.5rem] shadow-lg shadow-white/[0.03]  bg-background/80"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 50, opacity: 1 }}
      >
        {/* Links MD, LG */}
        <motion.ul className="hidden md:flex items-center justify-center gap-y-1 text-muted w-[initial] flex-nowrap gap-5">
          {links.map((link) => (
            <li
              key={link.hash}
              className="flex items-center justify-center relative"
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 hover:text-foreground transition h-8",
                  {
                    "text-foreground": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {/* Moving part */}
                {link.name === activeSection && (
                  <motion.span
                    className="rounded-full -mt-1 absolute inset-0 -z-10 border-primary bg-background border-[1px] h-10 px-4"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </motion.ul>
        {/* CTA */}
        <Link
          href="/contact"
          className={clsx(
            `flex items-end justify-end hover:text-foreground transition ${buttonVariants(
              {
                variant: "default",
              }
            )}`
          )}
        >
          <span>Start a project</span>
        </Link>
        {/* Sheet */}
        <Sheet>
          <SheetTrigger
            className={`${buttonVariants({
              variant: "outline",
              size: "icon",
            })} md:hidden aspect-square`}
          >
            <AlignLeft size={16} className="h-4 w-4" />
          </SheetTrigger>
          <SheetContent
            side={"right"}
            className="p-8 pt-[8rem] gap-8 flex flex-col items-start md:hidden"
          >
            {/* All Platform Tab Links */}
            {/* Links */}
            <div className="flex flex-col gap-8 items-start text-start">
              {links.map((link, idx) => {
                return (
                  <Link key={idx} href={link.hash}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </motion.nav>
    </header>
  );
}

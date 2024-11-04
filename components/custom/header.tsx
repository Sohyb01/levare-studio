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

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 border border-border border-opacity-40 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem] top-6 h-[3.25rem] w-[13rem] md:w-[32rem] rounded-full bg-neutral-900 bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed left-1/2 -translate-x-[55%] md:-translate-x-[50%] top-[1.8rem] h-[initial] py-0">
        <ul className="hidden md:flex items-center justify-center gap-y-1 text-subtle text-muted w-[initial] flex-nowrap gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-foreground transition",
                  {
                    "text-primary-foreground hover:text-primary-foreground":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="rounded-full absolute inset-0 -z-10 bg-primary h-8"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.li
          className="flex items-center justify-start h-fit pl-5"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 5, opacity: 1 }}
        >
          {/* Sheet */}
          <Sheet>
            <SheetTrigger
              className={`${buttonVariants({
                variant: "outline",
                size: "icon",
              })} md:hidden mr-5 aspect-square`}
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
          {/* CTA */}
          <Link
            href="/contact"
            className={clsx(
              `flex w-full items-end justify-end hover:text-foreground transition ${buttonVariants(
                {
                  variant: "default",
                  size: "sm",
                }
              )}`
            )}
          >
            <span className="-mt-[0.125rem]">Start a project</span>
          </Link>
        </motion.li>
      </nav>
    </header>
  );
}

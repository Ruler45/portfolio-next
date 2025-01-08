"use client";

import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/modeToggle";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const links = [
  {
    name: "Home",
    href: "#top",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Work with me",
    href: "#work",
  },
];
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="flex w-[80%] mx-auto my-4 px-4 py-2 backdrop-blur-sm rounded-3xl shadow-md dark:shadow-none fixed top-0 z-50 justify-between">
      <div className="gap-4 items-center px-4 hidden sm:flex">
        {links.map((link) => {
          return (
            <Link
              className=" hover:translate-y-[-2px] duration-300"
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <Button
        variant="outline"
        className="sm:hidden"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? <X /> : <Menu />}
      </Button>
      <div
        className={`absolute top-[100%] left-0 w-full ${isActive ? "h-[60vh]" : "h-0"}
         duration-300 backdrop-blur-sm rounded-sm shadow-md dark:shadow-none bg-white dark:bg-black overflow-hidden sm:hidden`}
      >
        <div className="flex flex-col gap-4 items-center justify-center py-10">
          {links.map((link) => {
            return (
              <Link
                className=" hover:translate-y-[-2px] duration-300"
                key={link.name}
                href={link.href}
                onClick={() => setIsActive(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;

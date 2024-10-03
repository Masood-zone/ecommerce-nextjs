"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Facebook,
  Heart,
  Instagram,
  Menu,
  Search,
  ShoppingBag,
  Youtube,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { usePathname } from "next/navigation";
import { navlinks } from "@/lib/data";

export default function Navbar() {
  const location = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 50) {
        if (navbar) {
          navbar.classList.add("bg-white");
          navbar.classList.add("backdrop-blur-md");
        }
      } else {
        if (navbar) {
          navbar.classList.remove("bg-white");
          navbar.classList.remove("backdrop-blur-md");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex items-center justify-between py-4 md:py-5 px-4 fixed w-full z-50">
      <Link
        href="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
        aria-label="logo"
      >
        <svg
          width="95"
          height="94"
          viewBox="0 0 95 94"
          className="h-auto w-6 text-black"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>
        3legant
      </Link>

      <nav className="hidden gap-12 lg:flex naav">
        {navlinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={`text-lg
              ${location === link.href ? "font-bold" : "text-gray-600"}
          `}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-4 lg:flex">
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingBag className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="h-6 w-6" />
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden bg-transparent border-none"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold">
              3legant
            </Link>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-md border py-2 pl-8 pr-4"
              />
            </div>
            <div className="flex flex-col gap-4">
              {navlinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className={`text-lg
              ${
                location === link.href
                  ? "text-black font-bold"
                  : "text-gray-500"
              }
          `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Button variant="outline" size="icon">
                <ShoppingBag className="h-4 w-4" />
              </Button>
              <span>Cart (2)</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <span>Wishlist (2)</span>
            </div>
            <Button className="mt-4">Sign In</Button>
            <div className="flex gap-4 mt-4">
              <Instagram className="h-6 w-6" />
              <Facebook className="h-6 w-6" />
              <Youtube className="h-6 w-6" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

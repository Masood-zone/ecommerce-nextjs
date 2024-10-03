"use client";

import { navlinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import instaIcon from "@/assets/svg/instagram.svg";
import twitterIcon from "@/assets/svg/twitter.svg";
import linkedinIcon from "@/assets/svg/linkedin.svg";
import githubIcon from "@/assets/svg/github.svg";

export default function Footer() {
  const location = usePathname();
  const socials = [
    {
      name: "Instagram",
      icon: instaIcon,
      href: "https://www.instagram.com/",
    },
    {
      name: "Twitter",
      icon: twitterIcon,
      href: "https://twitter.com/",
    },
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      href: "https://www.linkedin.com/",
    },
    {
      name: "GitHub",
      icon: githubIcon,
      href: "https://www.github.com/",
    },
  ];
  return (
    <div className="bg-black pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row-reverse">
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600
                ${location === link.href ? "font-bold" : "text-gray-500"}
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold text-white md:text-3xl"
            >
              <span>3legant.</span>
            </Link>
            <b className="w-1 h-8 border-l border-l-gray-500"></b>
            <p className="text-sm text-gray-500">E Commerce Shop</p>
          </div>
        </div>

        <div className="mx-auto md:w-[650px] border-t"></div>
        <div className="flex flex-col items-center justify-between gap-4 py-3 md:flex-row">
          <p className="py-8 text-center text-sm text-gray-400">
            © 2024 - 3legant. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-500 active:text-indigo-600"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

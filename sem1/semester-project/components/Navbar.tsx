"use client"
import { useState } from "react";
import Link from "next/link";

import Logo from "@/components/Logo";
import MobileNav from "./MobileNav";
import MobileNavHelp from "./MobileNavHelp";

export type Page = {
  href: string;
  title: string;
};

// Get this info from some external source (e.g. CMS)
const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/usluge", title: "Usluge" },
  { href: "/pages", title: "Recenzije i osvrti"},
  { href: "/about", title: "O nama" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  const handlePageClick = (href: string) => {
    setActivePage(href);
    setOpen(false); // Zatvaramo mobilni meni nakon klika na link
  };

  return (
    <div className="container flex items-center justify-between ">
      <Logo />
      <CustomMainNav
        pages={pages}
        activePage={activePage}
        handlePageClick={handlePageClick}
      />
      <MobileNavHelp open={open} clickHandler={setOpen} />
      <MobileNav open={open} clickHandler={setOpen} pages={pages} />
    </div>
  );
};

const CustomMainNav = ({ pages, activePage, handlePageClick }: { pages: Page[]; activePage: string; handlePageClick: (href: string) => void }) => {
  return (
    <nav className="hidden md:flex space-x-4">
      {pages.map((page, index) => (
        <Link key={index} href={page.href}>
          <span // Koristimo span umjesto a
            className={`inline-block py-2 px-4 rounded-md text-gray-800 hover:text-gray-600 transition-colors ${
              page.href === activePage ? "font-bold bg-gray-200" : "bg-gray-100"
            }`}
            onClick={() => handlePageClick(page.href)}
          >
            {page.title}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;

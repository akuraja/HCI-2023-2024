"use client";
import { useState } from "react";
import Link from "next/link";

import Logo from "@/components/Logo";
import MobileNav from "./MobileNav";
import MobileNavHelp from "./MobileNavHelp";
import './Navbar.css';

export type Page = {
  href: string;
  title: string;
};

// Get this info from some external source (e.g. CMS)
const pages: Page[] = [
  { href: "/pages/usluge", title: "Usluge" },
  { href: "/recenzije", title: "Recenzije i osvrti" },
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
    <section className="flex items-center justify-between p-4 m-2">
      <div onClick={() => handlePageClick("/")}>
        <Logo />
      </div>
      <CustomMainNav
        pages={pages}
        activePage={activePage}
        handlePageClick={handlePageClick}
      />
      <MobileNavHelp open={open} clickHandler={setOpen} />
      <MobileNav open={open} clickHandler={setOpen} pages={pages} />
    </section>
  );
};

const CustomMainNav = ({
  pages,
  activePage,
  handlePageClick,
}: {
  pages: Page[];
  activePage: string;
  handlePageClick: (href: string) => void;
}) => {
  return (
    <nav className="hidden lg:flex text-[18px]">
      {pages.map((page, index) => (
        <Link key={index} href={page.href}>
          <span
            className={`mx-4 p-2  ${activePage !== page.href ? "bg-brand-purple-50 rounded-sm text-[#09396d]" : "bg-white rounded-sm"} `}
            onClick={() => handlePageClick(page.href)}
          >
            {page.title}
          </span>
        </Link>
      ))
      }
    </nav >
  );
};

export default NavBar;

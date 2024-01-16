"use client";
import { useState } from "react";

import Logo from "@/components/Logo";
import MainNav from "@/components/MainNav";
import MobileNav from "./MobileNav";
import MobileNavHelp from "./MobileNavHelp";

export type Page = {
  href: string;
  title: string;
};

// Get this info from some external source (e.g. CMS)
const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/onama", title: "O nama" },
  { href: "/usluge", title: "Usluge" },
  { href: "/upute", title: "Upute" },
  { href: "/kontaktirajnas", title: "Kontaktiraj nas" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container flex items-center justify-between ">
      <Logo />
      <MainNav pages={pages} />
      <MobileNavHelp open={open} clickHandler={setOpen} />
      <MobileNav open={open} clickHandler={setOpen} pages={pages} />
    </div>
  );
};

export default NavBar;

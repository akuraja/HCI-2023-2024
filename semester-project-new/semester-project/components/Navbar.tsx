"use client";
import { useState } from "react";

import Logo from "@/components/Logo";
import MainNav from "@/components/MainNav";

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
     
    </div>
  );
};

export default NavBar;

import { itsoUmakLogo, ccisLogo } from "@/assets/images";
import { REGISTRATION_LINK } from "astro:env/client";
import { useState } from "react";

type Route = {
  path: string;
  name: string;
  target?: string;
};

const ROUTES: Route[] = [
  {
    name: "Categories",
    path: "/categories",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Register",
    path: REGISTRATION_LINK,
    target: "_blank",
  },
];

const SCROLL_OFFSET = 50

export function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > SCROLL_OFFSET) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);
  };

  return (
    <nav
      className={`fixed inset-0 z-[100] w-full flex h-20 px-5 md:px-20 justify-between items-center transition ${isScrolled ? "bg-secondary" : "bg-transparent"}`}
    >
      <a href="/" className="flex flex-row gap-4">
        <img
          src={itsoUmakLogo.src}
          className="object-cover max-h-full h-12 w-12"
          alt="IT Skills Olympics"
          draggable="false"
        />
        <img
          src={ccisLogo.src}
          className="object-cover max-h-full h-12 w-12"
          alt="IT Skills Olympics"
          draggable="false"
        />
      </a>
      <div className="h-full flex">
        {ROUTES.map((route) => (
          <a
            key={route.path}
            href={route.path}
            className="h-full px-2 md:px-5 flex items-center"
            target={route.target}
          >
            {route.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

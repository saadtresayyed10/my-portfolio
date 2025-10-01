import Link from "next/link";
import { Monsieur_La_Doulaise, Funnel_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Github, Menu, Moon } from "lucide-react";

const monsieur = Monsieur_La_Doulaise({
  variable: "--font-monsieur",
  weight: "400",
});

const funnel = Funnel_Sans({
  variable: "--font-funnel",
  weight: "400",
});

const tabs = [
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Certificates",
    link: "/certificates",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between bg-white dark:bg-neutral-800 items-center w-full lg:px-16 px-4 py-4 lg:py-6">
      <div className="flex justify-start items-center gap-x-3">
        <Button variant="secondary" className="block lg:hidden">
          <Menu className="w-4 h-4 text-black/60" />
        </Button>
        <h1 className={`${monsieur.className} text-4xl`}>Saad</h1>
      </div>
      <ul
        className={`lg:flex hidden justify-center text-center items-center gap-x-8 text-base ${funnel.className}`}
      >
        {tabs.map((item, idx) => (
          <li key={idx}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="lg:hidden flex justify-start items-center gap-x-2">
        <Button variant="secondary">
          <Github className="w-4 h-4 text-black/60" />
        </Button>
        <Button variant="secondary">
          <Moon className="w-4 h-4 text-black/60" />
        </Button>
      </div>
      <div className="hidden lg:flex justify-start items-center gap-x-2">
        <Button>
          <Moon className="w-4 h-4" />
        </Button>
        <Link href={"/"}>
          <Button className={`${funnel.className} lg:block hidden`}>
            Resume
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

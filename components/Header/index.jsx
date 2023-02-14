import Branding from "./Branding";
import List from "./List";
import { useState } from "react";
import { socials } from "../../constants/socials";
import useScroll from "../../hooks/useScroll";

const navLinks = [
  {
    href: "#hero",
    text: "Home",
  },
  {
    href: "#work",
    text: "Work",
  },
  {
    href: "#skills",
    text: "Skills",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false);
  const offsetY = useScroll();

  return (
    <header className={`container rounded-b-lg fixed z-10 top-0 left-0 right-0 mx-auto shadow-surface0 transition-all duration-500 ${(offsetY >= 100) || navVisibility ? "shadow-md bg-crust" : ""}`}>
      <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
        <Branding
          setNavVisibility={setNavVisibility}
          navVisibility={navVisibility}
        />
        <List
          items={navLinks}
          visible={navVisibility}
          setVisible={setNavVisibility}
          col
        />
        <List
          items={socials}
          visible={navVisibility}
          setVisible={setNavVisibility}
        />
      </div>
    </header>
  );
};

export default Header;

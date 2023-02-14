import Link from "next/link";
import Logo from "../icons/Logo";
import HamburgerMenu from "./HamburgerMenu";

const Branding = ({ navVisibility, setNavVisibility }) => {
  return (
    <div className="flex items-center justify-between w-full md:w-fit">
      <Link href="/" className="translate-x-8 opacity-0 animate-fadeIn group" aria-label="MAH.codes Logo">
        <Logo
          className="my-5"
          fill="fill-text group-hover:fill-lavender"
          stroke="stroke-text group-hover:stroke-lavender"
        />
      </Link>
      <HamburgerMenu
        active={navVisibility}
        onClick={() => setNavVisibility((currentValue) => !currentValue)}
      />
    </div>
  );
};

export default Branding;

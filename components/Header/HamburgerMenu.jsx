const HamburgerMenu = ({ active, ...props }) => {
  return (
    <button
      aria-label={active ? "Close Menu" : "Open Menu"}
      title={active ? "Close Menu" : "Open Menu"}
      className={`block md:hidden relative w-5 h-5 border-y-2 text-text border-solid cursor-pointer after:absolute before:absolute after:block before:block after:w-5 before:w-5 after:h-[2px] before:h-[2px] after:top-1/2 before:top-1/2 after:-translate-y-1/2 after:bg-current before:bg-current before:-translate-y-1/2 after:transition-transform before:transition-transform translate-x-8 opacity-0 animate-fadeIn ${active
          ? "border-y-transparent before:rotate-45 after:-rotate-45"
          : "border-y-text"
        }`}
      {...props}
    />
  );
};

export default HamburgerMenu;

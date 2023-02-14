import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "../contexts/ThemeContexts";

const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkTheme((current) => !current);
  };

  return (
    <li className="mocha latte flex items-center py-6 px-4 translate-x-8 opacity-0 animate-fadeIn delay-500">
      <DarkModeSwitch
        checked={!isDarkTheme}
        onChange={handleToggle}
        size={28}
        moonColor="#4c4f69"
        sunColor="#cdd6f4"
      />
    </li>
  );
};

export default ThemeToggle;

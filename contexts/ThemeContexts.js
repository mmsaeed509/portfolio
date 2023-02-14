import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    typeof window !== "undefined" ? JSON.parse(localStorage.getItem("mahIsDarkTheme") || "false") : false
  );

  useEffect(() => {
    localStorage.setItem("mahIsDarkTheme", isDarkTheme);
    document.body.className = isDarkTheme ? "mocha" : "latte";
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

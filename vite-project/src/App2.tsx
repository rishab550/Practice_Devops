import { ReactNode, createContext, useState } from "react";
import Box3 from "./components/Box3";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  togglefnx: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  togglefnx: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const togglefnx = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, togglefnx }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App2 = () => {
  return (
    <>
      <ThemeProvider>
        <div>Hello</div>
        <Box3 />
      </ThemeProvider>
    </>
  );
};

export default App2;

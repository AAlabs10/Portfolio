import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState(
    () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );


  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);

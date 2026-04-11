import { createContext, useContext, useEffect } from 'react';
 
const ThemeContext = createContext();
 
export function ThemeProvider({ children }) {
  const theme = 'dark';
 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }, []);
 
  const toggle = () => {}; // Disabled
 
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
 
export const useTheme = () => useContext(ThemeContext);

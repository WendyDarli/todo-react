import { useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState('light');

    function toggleTheme(){
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    useEffect(() => {
      document.documentElement.className = theme;
  }, [theme]);

    return { theme, toggleTheme };
}
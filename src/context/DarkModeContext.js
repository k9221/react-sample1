import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

const updateDarkMode = darkMode => {
  if (darkMode) {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark'); // html 클래스 추가
  } else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
  }
};

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    updateDarkMode(!darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    // 사용자 기종 다크모드 확인
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
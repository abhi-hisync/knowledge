import { useAppearance } from './use-appearance';

export function useTheme() {
  const { appearance, updateAppearance } = useAppearance();

  const toggleTheme = () => {
    const newTheme = appearance === 'dark' ? 'light' : 'dark';
    updateAppearance(newTheme);
  };

  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    updateAppearance(theme);
  };

  const isDark = appearance === 'dark' ||
    (appearance === 'system' && typeof window !== 'undefined' &&
     window.matchMedia('(prefers-color-scheme: dark)').matches);

  return {
    theme: appearance,
    isDark,
    toggleTheme,
    setTheme,
  };
}

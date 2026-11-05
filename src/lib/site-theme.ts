export const siteThemes = ['dark', 'light', 'diwali'] as const;
export type SiteTheme = typeof siteThemes[number];

export function readSiteTheme(value: string | null): SiteTheme {
  return value === 'light' || value === 'diwali' ? value : 'dark';
}

export function nextSiteTheme(theme: SiteTheme): SiteTheme {
  return theme === 'dark' ? 'light' : theme === 'light' ? 'diwali' : 'dark';
}

export function applySiteTheme(theme: SiteTheme) {
  document.documentElement.classList.toggle('light', theme === 'light');
  document.documentElement.classList.toggle('diwali', theme === 'diwali');
  document.documentElement.style.colorScheme = theme === 'light' ? 'light' : 'dark';
}
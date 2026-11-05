import { describe, expect, it } from 'vitest';
import { nextSiteTheme, readSiteTheme } from './site-theme';

describe('three site themes', () => {
  it('cycles dark to light to Diwali and back to dark', () => {
    expect(nextSiteTheme('dark')).toBe('light');
    expect(nextSiteTheme('light')).toBe('diwali');
    expect(nextSiteTheme('diwali')).toBe('dark');
  });
  it('restores Diwali and falls back safely for removed themes', () => {
    expect(readSiteTheme('diwali')).toBe('diwali');
    expect(readSiteTheme('unknown')).toBe('dark');
    expect(readSiteTheme(null)).toBe('dark');
  });
});
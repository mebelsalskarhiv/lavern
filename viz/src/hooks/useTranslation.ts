/**
 * useTranslation — React hook for using i18n translations
 */

import { useState, useEffect, useCallback } from 'react';
import { t, setLocale, getLocale, type TranslationKey } from '../i18n';

export function useTranslation() {
  const [locale, setLocaleState] = useState<'en' | 'ru'>(() => getLocale());

  useEffect(() => {
    // Sync with localStorage changes (e.g., from another tab)
    const handleStorageChange = () => {
      setLocaleState(getLocale());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const changeLocale = useCallback((newLocale: 'en' | 'ru') => {
    setLocale(newLocale);
    setLocaleState(newLocale);
  }, []);

  const translate = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>) => {
      return t(key, params);
    },
    [locale]
  );

  return {
    t: translate,
    locale,
    setLocale: changeLocale,
    isRTL: false, // Russian is LTR
  };
}

export default useTranslation;

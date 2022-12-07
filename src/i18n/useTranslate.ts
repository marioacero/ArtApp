import { useTranslation } from 'react-i18next';

/**
 * To change the language, import i18next directly into the file, and call changeLanguage
 */

export const useTranslate = () => {
  const { t } = useTranslation();

  return { t };
};

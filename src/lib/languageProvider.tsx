import type { FC } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import en from '../lang/en.json';
import tr from '../lang/tr.json';
import { RootState } from '../stores';

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const language = useSelector((state: RootState) => state.language.currentLanguage);

  return (
    <IntlProvider locale={language} messages={language === 'en' ? en : tr}>
      {children}
    </IntlProvider>
  );
};
export default LanguageProvider;

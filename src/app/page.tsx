'use client';

import { useState } from 'react';

import CodeEditor from '@/components/CodeEditor';
import LanguageSelect from '@/components/LanguageSelect';
import { languageOptions } from '@/constants/language-options';

export default function Home() {
  const [selectedLanguage, setselectedLanguage] = useState<string>(languageOptions[0].value);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <LanguageSelect setselectedLanguage={setselectedLanguage} />
      <CodeEditor selectedLanguage={selectedLanguage} />
    </main>
  );
}

'use client';

import { useState } from 'react';

import CodeEditor from '@/components/CodeEditor';
import LanguageSelect from '@/components/LanguageSelect';
import Output from '@/components/Output';
import ThemeToggle from '@/components/ThemeToggle';
import { defaultValue } from '@/constants/default-editor-value';
import { languageOptions } from '@/constants/language-options';
import useResult from '@/hooks/home/useResult';

export default function Home() {
  const [selectedLanguage, setselectedLanguage] = useState<string>(languageOptions[0].value);
  const [code, setcode] = useState(defaultValue);
  const [result, setresult] = useState<string | null>('');

  const { handleCompileClick } = useResult(selectedLanguage, code, setresult);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <nav className='flex flex-row w-full bg-primary justify-around p-5'>
        <LanguageSelect setselectedLanguage={setselectedLanguage} />

        <button onClick={handleCompileClick}>trstin</button>
        <ThemeToggle />
      </nav>
      <div className='flex flex-row w-full'>
        <CodeEditor selectedLanguage={selectedLanguage} setcode={setcode} />
        <Output result={result} />
      </div>
    </main>
  );
}

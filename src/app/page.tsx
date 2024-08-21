'use client';

import { useState } from 'react';

import CodeEditor from '@/components/CodeEditor';
import LanguageSelect from '@/components/LanguageSelect';
import Output from '@/components/Output';
import Run from '@/components/Run';
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
    <main className='flex min-h-screen flex-col items-center justify-between bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark'>
      <nav className='flex flex-row w-full bg-primary justify-around p-5'>
        <LanguageSelect setselectedLanguage={setselectedLanguage} />
        <Run handleCompileClick={handleCompileClick} />
        <ThemeToggle />
      </nav>
      <div className='flex flex-row w-full'>
        <CodeEditor selectedLanguage={selectedLanguage} setcode={setcode} />
        <Output result={result} />
      </div>
      <footer className='flex flex-row px-10 py-5 justify-between bg-inherit w-full border-t border-border-light dark:border-border-dark'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>Build With ❤️ by Sumrit Grover</div>
      </footer>
    </main>
  );
}

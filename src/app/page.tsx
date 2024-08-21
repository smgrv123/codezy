'use client';

import { useState } from 'react';

import CodeEditor from '@/components/CodeEditor';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Output from '@/components/Output';
import { defaultValue } from '@/constants/default-editor-value';
import { languageOptions } from '@/constants/language-options';
import { resultType } from '@/utils/types';

export default function Home() {
  const [selectedLanguage, setselectedLanguage] = useState<string>(languageOptions[0].value);
  const [code, setcode] = useState(defaultValue);
  const [result, setresult] = useState<resultType>();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark'>
      <NavBar
        code={code}
        selectedLanguage={selectedLanguage}
        result={result}
        setresult={setresult}
        setselectedLanguage={setselectedLanguage}
      />
      <div className='flex flex-row w-full'>
        <CodeEditor selectedLanguage={selectedLanguage} setcode={setcode} />
        <Output result={result} />
      </div>
      <Footer />
    </main>
  );
}

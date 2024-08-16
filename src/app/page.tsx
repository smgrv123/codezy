'use client';

import { useState } from 'react';

import CodeEditor from '@/components/CodeEditor';
import LanguageSelect from '@/components/LanguageSelect';
import Output from '@/components/Output';
import { defaultValue } from '@/constants/default-editor-value';
import { languageOptions } from '@/constants/language-options';
import useResult from '@/hooks/home/useResult';

export default function Home() {
  const [selectedLanguage, setselectedLanguage] = useState<string>(languageOptions[0].value);
  const [code, setcode] = useState(defaultValue);
  const [result, setresult] = useState<string | null>('');

  const { handleCompileClick } = useResult(selectedLanguage, code, setresult);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <LanguageSelect setselectedLanguage={setselectedLanguage} />
      <div className='flex flex-row w-full'>
        <CodeEditor selectedLanguage={selectedLanguage} setcode={setcode} />
        <Output result={result} />
      </div>
      <button onClick={handleCompileClick}>trstin</button>
    </main>
  );
}

'use client';

import { defaultValue } from '@/constants/default-editor-value';
import Editor from '@monaco-editor/react';
import { useState } from 'react';

const CodeEditor = ({ selectedLanguage }: { selectedLanguage: string }) => {
  const [code, setcode] = useState(defaultValue);

  const onChangeHandler = (value: string) => {
    setcode(value);
  };

  return (
    <div className='h-full w-full'>
      <Editor
        onChange={(e) => e && onChangeHandler(e)}
        theme='vs-dark'
        height={'85vh'}
        width={'100%'}
        value={defaultValue}
        language={selectedLanguage}
      />
    </div>
  );
};

export default CodeEditor;

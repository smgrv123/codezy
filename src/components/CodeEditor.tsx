'use client';

import { defaultValue } from '@/constants/default-editor-value';
import Editor from '@monaco-editor/react';
import { Dispatch, SetStateAction } from 'react';

const CodeEditor = ({
  selectedLanguage,
  setcode
}: {
  selectedLanguage: string;
  setcode: Dispatch<SetStateAction<string>>;
}) => {
  const onChangeHandler = (value: string) => setcode(value);

  return (
    <div className='h-full w-3/4'>
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

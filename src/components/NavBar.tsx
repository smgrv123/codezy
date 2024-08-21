import useResult from '@/hooks/home/useResult';
import { resultType } from '@/utils/types';
import { Dispatch, SetStateAction } from 'react';
import LanguageSelect from './LanguageSelect';
import Run from './Run';
import ThemeToggle from './ThemeToggle';

export default function NavBar({
  code,
  selectedLanguage,
  result,
  setselectedLanguage,
  setresult
}: {
  code: string;
  selectedLanguage: string;
  result: resultType;
  setselectedLanguage: Dispatch<SetStateAction<string>>;
  setresult: Dispatch<SetStateAction<resultType>>;
}) {
  const { handleCompileClick } = useResult(selectedLanguage, code, setresult);

  return (
    <nav className='flex flex-row w-full bg-primary justify-between p-5 px-10'>
      <LanguageSelect setselectedLanguage={setselectedLanguage} />
      <div className='flex flex-row gap-7'>
        <Run handleCompileClick={handleCompileClick} result={result} />
        <ThemeToggle />
      </div>
    </nav>
  );
}

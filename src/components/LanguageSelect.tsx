import { languageOptions } from '@/constants/language-options';
import { Dispatch, SetStateAction } from 'react';

const LanguageSelect = ({ setselectedLanguage }: { setselectedLanguage: Dispatch<SetStateAction<string>> }) => {
  return (
    <select
      onChange={(e) => {
        e.preventDefault();
        setselectedLanguage(e.target.value);
      }}
      className='bg-inherit border-solid border-2 rounded-md p-2 text-inherit border-border-light shadow-[5px_5px_0px_0px_#4B4B4B] transition duration-200 hover:shadow flex-shrink-0 dark:border-border-dark dark:shadow-[5px_5px_0px_0px_#CFCFCF] dark:hover:shadow'
    >
      {languageOptions.map(({ id, name, value, label }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;

import { languageOptions } from '@/constants/language-options';
import { Dispatch, SetStateAction } from 'react';

const LanguageSelect = ({
  setselectedLanguage
}: {
  setselectedLanguage: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <select
      onChange={(e) => {
        e.preventDefault();
        setselectedLanguage(e.target.value);
      }}
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

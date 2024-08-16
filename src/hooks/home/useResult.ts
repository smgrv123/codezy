import { languageOptions } from '@/constants/language-options';
import { Dispatch, SetStateAction } from 'react';
import useSubmission from '../network/useSubmission';

const useResult = (selectedLanguage: string, code: string, setresult: Dispatch<SetStateAction<string | null>>) => {
  const { getSubmissionResult, sendSubmission } = useSubmission();
  const submissionResult = async ({ token }: { token: string }) => {
    const resultResponse = await getSubmissionResult(token);
    switch (resultResponse.status.id) {
      case 1:
      case 2:
        setTimeout(async () => {
          submissionResult({ token });
        }, 2000);
      case 3:
        setresult(atob(resultResponse.stdout!));
        break;
      case 5:
        setresult('Time Limit Exceeded');
        break;
      case 6:
        setresult(resultResponse.compileOutput);
        break;
      default:
        setresult(resultResponse.status.description);
        break;
    }
  };

  const handleCompileClick = async () => {
    const langId = languageOptions.find((i) => i.value === selectedLanguage)?.id.toString();
    const submissionResponse = await sendSubmission(langId!, code);
    submissionResult(submissionResponse);
  };

  return {
    handleCompileClick
  };
};

export default useResult;

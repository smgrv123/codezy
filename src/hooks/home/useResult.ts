import { languageOptions } from '@/constants/language-options';
import { resultType } from '@/utils/types';
import { Dispatch, SetStateAction } from 'react';
import useSubmission from '../network/useSubmission';

const useResult = (selectedLanguage: string, code: string, setresult: Dispatch<SetStateAction<resultType>>) => {
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
        setresult({
          resultResponse: atob(resultResponse.stdout!),
          resultCode: resultResponse.status.id,
          resultTime: resultResponse.time,
          resultStatus: resultResponse.status.description
        });
        break;
      case 5:
        setresult({
          resultResponse: 'Time Limit Exceeded',
          resultCode: resultResponse.status.id,
          resultTime: resultResponse.time,
          resultStatus: resultResponse.status.description
        });
        break;
      case 6:
        setresult({
          resultResponse: resultResponse.compileOutput as string,
          resultCode: resultResponse.status.id,
          resultTime: resultResponse.time,
          resultStatus: resultResponse.status.description
        });
        break;
      default:
        setresult({
          resultResponse: resultResponse.compileOutput as string,
          resultCode: resultResponse.status.id,
          resultTime: resultResponse.time,
          resultStatus: resultResponse.status.description
        });
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

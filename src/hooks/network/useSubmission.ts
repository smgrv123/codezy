import { SubmissionResponse } from '@/utils/types';
import { get, post } from '../../network/base';

const baseUrl = 'https://judge0-ce.p.rapidapi.com/';

const useSubmission = () => {
  const getSubmissionResult = async (postId: string) => {
    const queryURL = `${baseUrl}submissions/${postId}?base64_encoded=true&fields=*`;
    const response = await get<SubmissionResponse>(queryURL);

    return response;
  };

  const sendSubmission = async (langId: string, code: string, customInput: string = '') => {
    const queryURL = `${baseUrl}submissions?base64_encoded=true&fields=*`;
    const body = {
      language_id: langId,
      source_code: btoa(code),
      stdin: btoa(customInput)
    };

    const response = await post<{ language_id: string; source_code: string; stdin: string }, { token: string }>(
      queryURL,
      body
    );

    return response;
  };

  return {
    getSubmissionResult,
    sendSubmission
  };
};

export default useSubmission;

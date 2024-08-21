import { resultType } from '@/utils/types';

const Output = ({ result }: { result: resultType }) => {
  return (
    <div className='h-40 w-1/4 mx-5 rounded-md bg-inherit border-2 border-border-light shadow-[5px_5px_0px_0px_#4B4B4B] flex-shrink-0 dark:border-border-dark dark:shadow-[5px_5px_0px_0px_#CFCFCF]'>
      {result?.resultCode === 3 && result.resultResponse}
    </div>
  );
};

export default Output;

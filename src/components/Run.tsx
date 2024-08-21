import { Play } from 'lucide-react';

export default function Run({ handleCompileClick }: { handleCompileClick: () => void }) {
  return (
    <button
      className='flex flex-row gap-1 items-center border-2 border-border-light rounded-md shadow-[5px_5px_0px_0px_#4B4B4B] px-4 py-2 hover:shadow transition duration-200 bg-inherit flex-shrink-0 dark:border-border-dark dark:shadow-[5px_5px_0px_0px_#CFCFCF] dark:hover:shadow'
      onClick={handleCompileClick}
    >
      <span>Run</span>
      <Play className='h-4 w-4' />
    </button>
  );
}

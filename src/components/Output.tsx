const Output = ({ result }: { result: string | undefined | null }) => {
  return <div className='h-40 w-1/4 bg-red-300 dark:bg-green-500'>{result && result}</div>;
};

export default Output;

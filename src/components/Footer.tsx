export default function Footer() {
  return (
    <footer className='flex flex-row px-10 py-5 justify-between bg-inherit w-full border-t border-border-light dark:border-border-dark'>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <div className='flex items-center'>
        Build With ❤️ by{' '}
        <a href='https://www.sumritgrover.com' className='ml-1'>
          Sumrit Grover
        </a>
      </div>
    </footer>
  );
}

import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex-1 flex flex-col justify-center items-center w-full'>
      <SignIn />
    </div>
  );
}

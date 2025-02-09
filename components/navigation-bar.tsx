import Link from 'next/link';
import { MaxWidthWrapper } from './max-width-wrapper';
import { SignOutButton } from '@clerk/nextjs';
import { Button, buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { currentUser } from '@clerk/nextjs/server';

export const NavigationBar = async () => {
  const user = await currentUser();
  return (
    <nav className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex z-40 font-semibold'>
            Ping<span className='text-primary'>Panda</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
            {user ? (
              <>
                <SignOutButton>
                  <Button variant='ghost' size='sm'>
                    Sign Out
                  </Button>
                </SignOutButton>
                <Link
                  href='/dasboard'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'inline-flex items-center gap-1',
                  })}
                >
                  Dashboard
                  <span className='ml-1.5 size-4'>
                    <ArrowRight />
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href='/pricing'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href='/sign-in'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Sign In
                </Link>
                <div className='h-8 w-px bg-gray-200' />
                <Link
                  href='/sign-up'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'inline-flex items-center gap-1',
                  })}
                >
                  Sign Up
                  <span className='ml-1.5 size-4'>
                    <ArrowRight />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

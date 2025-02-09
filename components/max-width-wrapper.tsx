import { cn } from '@/utils';

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => (
  <div
    className={cn(
      'h-full w-full mx-auto max-w-screen-xl px-2.5 mx:px-20 ',
      className
    )}
  >
    {children}
  </div>
);

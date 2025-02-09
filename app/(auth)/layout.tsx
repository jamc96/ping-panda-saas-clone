import { NavigationBar } from '@/components/navigation-bar';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" aria-label="Kulisani Capital Home">
      <Image src="/logo.jpg" alt="Kulisani Capital Logo" width={32} height={32} className="h-8 w-auto" />
      <span className="hidden sm:inline-block font-headline text-lg font-bold text-foreground">
        Kulisani Capital
      </span>
    </Link>
  );
}

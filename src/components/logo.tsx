import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" aria-label="Kulisani Capital Home">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand">
        <span className="font-bold text-lg text-background">K</span>
      </div>
      <span className="hidden sm:inline-block font-headline text-lg font-bold text-foreground">
        Kulisani Capital
      </span>
    </Link>
  );
}

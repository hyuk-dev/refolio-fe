import Link from 'next/link';

export default function LinkButton({
  url,
  label,
}: {
  url: string;
  label: string;
}) {
  return (
    <Link href={`/${url}`} className="text-sm sm:text-base hover:underline transition-colors">
      {label}
    </Link>
  );
}

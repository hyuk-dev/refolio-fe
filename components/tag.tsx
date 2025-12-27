type TagProps = {
  label: string;
  color?: 'slate' | 'blue' | 'green' | 'red' | 'amber' | 'purple';
  radius?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
};

const colorStyles: Record<NonNullable<TagProps['color']>, string> = {
  slate: 'bg-slate-100 text-slate-700 border-slate-200',
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  green: 'bg-green-100 text-green-700 border-green-200',
  red: 'bg-red-100 text-red-700 border-red-200',
  amber: 'bg-amber-100 text-amber-700 border-amber-200',
  purple: 'bg-purple-100 text-purple-700 border-purple-200',
};

const radiusStyles: Record<NonNullable<TagProps['radius']>, string> = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export default function Tag({
  label,
  color = 'slate',
  radius = 'lg',
  className,
}: TagProps) {
  const colorClass = colorStyles[color];
  const radiusClass = radiusStyles[radius];

  return (
    <span
      className={[
        'inline-flex items-center border font-medium',
        'px-2 py-0.5 text-[11px]',
        'md:px-2.5 md:py-1 md:text-xs',
        colorClass,
        radiusClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </span>
  );
}

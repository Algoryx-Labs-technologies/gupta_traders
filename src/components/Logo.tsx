export const LOGO_SRC = `/assets/${encodeURIComponent('Gupta Traders.jpeg')}`;

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

export function Logo({
  className = '',
  imgClassName = 'h-9 w-auto',
}: LogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="Gupta Traders"
      className={`object-contain ${imgClassName} ${className}`.trim()}
    />
  );
}

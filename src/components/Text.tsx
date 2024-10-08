export default function Text({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return <p className={className}>{text}</p>;
}

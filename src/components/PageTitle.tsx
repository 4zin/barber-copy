export default function PageTitle({ text }: { text: string }) {
  return (
    <h2 className="text-white text-[52px] font-bold italic tracking-[5.72px] rotate-[270deg] absolute left-[-60px] bottom-[110px]">
      {text}
    </h2>
  );
}

import { MouseEventHandler } from "react";

interface Props {
  title: string;
  body: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
export default function DefaultCard({ title, body, onClick }: Props) {
  return (
    <div className="max-w-sm" onClick={onClick}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
    </div>
  );
}

import { ReactCompareSlider } from "react-compare-slider";

export function Comparison({
  itemOne,
  itemTwo,
  itemOneLabel = "Before",
  itemTwoLabel = "After",
}: {
  itemOne: React.ReactNode;
  itemTwo: React.ReactNode;
  itemOneLabel?: string;
  itemTwoLabel?: string;
}) {
  return (
    <div className="not-prose relative w-full overflow-hidden rounded-lg">
      <ReactCompareSlider
        className="w-full"
        itemOne={itemOne}
        itemTwo={itemTwo}
      />
      <span className="pointer-events-none absolute top-3 left-3 rounded-xl border border-zinc-300/80 bg-white/80 px-2 py-1 text-sm leading-none font-medium text-zinc-800 shadow-sm backdrop-blur-sm dark:border-zinc-600/80 dark:bg-zinc-900/80 dark:text-zinc-100">
        {itemOneLabel}
      </span>
      <span className="pointer-events-none absolute top-3 right-3 rounded-xl border border-zinc-300/80 bg-white/80 px-2 py-1 text-sm leading-none font-medium text-zinc-800 shadow-sm backdrop-blur-sm dark:border-zinc-600/80 dark:bg-zinc-900/80 dark:text-zinc-100">
        {itemTwoLabel}
      </span>
    </div>
  );
}

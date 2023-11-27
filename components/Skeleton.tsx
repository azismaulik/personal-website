const Skeleton = ({ cards }: { cards: number }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="flex-1 h-auto rounded-lg bg-neutral-900 animate-pulse"
      >
        <div className="w-full rounded-t-lg h-[200px] bg-neutral-800 animate-pulse relative">
          <div className="absolute flex gap-2 top-3 left-3">
            <div className="w-20 h-6 bg-neutral-700 animate-pulse rounded"></div>
            <div className="w-20 h-6 bg-neutral-700 animate-pulse rounded"></div>
          </div>
        </div>
        <div className="p-4 pb-10">
          <div className="w-full h-5 my-2 bg-neutral-800 animate-pulse rounded"></div>
          <div className="w-[80%] h-5 my-2 bg-neutral-800 animate-pulse rounded"></div>

          <div className="w-full h-3 mt-4 my-2 bg-neutral-800 animate-pulse rounded"></div>
          <div className="w-full h-3 my-2 bg-neutral-800 animate-pulse rounded"></div>
          <div className="w-full h-3 my-2 bg-neutral-800 animate-pulse rounded"></div>
          <div className="w-1/2 h-3 my-2 bg-neutral-800 animate-pulse rounded"></div>

          <div className="flex justify-between items-center mt-6 mb-2">
            <div className="w-[25%] h-4 rounded bg-neutral-800"></div>
            <div className="w-[40%] h-4 rounded bg-neutral-800"></div>
          </div>
        </div>
      </div>
    ));
};

export default Skeleton;

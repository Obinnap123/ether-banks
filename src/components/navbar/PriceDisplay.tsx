import { ArrowDown, ArrowUp } from "lucide-react";

interface PriceDisplayProps {
  label: string;
  pair: string;
  price: number;
  change: number;
}

export default function PriceDisplay({ label, pair, price, change }: PriceDisplayProps) {
  const isNegative = change < 0;
  const displayChange = Math.abs(change);

  return (
    <div className="flex items-start gap-1.5">
      <div className="flex flex-col">
        <span className="text-[10px] md:text-xs uppercase opacity-70">
          {label}
        </span>
        <div className="flex items-center gap-1.5 md:gap-2.5">
          <span className="text-[10px] md:text-xs opacity-70">{pair}</span>
          <span className="text-[10px] md:text-xs font-semibold">
            {price.toLocaleString()}
          </span>
          <span className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs text-red-500">
            {isNegative ? (
              <ArrowDown size={12} className="md:size-[15px]" />
            ) : (
              <ArrowUp size={10} className="md:size-3 text-green-500" />
            )}
            <span>{displayChange}%</span>
          </span>
        </div>
      </div>
      <div className="w-px h-8 bg-gray-400" />
    </div>
  );
}

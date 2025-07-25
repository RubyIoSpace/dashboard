import { Input } from "@/components/ui/input";
import { RiSearch2Line, RiCloseCircleLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface NameFilterProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const NameFilter = forwardRef<HTMLInputElement, NameFilterProps>(
  function NameFilter({ id, value, onChange }, ref) {
    return (
      <div className="relative">
        <Input
          id={`${id}-input`}
          ref={ref}
          className={cn(
            "peer min-w-60 ps-9 bg-background bg-gradient-to-br from-accent/60 to-accent",
            Boolean(value) && "pe-9",
          )}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name"
          type="text"
          aria-label="Search by name"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground/60 peer-disabled:opacity-50">
          <RiSearch2Line size={20} aria-hidden="true" />
        </div>
        {Boolean(value) && (
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/60 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Clear filter"
            onClick={() => {
              onChange("");
              if (ref && typeof ref !== "function" && ref.current) {
                ref.current.focus();
              }
            }}
          >
            <RiCloseCircleLine size={16} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  }
);
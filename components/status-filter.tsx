import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RiFilter3Line } from "@remixicon/react"

interface StatusFilterProps {
  id: string;
  options: string[];
  value: string[];
  counts: Map<string, number>;
  onChange: (value: string[]) => void;
}

export function StatusFilter({
  id,
  options,
  value,
  counts,
  onChange,
}: StatusFilterProps) {
  const handleToggle = (checked: boolean, option: string) => {
    let newValue = [...value]
    if (checked) {
      if (!newValue.includes(option)) newValue.push(option)
    } else {
      newValue = newValue.filter((v) => v !== option)
    }
    onChange(newValue)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <RiFilter3Line
            className="size-5 -ms-1.5 text-muted-foreground/60"
            size={20}
            aria-hidden="true"
          />
          Filter
          {value.length > 0 && (
            <span className="-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
              {value.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto min-w-36 p-3" align="end">
        <div className="space-y-3">
          <div className="text-xs font-medium uppercase text-muted-foreground/60">
            Status
          </div>
          <div className="space-y-3">
            {options.map((option, i) => (
              <div key={option} className="flex items-center gap-2">
                <Checkbox
                  id={`${id}-${i}`}
                  checked={value.includes(option)}
                  onCheckedChange={(checked: boolean) =>
                    handleToggle(checked, option)
                  }
                />
                <Label
                  htmlFor={`${id}-${i}`}
                  className="flex grow justify-between gap-2 font-normal"
                >
                  {option}{" "}
                  <span className="ms-2 text-xs text-muted-foreground">
                    {counts.get(option)}
                  </span>
                </Label>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
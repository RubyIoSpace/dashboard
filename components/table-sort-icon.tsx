import { RiArrowUpSLine, RiArrowDownSLine } from "@remixicon/react"

interface TableSortIconProps {
  direction?: "asc" | "desc";
}

export function TableSortIcon({ direction }: TableSortIconProps) {
  if (direction === "asc") {
    return (
      <RiArrowUpSLine
        className="shrink-0 opacity-60"
        size={16}
        aria-hidden="true"
      />
    )
  }
  if (direction === "desc") {
    return (
      <RiArrowDownSLine
        className="shrink-0 opacity-60"
        size={16}
        aria-hidden="true"
      />
    )
  }
  return null
}
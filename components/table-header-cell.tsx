import { flexRender } from "@tanstack/react-table"
import { cn } from "@/lib/utils"
import { TableSortIcon } from "./table-sort-icon"
import type { Header } from "@tanstack/react-table"

interface TableHeaderCellProps<TData> {
  header: Header<TData, unknown>;
}

export function TableHeaderCell<TData>({ header }: TableHeaderCellProps<TData>) {
  if (header.isPlaceholder) return null

  const canSort = header.column.getCanSort()
  const sorted = header.column.getIsSorted() as "asc" | "desc" | false

  if (canSort) {
    return (
      <div
        className={cn(
          "flex h-full cursor-pointer select-none items-center gap-2"
        )}
        onClick={header.column.getToggleSortingHandler()}
        onKeyDown={(e) => {
          if (canSort && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault()
            header.column.getToggleSortingHandler()?.(e)
          }
        }}
        tabIndex={0}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}
        <TableSortIcon direction={sorted ? sorted : undefined} />
      </div>
    )
  }

  return flexRender(header.column.columnDef.header, header.getContext())
}
import clsx from "clsx";

export default function TagList({ items, size = "md", label }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className={clsx(
            "rounded-full border border-neutral-200 bg-neutral-50 font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200",
            size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs"
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

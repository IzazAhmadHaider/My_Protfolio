import clsx from "clsx";

export default function Card({ className, children }) {
  return (
    <article
      className={clsx(
        "rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </article>
  );
}


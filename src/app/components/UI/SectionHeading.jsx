export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">{description}</p>
      ) : null}
    </header>
  );
}


import clsx from "clsx";

export default function SectionShell({
  id,
  sectionRef,
  className,
  children,
  withContainer = true,
}) {
  return (
    <section id={id} ref={sectionRef} className="scroll-mt-24 px-4 py-20 md:px-8">
      <div className={clsx(withContainer && "mx-auto w-full max-w-6xl", className)}>
        {children}
      </div>
    </section>
  );
}


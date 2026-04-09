import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
import SectionShell from "./UI/SectionShell";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Career"
        title="Experience"
        description="Roles where I have delivered high-impact product and engineering outcomes."
      />
      <div className="space-y-4">
        {experiences.map((experience) => (
          <Card key={`${experience.company}-${experience.role}`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {experience.role}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">{experience.company}</p>
              </div>
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                {experience.duration}
              </span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-200">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

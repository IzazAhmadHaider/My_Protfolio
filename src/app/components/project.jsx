import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
import SectionShell from "./UI/SectionShell";
import TagList from "./UI/TagList";
import { projects } from "../data/portfolioData";

export default function Project() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects"
        description="Products and platforms I have helped design, build, and scale in production."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {project.subtitle}
            </p>
            <p className="mt-4 text-neutral-700 dark:text-neutral-200">{project.description}</p>
            <div className="mt-4">
              <TagList items={project.stack} />
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
import SectionShell from "./UI/SectionShell";
import TagList from "./UI/TagList";
import { skillGroups } from "../data/portfolioData";

export default function SkillsPage() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Technical Skills"
        description="The technologies I use day to day across web, mobile, backend and AI work."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              {group.title}
            </h3>
            <div className="mt-4">
              <TagList items={group.items} label={`${group.title} skills`} />
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

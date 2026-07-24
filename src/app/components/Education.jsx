import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
import SectionShell from "./UI/SectionShell";
import { education, certifications } from "../data/portfolioData";

export default function Education() {
  return (
    <SectionShell id="education">
      <SectionHeading
        eyebrow="Background"
        title="Education & Certifications"
        description="Academic foundation and courses that shaped my engineering skill set."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Education
          </h3>
          <div className="mt-4 space-y-4">
            {education.map((item) => (
              <div key={item.degree}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    {item.degree}
                  </p>
                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                    {item.duration}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">{item.institution}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Certifications
          </h3>
          <div className="mt-4 space-y-4">
            {certifications.map((cert) => (
              <div key={cert.name}>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-600 dark:text-neutral-50 dark:decoration-neutral-700 dark:hover:text-neutral-300"
                    >
                      {cert.name}
                    </a>
                  ) : (
                    <p className="font-medium text-neutral-900 dark:text-neutral-50">{cert.name}</p>
                  )}
                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                    {cert.date}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}

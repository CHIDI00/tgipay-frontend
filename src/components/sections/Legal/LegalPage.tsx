import Silk from "@/components/Silk";
import Link from "next/link";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalTab = {
  label: string;
  href: string;
};

type LegalPageProps = {
  heading: string;
  intro?: string[];
  sections: LegalSection[];
  activeTab: string;
  tabs: LegalTab[];
};

const LegalPage = ({
  heading,
  intro,
  sections,
  activeTab,
  tabs,
}: LegalPageProps) => {
  return (
    <main>
      <section className="relative overflow-hidden bg-brand-navy pb-28 pt-36">
        <div className="absolute inset-0 opacity-20 [background-size:64px_64px] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)]" />

        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />

        <div className="relative z-10 max-w-[90rem] px-4 mx-auto">
          <h1 className="text-4xl font-bold text-white md:text-6xl">Legal</h1>
        </div>

        <div className="absolute bottom-0 right-0 h-24 w-[32rem] max-w-[75vw] rounded-tl-[10px] bg-slate-100" />
      </section>

      <section className="pb-20 bg-slate-100 pt-14">
        <div className="grid max-w-[90rem] gap-12 px-4 mx-auto lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside className="self-start lg:sticky lg:top-32">
            <p className="mb-5 text-xl font-semibold text-brand-navy">
              Legal Tabs
            </p>

            <nav className="pl-4 mb-10 border-l border-slate-300">
              <ul className="space-y-3">
                {tabs.map((tab) => {
                  const isActive = tab.href === activeTab;

                  return (
                    <li key={tab.href}>
                      <Link
                        href={tab.href}
                        className={`block text-base font-semibold transition-colors ${
                          isActive
                            ? "text-brand-navy border-l-2 border-brand-cyan -ml-4 pl-[14px]"
                            : "text-slate-600 hover:text-brand-navy"
                        }`}
                      >
                        {tab.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <p className="mb-5 text-2xl font-semibold text-slate-600">
              On this page
            </p>

            <nav className="pl-4 border-l border-slate-300">
              <ul className="space-y-3">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`block text-base font-semibold transition-colors ${
                        index === 0
                          ? "text-brand-navy border-l-2 border-brand-cyan -ml-4 pl-[14px]"
                          : "text-slate-600 hover:text-brand-navy"
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="space-y-10">
            <header className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
                {heading}
              </h2>

              {intro?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </header>

            {sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className="space-y-4 scroll-mt-32"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {section.title}
                </h3>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={`${section.id}-${paragraph.slice(0, 40)}`}
                    className="text-lg leading-relaxed text-slate-700"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets?.length ? (
                  <ul className="space-y-2 text-lg leading-relaxed list-disc list-outside text-slate-700 pl-7">
                    {section.bullets.map((bullet) => (
                      <li key={`${section.id}-${bullet.slice(0, 40)}`}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
};

export default LegalPage;

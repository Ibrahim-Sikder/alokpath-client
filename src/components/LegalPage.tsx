
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, CalendarDays } from "lucide-react";
import { PageHero } from "./PageHero";

export type LegalSection = { id: string; title: string; content: React.ReactNode };

export function LegalPage({
    eyebrow,
    title,
    titleEn,
    description,
    updated,
    sections,
    note,
}: {
    eyebrow: string;
    title: string;
    titleEn?: string;
    description: string;
    updated: string;
    sections: LegalSection[];
    note?: React.ReactNode;
}) {
    return (
        <main>
            <PageHero eyebrow={eyebrow} title={title} titleEn={titleEn} description={description} />

            <div className="mx-auto max-w-6xl px-4 py-12 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">

                <aside className="lg:sticky lg:top-24 lg:h-fit">
                    <Card className="p-4">
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                            এই পেজে যা আছে
                        </p>
                        <nav className="flex flex-col gap-0.5">
                            {sections.map((s, i) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="rounded-md px-2 py-1.5 text-[13px] leading-snug text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                >
                                    <span className="mr-1.5 font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
                                    {s.title}
                                </a>
                            ))}
                        </nav>
                        <Separator className="my-3" />
                        <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <CalendarDays className="h-3.5 w-3.5" /> সর্বশেষ হালনাগাদ: {updated}
                        </p>
                    </Card>
                </aside>

                {/* কনটেন্ট */}
                <article className="mt-8 lg:mt-0">
                    <div className="space-y-10">
                        {sections.map((s, i) => (
                            <section key={s.id} id={s.id}>
                                <div className="mb-3 flex items-start gap-3">
                                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/15 text-[12px] font-bold text-primary">
                                        {i + 1}
                                    </span>
                                    <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">{s.title}</h2>
                                </div>
                                <div className="prose-alokpath border-l-2 border-border/70 pl-4 sm:pl-5">{s.content}</div>
                            </section>
                        ))}
                    </div>

                    {note && (
                        <Card className="mt-10 border-primary/30 bg-primary/[0.06] p-5 text-sm leading-relaxed text-muted-foreground">
                            {note}
                        </Card>
                    )}

                    <div className="mt-10">
                        <a
                            href="#top"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80"
                        >
                            <ArrowUp className="h-4 w-4" /> উপরে ফিরে যান
                        </a>
                    </div>
                </article>
            </div>
        </main>
    );
}
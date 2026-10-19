import { Badge } from "@/components/ui/badge";

export function PageHero({
    eyebrow,
    title,
    titleEn,
    description,
}: {
    eyebrow: string;
    title: string;
    titleEn?: string;
    description: string;
}) {
    return (
        <section className="relative overflow-hidden border-b ">
            <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-brand-navy/10 blur-3xl" />
            <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20">
                <Badge
                    variant="outline"
                    className="mb-4 border-primary/40 bg-background/80 text-[11px] font-semibold uppercase tracking-wider text-primary"
                >
                    {eyebrow}
                </Badge>
                <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-[2.6rem]">{title}</h1>
                {titleEn && <p className="mt-1.5 text-sm font-semibold text-primary">{titleEn}</p>}
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{description}</p>
            </div>
        </section>
    );
}
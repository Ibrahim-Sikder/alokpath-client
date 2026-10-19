
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const blocks = [
    {
        h: "আমাদের গল্প",
        p: [
            "আলোকপথের যাত্রা শুরু হয় একটি সহজ বিশ্বাস থেকে — বাংলাভাষী পাঠকের জন্য এমন একটি সংবাদমাধ্যম দরকার, যা দ্রুততার সঙ্গে নির্ভুলতাকেও সমান গুরুত্ব দেয়।",
            "শুরুতেই আমরা ঠিক করেছিলাম, সংখ্যার চেয়ে মানকে গুরুত্ব দেব। তাই প্রতিটি প্রতিবেদন প্রকাশের আগে যাচাই, তথ্যসূত্র ও প্রাসঙ্গিকতা যাচাই করা হয়।",
        ],
    },
    {
        h: "লক্ষ্য ও উদ্দেশ্য",
        p: [
            "স্বচ্ছ, নিরপেক্ষ ও দায়বদ্ধ সাংবাদিকতার মাধ্যমে বাংলাদেশের পাঠকের কাছে নির্ভরযোগ্য তথ্য পৌঁছে দেওয়া।",
            "বাংলা ও ইংরেজি — দুই ভাষায় সংবাদ পরিবেশন করে প্রবাসী ও আন্তর্জাতিক পাঠকের কাছেও দেশের খবর সহজলভ্য করা।",
        ],
    },
    {
        h: "আমরা কী প্রকাশ করি",
        p: [
            "জাতীয়, রাজনীতি, খেলাধুলা, প্রযুক্তি, চাকরি, শিক্ষা, বিনোদন ও বিশ্ব সংবাদ। পাশাপাশি বিশ্লেষণ, ব্যাখ্যা ও পাঠকের জন্য উপকারী তথ্যমূলক প্রতিবেদন।",
            "মতামত ও সংবাদ আমরা আলাদা রাখি এবং মতামতের ক্ষেত্রে তা স্পষ্টভাবে চিহ্নিত করি।",
        ],
    },
    {
        h: "স্বাধীনতা ও নিরপেক্ষতা",
        p: [
            "আলোকপথ কোনো রাজনৈতিক দল, গোষ্ঠী বা বাণিজ্যিক স্বার্থের নিয়ন্ত্রণে চলে না। সম্পাদকীয় সিদ্ধান্ত নেওয়া হয় সম্পাদকীয় নীতির ভিত্তিতে।",
            "বিজ্ঞাপন ও স্পনসরড কনটেন্ট সম্পাদকীয় কনটেন্ট থেকে স্পষ্টভাবে আলাদা রাখা হয়।",
        ],
    },
    {
        h: "মালিকানা ও অর্থায়ন",
        p: [
            "আলোকপথের পরিচালনা ও অর্থায়নের তথ্য প্রকাশ্যে রাখা হয়। কোনো প্রতিষ্ঠান বা ব্যক্তির সঙ্গে আর্থিক সম্পর্ক থাকলে তা সম্পাদকীয় সিদ্ধান্তকে প্রভাবিত করতে পারে না।",
            "আয়ের প্রধান উৎস ডিজিটাল বিজ্ঞাপন; বিজ্ঞাপনদাতার সঙ্গে সম্পর্ক সম্পাদকীয় কনটেন্টকে প্রভাবিত করে না।",
        ],
    },
];

export const metadata = { title: "About Us" };

export default function AboutUsPage() {
    return (
        <main id="top">
            <PageHero
                eyebrow="About Us"
                title="প্রতিষ্ঠান পরিচিতি"
                titleEn="Who we are, what we stand for"
                description="আলোকপথ কারা পরিচালনা করে, কী উদ্দেশ্যে সংবাদ প্রকাশ করে এবং পাঠকের প্রতি আমাদের দায়বদ্ধতা কী — সব এক জায়গায়।"
            />

            <div className="mx-auto max-w-6xl px-4 py-14">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
                    <div className="space-y-10">
                        {blocks.map((b, i) => (
                            <section key={b.h}>
                                <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
                                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/15 text-xs font-bold text-primary">
                                        {i + 1}
                                    </span>
                                    {b.h}
                                </h2>
                                <div className="prose-alokpath mt-3 border-l-2 border-border/70 pl-5">
                                    {b.p.map((t) => (
                                        <p key={t}>{t}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    <aside className="h-fit space-y-4 lg:sticky lg:top-24">
                        <Card>
                            <CardContent className="p-5">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">At a glance</p>
                                <Separator className="my-3" />
                                <dl className="space-y-3 text-sm">
                                    {[
                                        ["প্রতিষ্ঠান", "আলোকপথ (Alokpath)"],
                                        ["ধরন", "অনলাইন সংবাদমাধ্যম"],
                                        ["ভাষা", "বাংলা ও ইংরেজি"],
                                        ["প্রকাশনা", "প্রতিদিন"],
                                        ["দেশ", "বাংলাদেশ"],
                                    ].map(([k, v]) => (
                                        <div key={k} className="flex justify-between gap-3">
                                            <dt className="text-muted-foreground">{k}</dt>
                                            <dd className="text-right font-semibold">{v}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </CardContent>
                        </Card>

                        <Card className="border-primary/30 bg-primary/[0.07]">
                            <CardContent className="p-5">
                                <p className="font-semibold">আরও জানুন</p>
                                <div className="mt-3 flex flex-col gap-2">
                                    <Button asChild variant="outline" size="sm" className="justify-between">
                                        <Link href="/editorial-policy">
                                            Editorial Policy <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="sm" className="justify-between">
                                        <Link href="/team">
                                            Our Team <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="sm" className="justify-between">
                                        <Link href="/contact">
                                            Contact Us <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </main>
    );
}
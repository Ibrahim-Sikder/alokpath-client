
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Eye, Flag, Newspaper, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const values = [
    { icon: ShieldCheck, title: "সত্য ও নির্ভুলতা", en: "Truth & Accuracy", d: "প্রতিটি খবর প্রকাশের আগে যাচাই, তথ্যসূত্র নিশ্চিত করা এবং ভুল হলে দ্রুত সংশোধন করা আমাদের অঙ্গীকার।" },
    { icon: Eye, title: "নিরপেক্ষতা", en: "Neutrality", d: "রাজনৈতিক, বাণিজ্যিক বা ব্যক্তিগত প্রভাবমুক্ত থেকে সব পক্ষের বক্তব্য সমান গুরুত্বে প্রকাশ করি।" },
    { icon: Users, title: "পাঠকের আস্থা", en: "Reader Trust", d: "পাঠকের সময় ও বোঝার ক্ষমতাকে সম্মান করে সহজ, পরিচ্ছন্ন ও অর্থবহ সংবাদ পরিবেশন করি।" },
    { icon: Flag, title: "দায়বদ্ধতা", en: "Accountability", d: "ভুল হলে স্বীকার করি; সংশোধন নীতি মেনে প্রকাশ্যে সংশোধনী প্রকাশ করি।" },
];

export const metadata = { title: "About Alokpath" };

export default function AboutPage() {
    return (
        <main id="top">
            <PageHero
                eyebrow="About Alokpath"
                title="আলোকপথ — আলোর পথে, সত্যের সাথে"
                titleEn="Alokpath — A bilingual national news outlet"
                description="আলোকপথ একটি বাংলা ও ইংরেজি দ্বিভাষিক সংবাদমাধ্যম, যা পাঠকের কাছে নির্ভরযোগ্য, যাচাইকৃত ও অর্থবহ সংবাদ পৌঁছে দিতে কাজ করে।"
            />

            <div className="mx-auto max-w-6xl px-4 py-14">
                {/* পরিচিতি */}
                <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
                    <div className="prose-alokpath">
                        <h2 className="text-2xl font-bold text-foreground">আমরা কারা</h2>
                        <p>
                            <strong>আলোকপথ (Alokpath)</strong> বাংলাদেশের একটি স্বাধীন অনলাইন সংবাদমাধ্যম। আমাদের লক্ষ্য
                            একটাই — পাঠকের কাছে সঠিক তথ্য পৌঁছে দেওয়া। আমরা বিশ্বাস করি, তথ্যের অধিকারই নাগরিক অধিকারের
                            ভিত্তি; আর সেই অধিকার রক্ষার দায়িত্ব সংবাদমাধ্যমের।
                        </p>
                        <p>
                            আমরা বাংলা ও ইংরেজি — দুই ভাষায় সংবাদ প্রকাশ করি, যাতে দেশের পাঠকের পাশাপাশি প্রবাসী ও
                            আন্তর্জাতিক পাঠকও বাংলাদেশের খবর নির্ভুলভাবে জানতে পারেন।
                        </p>

                        <h2 className="text-2xl font-bold text-foreground">আমরা কী করি</h2>
                        <ul>
                            <li>জাতীয়, রাজনীতি, খেলাধুলা, প্রযুক্তি, চাকরি ও বিশ্ব সংবাদ প্রকাশ করি</li>
                            <li>তথ্যসূত্রসহ যাচাইকৃত প্রতিবেদন ও বিশ্লেষণ পরিবেশন করি</li>
                            <li>পাঠকের মতামত ও অভিযোগ গুরুত্বের সাথে গ্রহণ করি</li>
                            <li>ভুল তথ্য দ্রুত সংশোধনের প্রক্রিয়া প্রকাশ্যে রাখি</li>
                        </ul>
                    </div>

                    <Card className="h-fit bg-brand-navy text-white">
                        <CardContent className="p-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</p>
                            <h3 className="mt-3 text-xl font-bold leading-snug">
                                “তথ্যের আলোয় আলোকিত সমাজ — যেখানে প্রতিটি পাঠক সঠিক তথ্যের ভিত্তিতে সিদ্ধান্ত নিতে পারেন।”
                            </h3>
                            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                                {[
                                    { k: "প্রতিষ্ঠা", v: "২০২৫" },
                                    { k: "ভাষা", v: "বাংলা + ইংরেজি" },
                                    { k: "ক্যাটাগরি", v: "৮+" },
                                    { k: "প্রকাশনা", v: "প্রতিদিন" },
                                ].map((s) => (
                                    <div key={s.k}>
                                        <p className="text-lg font-bold text-primary">{s.v}</p>
                                        <p className="text-[11px] uppercase tracking-wider text-white/60">{s.k}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* মূল্যবোধ */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight">আমাদের মূল্যবোধ</h2>
                    <p className="mt-1.5 text-sm text-muted-foreground">যে নীতিগুলো আমাদের প্রতিটি সংবাদকে পরিচালিত করে</p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {values.map((v) => (
                            <Card key={v.title} className="transition-shadow hover:shadow-md">
                                <CardContent className="flex gap-4 p-5">
                                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                                        <v.icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="font-semibold text-foreground">{v.title}</p>
                                        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">{v.en}</p>
                                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{v.d}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* নীতিমালা লিংক */}
                <Card className="mt-14 border-primary/25 bg-primary/[0.06]">
                    <CardContent className="flex flex-col items-start justify-between gap-5 p-7 md:flex-row md:items-center">
                        <div>
                            <Badge className="mb-2 bg-primary text-primary-foreground">Transparency</Badge>
                            <h3 className="text-lg font-bold">আমাদের সম্পাদকীয় ও নীতিমালা সম্পর্কে জানুন</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                সংবাদ যাচাই, সংশোধন ও পাঠকের গোপনীয়তা নিয়ে আমাদের অবস্থান স্পষ্ট।
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Button asChild variant="outline">
                                <Link href="/editorial-policy">Editorial Policy</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/policies">সব নীতিমালা</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* দ্রুত লিংক */}
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {[
                        { href: "/about-us", label: "About Us", d: "প্রতিষ্ঠান পরিচিতি", icon: Newspaper },
                        { href: "/team", label: "Our Team", d: "যারা কাজ করেন", icon: Users },
                        { href: "/contact", label: "Contact Us", d: "যোগাযোগের মাধ্যম", icon: CheckCircle2 },
                    ].map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="group rounded-xl border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-sm"
                        >
                            <l.icon className="h-5 w-5 text-primary" />
                            <p className="mt-3 font-semibold group-hover:text-primary">{l.label}</p>
                            <p className="text-[13px] text-muted-foreground">{l.d}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
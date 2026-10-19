// app/policies/page.tsx
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    ArrowRight, FileText, Gavel, Mail, MapPin, MessageSquare, Phone, ShieldCheck, Users,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

const policies = [
    { href: "/privacy-policy", title: "Privacy Policy", bn: "গোপনীয়তার নীতি", d: "আমরা কী তথ্য সংগ্রহ করি ও কীভাবে সুরক্ষিত রাখি।", icon: ShieldCheck },
    { href: "/terms", title: "Terms & Conditions", bn: "ব্যবহারের শর্তাবলি", d: "সাইট ব্যবহারের নিয়ম, কপিরাইট ও দায়সীমা।", icon: FileText },
    { href: "/disclaimer", title: "Disclaimer", bn: "দাবিত্যাগ", d: "কনটেন্ট ব্যবহারের সীমাবদ্ধতা ও দায়সংক্রান্ত তথ্য।", icon: Gavel },
    { href: "/editorial-policy", title: "Editorial Policy", bn: "সম্পাদকীয় নীতি", d: "সংবাদ যাচাই, তথ্যসূত্র ও নিরপেক্ষতার নিয়ম।", icon: Users },
    { href: "/correction-policy", title: "Correction Policy", bn: "সংশোধন নীতি", d: "ভুল তথ্য কীভাবে সংশোধন ও ঘোষণা করা হয়।", icon: FileText },
    { href: "/comment-policy", title: "Comment Policy", bn: "মন্তব্য প্রকাশের নীতিমালা", d: "মন্তব্যের নিয়ম ও মডারেশন প্রক্রিয়া।", icon: MessageSquare },
];

export const metadata = { title: "Policies & Contact" };

export default function PoliciesPage() {
    return (
        <main id="top">
            <PageHero
                eyebrow="Policies & Contact"
                title="নীতিমালা ও যোগাযোগ"
                titleEn="All policies in one place"
                description="আলোকপথের সব নীতিমালা, স্বচ্ছতার অঙ্গীকার এবং আমাদের সঙ্গে যোগাযোগের মাধ্যম এক জায়গায়।"
            />

            <div className="mx-auto max-w-6xl px-4 py-14">
                <h2 className="text-xl font-bold tracking-tight">আমাদের নীতিমালা</h2>
                <p className="mt-1 text-sm text-muted-foreground">Policies</p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {policies.map((p) => (
                        <Link key={p.href} href={p.href} className="group">
                            <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-md">
                                <CardContent className="p-5">
                                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                                        <p.icon className="h-5 w-5" />
                                    </span>
                                    <p className="mt-4 font-semibold group-hover:text-primary">{p.title}</p>
                                    <p className="text-[12px] font-semibold text-primary/80">{p.bn}</p>
                                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.d}</p>
                                    <span className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-primary">
                                        পড়ুন <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <Separator className="my-14" />

                <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                    <div>
                        <h2 className="text-xl font-bold tracking-tight">যোগাযোগ</h2>
                        <p className="mt-1 text-sm text-muted-foreground">Contact Us</p>
                        <p className="prose-alokpath mt-3">
                            সংবাদ সংশোধন, অভিযোগ, বিজ্ঞাপন বা যেকোনো প্রশ্নে আমাদের সঙ্গে যোগাযোগ করুন। আমরা সাধারণত
                            <strong> ২৪–৪৮ কর্মঘণ্টার</strong> মধ্যে উত্তর দেওয়ার চেষ্টা করি।
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {[
                                { icon: Mail, label: "ইমেইল", value: "info@alokpath.com", href: "mailto:info@alokpath.com" },
                                { icon: Mail, label: "সংশোধন", value: "corrections@alokpath.com", href: "mailto:corrections@alokpath.com" },
                                { icon: Phone, label: "ফোন", value: "+৮৮০ ১XXX-XXXXXX" },
                                { icon: MapPin, label: "ঠিকানা", value: "ঢাকা, বাংলাদেশ" },
                            ].map((c) => (
                                <Card key={c.label}>
                                    <CardContent className="flex items-start gap-3 p-4">
                                        <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                        <div className="min-w-0">
                                            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                                            {c.href ? (
                                                <a href={c.href} className="break-all text-[13.5px] font-medium hover:text-primary">
                                                    {c.value}
                                                </a>
                                            ) : (
                                                <p className="text-[13.5px] font-medium">{c.value}</p>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Button asChild className="mt-5">
                            <Link href="/contact">
                                যোগাযোগ ফর্মে যান <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <Card className="bg-brand-navy text-white">
                        <CardContent className="p-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">Quick Links</p>
                            <div className="mt-4 grid gap-2">
                                {[
                                    { href: "/about", l: "About Alokpath" },
                                    { href: "/about-us", l: "About Us" },
                                    { href: "/team", l: "Our Team" },
                                    { href: "/contact", l: "Contact Us" },
                                ].map((i) => (
                                    <Link
                                        key={i.href}
                                        href={i.href}
                                        className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2.5 text-sm text-white/85 transition-colors hover:border-primary/60 hover:text-white"
                                    >
                                        {i.l} <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
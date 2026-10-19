import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, MessageSquare, Phone, ShieldCheck } from "lucide-react";

const info = [
    { icon: Mail, label: "সাধারণ ইমেইল", value: "info@alokpath.com", href: "mailto:info@alokpath.com" },
    { icon: ShieldCheck, label: "সংবাদ সংশোধন", value: "corrections@alokpath.com", href: "mailto:corrections@alokpath.com" },
    { icon: MessageSquare, label: "বিজ্ঞাপন", value: "ads@alokpath.com", href: "mailto:ads@alokpath.com" },
    { icon: Phone, label: "ফোন", value: "+৮৮০ ১XXX-XXXXXX" },
    { icon: MapPin, label: "অফিস", value: "ঢাকা, বাংলাদেশ" },
    { icon: Clock, label: "সাড়া দেওয়ার সময়", value: "২৪–৪৮ কর্মঘণ্টা" },
];

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
    return (
        <main id="top">
            <PageHero
                eyebrow="Contact Us"
                title="যোগাযোগ করুন"
                titleEn="We'd love to hear from you"
                description="সংবাদ সংশোধন, অভিযোগ, বিজ্ঞাপন বা যেকোনো জিজ্ঞাসায় আমাদের সঙ্গে যোগাযোগ করুন। পাঠকের মতামত আমাদের কাছে গুরুত্বপূর্ণ।"
            />

            <div className="mx-auto max-w-6xl px-4 py-14">
                <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
                    {/* ফর্ম */}
                    <Card>
                        <CardContent className="p-6 sm:p-8">
                            <h2 className="text-xl font-bold tracking-tight">বার্তা পাঠান</h2>
                            <p className="mt-1 text-sm text-muted-foreground">Send us a message</p>
                            <div className="mt-6">
                                <ContactForm />
                            </div>
                        </CardContent>
                    </Card>

                    {/* তথ্য */}
                    <aside className="space-y-4">
                        <Card>
                            <CardContent className="p-5">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                                    যোগাযোগের মাধ্যম
                                </p>
                                <div className="mt-4 space-y-4">
                                    {info.map((i) => (
                                        <div key={i.label} className="flex items-start gap-3">
                                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                                                <i.icon className="h-4 w-4" />
                                            </span>
                                            <div className="min-w-0">
                                                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                                    {i.label}
                                                </p>
                                                {i.href ? (
                                                    <a href={i.href} className="break-all text-[13.5px] font-medium hover:text-primary">
                                                        {i.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-[13.5px] font-medium">{i.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-primary/30 bg-primary/[0.07]">
                            <CardContent className="p-5">
                                <p className="font-semibold">সংবাদ সংশোধনের অনুরোধ?</p>
                                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                                    সংবাদের লিংক, ভুল অংশ ও সঠিক তথ্য (সম্ভব হলে সূত্রসহ) লিখুন — আমরা দ্রুত যাচাই করে ব্যবস্থা নেব।
                                </p>
                                <a
                                    href="/correction-policy"
                                    className="mt-3 inline-block text-[13px] font-semibold text-primary underline underline-offset-4"
                                >
                                    সংশোধন নীতি পড়ুন
                                </a>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </main>
    );
}
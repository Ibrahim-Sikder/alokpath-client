// components/contact-form.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function ContactForm() {
    const [state, setState] = useState<"idle" | "loading" | "sent">("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setState("loading");
        // 👉 এখানে তোমার API route বা ইমেইল সার্ভিস কানেক্ট করো: /api/contact
        await new Promise((r) => setTimeout(r, 900));
        setState("sent");
    }

    if (state === "sent") {
        return (
            <div className="flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/[0.07] px-6 py-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <h3 className="mt-3 text-lg font-bold">বার্তা পাঠানো হয়েছে</h3>
                <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                    ধন্যবাদ! আমরা সাধারণত ২৪–৪৮ কর্মঘণ্টার মধ্যে উত্তর দিই।
                </p>
                <Button variant="outline" className="mt-5" onClick={() => setState("idle")}>
                    আরেকটি বার্তা পাঠান
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                    <Label htmlFor="name">নাম / Name *</Label>
                    <Input id="name" name="name" required placeholder="আপনার নাম" />
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="email">ইমেইল / Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
            </div>

            <div className="space-y-1.5">
                <Label>বিষয় / Subject *</Label>
                <Select name="subject" defaultValue="general">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="general">সাধারণ জিজ্ঞাসা</SelectItem>
                        <SelectItem value="correction">সংবাদ সংশোধন</SelectItem>
                        <SelectItem value="complaint">অভিযোগ</SelectItem>
                        <SelectItem value="advertise">বিজ্ঞাপন</SelectItem>
                        <SelectItem value="career">ক্যারিয়ার / ফ্রিল্যান্স</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="message">বার্তা / Message *</Label>
                <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="সংবাদের লিংক বা বিস্তারিত লিখুন..."
                />
            </div>

            <Button type="submit" disabled={state === "loading"} className="w-full sm:w-auto">
                {state === "loading" ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> পাঠানো হচ্ছে...</>
                ) : (
                    <><Send className="mr-2 h-4 w-4" /> বার্তা পাঠান</>
                )}
            </Button>

            <p className="text-[11.5px] leading-relaxed text-muted-foreground">
                ফর্ম পাঠানোর মাধ্যমে আপনি আমাদের <a href="/privacy-policy" className="text-primary underline">গোপনীয়তার নীতি</a> মেনে নিচ্ছেন।
            </p>
        </form>
    );
}
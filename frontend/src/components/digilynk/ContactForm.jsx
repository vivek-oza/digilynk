"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import toast from "react-hot-toast";
import { useContactStore } from "@/lib/contactStore.js";

import { Leapfrog } from 'ldrs/react'
import 'ldrs/react/Leapfrog.css'





const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(5, "Message must be at least 5 characters"),
});




export default function ContactForm() {
    const { submitContact, loading, success, error } = useContactStore();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            // message: "Hello, I want to inquire about ________, I have these specifc requirements ________, Please call back on this time ________",
            message: "",
        },
    });

    // const onSubmit = (data) => {
    //     console.log("Form Submitted:", data);
    //     toast.success("Your message has been sent successfully!");
    //     form.reset();
    // };

    const onSubmit = async (data) => {
        console.log("onSubmit Hit");
        await submitContact(data);
        if (success) {
            toast.success("Your message has been sent successfully!");
            // DEBUG COMMENT OUT
            // form.reset();
        }
        if (error) {
            toast.error("Failed to send message.");
            // DEBUG
            toast.error(error);
        }
    };

    return (
        <div className="w-full">
            <Card className="w-full rounded-none border-none bg-transparent py-8 px-4 sm:px-6 lg:px-8">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl md:text-2xl font-medium text-white mb-2">
                        Ready to Get Started?
                    </CardTitle>
                    <CardDescription className="text-zinc-300">Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-8 sm:px-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-3">
                                <Label htmlFor="name" className="text-zinc-300 font-medium">Full Name / Business Name <span className="text-red-500 font-light text-xl">*</span> </Label>
                                <Input
                                    id="name"
                                    {...form.register("name")}
                                    placeholder="Rahul Sharma"
                                    className="focus-visible:ring-blue-500 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 w-full"
                                />
                                {form.formState.errors.name && (
                                    <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label htmlFor="email" className="text-zinc-300 font-medium">Email <span className="text-red-500 font-light text-xl">*</span></Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        {...form.register("email")}
                                        placeholder="rahul@gmail.com"
                                        className="focus-visible:ring-blue-500 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 w-full"
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="phone" className="text-zinc-300 font-medium">Phone Number <span className="text-red-500 font-light text-xl">*</span></Label>
                                    <Input
                                        id="phone"
                                        {...form.register("phone")}
                                        placeholder="+91 9998887776"
                                        className="focus-visible:ring-blue-500 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 w-full"
                                    />
                                    {form.formState.errors.phone && (
                                        <p className="text-xs text-red-500">{form.formState.errors.phone.message}</p>
                                    )}
                                </div>
                            </div>




                            <div className="space-y-3">
                                <Label htmlFor="message" className="text-zinc-300 font-medium">Tell us more about your project <span className="text-red-500 font-light text-xl">*</span></Label>
                                <Textarea
                                    id="message"
                                    text="Hello"
                                    {...form.register("message")}
                                    placeholder="What are you looking to create? Any specific requirements or timelines? Or say Hello."
                                    className="focus-visible:ring-blue-500 min-h-[150px] max-h-[250px] bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 w-full resize-none"
                                />
                                {form.formState.errors.message && (
                                    <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
                                )}
                            </div>

                            <div className="w-full flex justify-center pt-6">
                                <ShimmerButton
                                    type="submit"
                                    className="text-white px-12 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                    shimmerColor="#ffffff"
                                    shimmerSize="0.15em"
                                    background="rgba(0, 0, 0, 1)"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-3">
                                        <Leapfrog
                                           size={24}
                                           speed={1.5}
                                           color="white"
                                           />
                                           <span>Sending...</span>
                                        </div>
                                    ) : (
                                        "Get Started"
                                    )}
                                </ShimmerButton>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
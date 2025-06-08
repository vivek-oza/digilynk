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
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { useContactStore } from "@/lib/contactStore.js";
import { Leapfrog } from "ldrs/react";
import "ldrs/react/Leapfrog.css";
import { useNavigate } from "react-router-dom";

const services = [
    { id: "web development", label: "Web Development" },
    { id: "software testing", label: "Software Testing" },
    { id: "graphic design", label: "Graphic Design" },
];

const budgetRanges = [
    { value: "25k-35k", label: "₹25,000 - ₹35,000" },
    { value: "20k-50k", label: "₹35,000 - ₹50,000" },
    { value: "50k+", label: "₹50,000+" },
];

const discoverySources = [
    { value: "instagram", label: "Instagram" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "facebook", label: "Facebook" },
    { value: "google", label: "Google Search" },
    { value: "referral", label: "Friend/Colleague Referral" },
    { value: "other", label: "Other" },
];

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    budget: z.string({ required_error: "Please select your budget range" }),
    services: z.array(z.string()).refine(val => val.length > 0, {
        message: "Please select at least one service",
    }),
    discoverySource: z.string({ required_error: "Please let us know how you found us" }),
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
            services: [],
            message: "",
        },
    });

    const onSubmit = async (data) => {
        await submitContact(data);
        if (success) {
            toast.success("Your message has been sent successfully!");
            // form.reset();
        }
        if (error) {
            toast.error("Failed to send message.");
            toast.error(error);
        }
    };

    const navigate = useNavigate();
    const handleBack = () => navigate("/");

    return (
        <div className="min-h-screen bg-zinc-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-4xl rounded-xl border-none bg-zinc-50 py-8 px-6 sm:px-8 lg:px-10 shadow-lg">
                <div className="mb-4">
                    <button
                        onClick={handleBack}
                        className="bg-gradient-to-r from-black via-gray-800 to-black text-white px-4 py-2 rounded hover:opacity-90 transition"
                    >
                        ← Back to Home
                    </button>
                </div>

                <CardHeader className="text-center md:text-left space-y-1">
                    <CardTitle className="text-lg md:text-xl font-poppins">
                        Let's Build Something Amazing Together!
                    </CardTitle>
                    <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-sm sm:text-base">
                            <div className="space-y-3">
                                <Label htmlFor="name">Full Name / Business Name <span className="text-red-500">*</span></Label>
                                <Input
                                    id="name"
                                    {...form.register("name")}
                                    placeholder="Rahul Sharma"
                                    className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none"
                                />
                                {form.formState.errors.name && (
                                    <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        {...form.register("email")}
                                        placeholder="rahul@gmail.com"
                                        className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none"
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="phone"
                                        {...form.register("phone")}
                                        placeholder="+91 9998887776"
                                        className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none"
                                    />
                                    {form.formState.errors.phone && (
                                        <p className="text-xs text-red-500">{form.formState.errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Estimated Budget <span className="text-red-500">*</span></FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none">
                                                    <SelectValue placeholder="Select your budget range" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-white/90 backdrop-blur-2xl">
                                                <SelectGroup>
                                                    {budgetRanges.map((range) => (
                                                        <SelectItem key={range.value} value={range.value}>
                                                            {range.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        {form.formState.errors.budget && (
                                            <p className="text-xs text-red-500">{form.formState.errors.budget.message}</p>
                                        )}
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="services"
                                render={() => (
                                    <FormItem>
                                        <FormLabel className="mb-2">Which services are you interested in? <span className="text-red-500">*</span></FormLabel>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                            {services.map((service) => (
                                                <FormField
                                                    key={service.id}
                                                    control={form.control}
                                                    name="services"
                                                    render={({ field }) => (
                                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(service.id)}
                                                                    onCheckedChange={(checked) =>
                                                                        checked
                                                                            ? field.onChange([...field.value, service.id])
                                                                            : field.onChange(field.value?.filter(val => val !== service.id))
                                                                    }
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">{service.label}</FormLabel>
                                                        </FormItem>
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        {form.formState.errors.services && (
                                            <p className="text-xs text-red-500">{form.formState.errors.services.message}</p>
                                        )}
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="discoverySource"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>How did you hear about us? <span className="text-red-500">*</span></FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none">
                                                    <SelectValue placeholder="Select an option" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="bg-white/90 backdrop-blur-2xl">
                                                <SelectGroup>
                                                    {discoverySources.map((source) => (
                                                        <SelectItem key={source.value} value={source.value}>
                                                            {source.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        {form.formState.errors.discoverySource && (
                                            <p className="text-xs text-red-500">{form.formState.errors.discoverySource.message}</p>
                                        )}
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-3">
                                <Label htmlFor="message">Tell us about your project <span className="text-red-500">*</span></Label>
                                <Textarea
                                    id="message"
                                    {...form.register("message")}
                                    placeholder="What are you looking to create? Any specific requirements or timelines?"
                                    className="focus-visible:ring-[#82CEFD] min-h-[150px] max-h-[250px] bg-slate-100 border-none"
                                />
                                {form.formState.errors.message && (
                                    <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
                                )}
                            </div>

                            <div className="w-full flex justify-center pt-4">
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto hover:scale-105 transition-all shadow-md shadow-black/30 px-6 sm:px-10 py-4 text-base sm:text-lg"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-3">
                                            <Leapfrog size={40} speed={1.5} color="white" />
                                        </div>
                                    ) : (
                                        "Get Started"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
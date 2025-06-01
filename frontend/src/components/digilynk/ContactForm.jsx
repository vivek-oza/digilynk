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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import toast from "react-hot-toast";
import { useContactStore } from "@/lib/contactStore.js";

import { Leapfrog } from 'ldrs/react'
import 'ldrs/react/Leapfrog.css'


const services = [
    {
        id: "web development",
        label: "Web Development",
    },
    {
        id: "software testing",
        label: "Software Testing",
    },
    {
        id: "graphic design",
        label: "Graphic design",
    },
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
    budget: z.string({
        required_error: "Please select your budget range",
    }),
    services: z.array(z.string()).refine((value) => value.length > 0, {
        message: "Please select at least one service",
    }),
    discoverySource: z.string({
        required_error: "Please let us know how you found us",
    }),
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
        <div className="flex bg-zinc-500 justify-center items-center">
            <Card className="w-full rounded-none border-none bg-zinc-50 py-8 px-4 sm:px-6 lg:px-8">
                <CardHeader className="text-left">
                    <CardTitle className="md:text-2xl text-base  font-poppins">
                        Let's Build Something Amazing Together!
                    </CardTitle>
                    <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-8 sm:px-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-3">
                                <Label htmlFor="name">Full Name / Business Name <span className="text-red-500 font-light text-xl">*</span> </Label>
                                <Input
                                    id="name"
                                    {...form.register("name")}
                                    placeholder="Rahul Sharma"
                                    className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none w-full"
                                />
                                {form.formState.errors.name && (
                                    <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label htmlFor="email">Email <span className="text-red-500 font-light text-xl">*</span></Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        {...form.register("email")}
                                        placeholder="rahul@gmail.com"
                                        className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none w-full"
                                    />
                                    {form.formState.errors.email && (
                                        <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <Label htmlFor="phone">Phone Number <span className="text-red-500 font-light text-xl">*</span></Label>
                                    <Input
                                        id="phone"
                                        {...form.register("phone")}
                                        placeholder="+91 9998887776"
                                        className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none w-full"
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
                                        <FormLabel className='text-sm'>What's your estimated budget for this project? <span className="text-red-500 font-light text-xl">*</span></FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none w-full">
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
                                        <div className="mb-3">
                                            <FormLabel className="text-sm flex md:flex-row flex-col text-start items-start md:items-center"> <span>Which services are you interested in? </span><span> (Select all that apply) <span className="text-red-500 font-light text-xl">*</span></span> </FormLabel>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {services.map((service) => (
                                                <FormField
                                                    key={service.id}
                                                    control={form.control}
                                                    name="services"
                                                    render={({ field }) => {
                                                        return (
                                                            <FormItem
                                                                key={service.id}
                                                                className="flex flex-row items-start space-x-3 space-y-0"
                                                            >
                                                                <FormControl>
                                                                    <Checkbox
                                                                        checked={field.value?.includes(service.id)}
                                                                        onCheckedChange={(checked) => {
                                                                            return checked
                                                                                ? field.onChange([...field.value, service.id])
                                                                                : field.onChange(
                                                                                    field.value?.filter(
                                                                                        (value) => value !== service.id
                                                                                    )
                                                                                )
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    {service.label}
                                                                </FormLabel>
                                                            </FormItem>
                                                        )
                                                    }}
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
                                        <FormLabel>Just curious - how did you first hear about us? <span className="text-red-500 font-light text-xl">*</span></FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="focus-visible:ring-[#82CEFD] bg-slate-100 border-none w-full">
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
                                <Label htmlFor="message">Tell us more about your project <span className="text-red-500 font-light text-xl">*</span></Label>
                                <Textarea
                                    id="message"
                                    text="Hello"
                                    {...form.register("message")}
                                    placeholder="What are you looking to create? Any specific requirements or timelines? Or say Hello."
                                    className="focus-visible:ring-[#82CEFD] min-h-[150px] max-h-[250px] bg-slate-100 border-none w-full"
                                />
                                {form.formState.errors.message && (
                                    <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
                                )}
                            </div>

                            {/* <div className="w-full flex justify-center pt-4">
                                <Button
                                    type="submit"
                                    className="hover:scale-105 transition-all shadow-xl shadow-black/30 px-8 py-6 text-lg"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-3">
                                            <Leapfrog
                                                size={20}
                                                speed={1.5}
                                                color="white"
                                            />
                                            ...
                                        </div>
                                    ) : (
                                        "Get Started"
                                    )}
                                </Button>
                            </div> */}

                            <div className="w-full flex justify-center pt-4">
                                <Button
                                    type="submit"
                                    className="hover:scale-110 transition-all shadow-xl shadow-black/30 px-8 py-6 text-lg"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="flex items-center gap-3">
                                        <Leapfrog
                                           size={40}
                                           speed={1.5}
                                           color="white"
                                           />
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
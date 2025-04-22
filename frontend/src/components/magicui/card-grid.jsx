
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// ShadcnCard component that uses shadcn/ui Card components
const ShadcnCard = ({ src, title, description }) => {
    return (
        <Card className="overflow-hidden text-zinc-800 shadow-none py-5 m-0 border-none flex flex-col space-y-4 h-full">
            <div className="h-72 w-full bg-zinc-200 rounded-2xl">
                {src ? (
                    <img
                        src={src}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">Image</span>
                    </div>
                )}
            </div>
            <CardHeader className='justify-start space-y-4 px-0'>
                <CardTitle className='text-2xl '>{title}</CardTitle>
                <CardDescription className='text-lg tracking-wide font-medium text-zinc-400'>{description}</CardDescription>
            </CardHeader>
        </Card>
    );
};

// CardGrid component that accepts an array of card details
export const CardGrid = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-16">
            {cards.map((card, index) => (
                <ShadcnCard
                    key={index}
                    src={card.src}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};
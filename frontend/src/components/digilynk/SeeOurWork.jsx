import React from 'react'
import ProjectCardGrid from '../magicui/project-card-grid';

export default function SeeOurWork() {

    // Sample usage with 4 cards
    const cardDetails = [
        {
            src: "/api/placeholder/400/320",
            title: "Placementor",
            description: "Install the Figma plugin and you're ready to convert your designs to a responsive site.",
            link: "/projects/placementor" // or full URL
        },
        {
            src: "/api/placeholder/400/320",
            title: "Design System",
            description: "Create and maintain consistent design patterns for your product ecosystem.",
            link: "/projects/placementor" // or full URL
        },
        {
            src: "/api/placeholder/400/320",
            title: "Component Library",
            description: "Reusable UI components that make building your product interface faster and easier.",
            link: "/projects/placementor" // or full URL
        },
        {
            src: "/api/placeholder/400/320",
            title: "Responsive Layouts",
            description: "Ensure your designs work beautifully across all screen sizes and devices.",
            link: "/projects/placementor" // or full URL
        }
    ];


    return (
        <>
            <section className=''>
                <div className="flex justify-center mb-20 text-5xl mx-auto font-semibold text-zinc-800">See our Work</div>
                <div>
                    <ProjectCardGrid cards={cardDetails} />
                </div>
            </section>
        </>
    )
};

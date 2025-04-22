import React from 'react'
import ProjectCardGrid from '../magicui/project-card-grid';

export default function SeeOurWork() {

    // Sample usage with 4 cards
    const cardDetails = [
        {
            // src: "/api/placeholder/400/320",
            src: "https://img.freepik.com/free-vector/travel-landing-page-with-photo_23-2148362640.jpg?t=st=1744361237~exp=1744364837~hmac=555c560cd6643f7c0063221375162f232c74a8419ad98a5b77dbcb90fae00701&w=1480",
            title: "Placementor",
            description: "Install the Figma plugin and you're ready to convert your designs to a responsive site.",
            link: "/projects/placementor" // or full URL
        },
        {
            // src: "/api/placeholder/400/320",
            src: "https://img.freepik.com/free-vector/general-business-landing-page-template_23-2148994929.jpg?t=st=1744361708~exp=1744365308~hmac=6c0760e988711db668e103c394e25edd09f1333df0c244b55c7eadf9de9d81ac&w=1480",
            title: "Design System",
            description: "Create and maintain consistent design patterns for your product ecosystem.",
            link: "/projects/placementor" // or full URL
        },
        {
            // src: "/api/placeholder/400/320",
            src: "https://img.freepik.com/free-vector/e-learning-concept-flat-landing-page_52683-7378.jpg?t=st=1744361368~exp=1744364968~hmac=610b7e5ce3c436867eeb4fd20562f1f55fae3ead5285f5acbb0c8dd426acefc5&w=1480",
            title: "Component Library",
            description: "Reusable UI components that make building your product interface faster and easier.",
            link: "/projects/placementor" // or full URL
        },
        {
            // src: "/api/placeholder/400/320",
            src: "https://img.freepik.com/free-vector/travel-landing-page-with-photo_23-2148362640.jpg?t=st=1744361237~exp=1744364837~hmac=555c560cd6643f7c0063221375162f232c74a8419ad98a5b77dbcb90fae00701&w=1480",
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

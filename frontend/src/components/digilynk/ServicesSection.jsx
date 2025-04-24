import React from 'react'
import ImageCardGrid from '../magicui/image-card-grid';

export default function ServicesSection() {

    const cardData = [
        {
            image: "https://framerusercontent.com/images/U5Tc0PdLNj5yoL19oAkc74mkiXA.png",
            title: "Website Development",
            description: "Learn how Framer can optimize your site for search engines.",
            buttonText: "View More",
            buttonLink: "/website-development"
        },
        {
            image: "https://framerusercontent.com/images/50a1D0xjPf1fmGvtEauBQeqUU.png",
            title: "Graphic Design",
            description: "Master the principles of effective graphic design and UI/UX.",
            buttonText: "View More",
            buttonLink: "/graphic-design"
        },
        {
            image: "https://framerusercontent.com/images/nqxXDQ0LRxsVDjpnbJj473mWQ.png",
            title: "Software Testing",
            description: "Speed up your website with these optimization techniques.",
            buttonText: "View More",
            buttonLink: "/software-testing"
        }
    ];

    return (
        <>
            <section className='mb-32'>
                <div className="flex justify-center mb-20 text-5xl mx-auto font-semibold text-zinc-800">Services</div>
                <ImageCardGrid cards={cardData} />
            </section>
        </>
    )
}
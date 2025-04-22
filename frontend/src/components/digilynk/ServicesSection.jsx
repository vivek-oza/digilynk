import React from 'react'
import BlogCardGrid from '../magicui/blog-card-grid';

export default function ServicesSection() {

    const cardData = [
        {
            image: "https://framerusercontent.com/images/U5Tc0PdLNj5yoL19oAkc74mkiXA.png",
            title: "Website Development",
            description: "Learn how Framer can optimize your site for search engines.",
            buttonText: "Read More",
            buttonLink: "/website-development"
        },
        {
            image: "https://framerusercontent.com/images/50a1D0xjPf1fmGvtEauBQeqUU.png",
            title: "UI Design",
            description: "Master the principles of effective user interface design.",
            buttonText: "Read More",
            buttonLink: "/ui-design"
        },
        {
            image: "https://framerusercontent.com/images/nqxXDQ0LRxsVDjpnbJj473mWQ.png",
            title: "Performance Tips",
            description: "Speed up your website with these optimization techniques.",
            buttonText: "Read More",
            buttonLink: "/performance"
        }
    ];

    return (
        <>
            <section className='mb-32'>
                <div className="flex justify-center mb-20 text-5xl mx-auto font-semibold text-zinc-800">Services</div>
                <BlogCardGrid cards={cardData} />
            </section>
        </>
    )
}
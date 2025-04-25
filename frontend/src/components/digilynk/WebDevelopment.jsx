import React from 'react'
import { motion } from 'framer-motion';
import web1 from '../../assets/images/web1.png';
import web2 from '../../assets/images/web2.png';
import web3 from '../../assets/images/web3.png';
import web4 from '../../assets/images/web4.png';
import web5 from '../../assets/images/web5.png';
import web6 from '../../assets/images/web6.png';
import web7 from '../../assets/images/web7.png';
import web8 from '../../assets/images/web8.png';

export default function WebDevelopment() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
        Website Development by Digilynk
      </h1>
      <p className="text-xl text-center text-gray-600 mb-1">
        Your{" "}
        <span className="text-blue-500 font-medium">Vision</span>, Our{" "}
        <span className="text-green-500 font-medium">Code</span>,
      </p>
      <p className="text-xl text-center text-gray-600 mb-10">
        Crafting{" "}
        <span className="text-purple-500 font-medium">Ideas into Reality</span>
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
        <motion.div className="md:w-1/2 mb-8 md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
          <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4" initial="hidden" whileInView="visible" variants={fadeInUp}>
            We craft digital experiences that accelerate your business growth, showcase your brand, and inspire trust from the very first click.
            <br />
          </motion.p>
          <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
            We are dedicated to delivering creative, secure, and high-performance websites tailored to your business needs. Our team of passionate developers blends innovative web design with robust development practices, ensuring every project is visually stunning, bug-free, and optimized for growth.
            <br /> <br />
          </motion.p>
          <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
            We believe that a well-crafted website is more than just an online presence. It’s a powerful tool for building trust, impressing clients, and accelerating your business success.
          </motion.p>
        </motion.div>
        <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
          <img
            src={web1}
            alt="Services"
            className="w-90 h-90 object-contain rounded-xl shadow-md"
          />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
        <motion.div className="md:w-1/2 mb-8 md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
          <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Why Website is important?</h2>
          <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4" initial="hidden" whileInView="visible" variants={fadeInUp}>
            A website is essential for business growth in today’s digital landscape. It acts as your virtual storefront, allowing customers to discover your products and services at any time, from anywhere.
            <br /> <br />
          </motion.p>
          <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
            With more than 80% of consumers researching online before making a purchase, having a professional website ensures you’re visible when potential customers are searching for solutions you offer35. This continuous online presence expands your reach, generates new leads, and opens up opportunities for increased sales and profitability
          </motion.p>
        </motion.div>
        <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
          <img
            src={web2}
            alt="Services"
            className="w-90 h-83 object-contain rounded-xl shadow-md"
          />
        </motion.div>
      </div>
      <div className="max-w-3xl mx-auto py-16 px-1">
        <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-6" initial="hidden" whileInView="visible" variants={fadeInUp}>
          Beyond visibility, a website builds credibility and trust with your audience. A well-designed, informative site signals professionalism and reliability, making customers more likely to choose your business over competitors.
          <br />
        </motion.p>
        <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
          It also serves as a central hub for your marketing efforts, supporting SEO, social media campaigns, and paid advertising, all of which drive targeted traffic and accelerate business growth.
        </motion.p>
      </div>
      <div className="h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Development Services
          </h2>

          <div className="bg-gray-900 text-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 w-full">
              <p>Personal Portfolio Websites</p>
              <p>Landing Pages</p>
              <p>Ecommerce Websites</p>
              <p>Business Websites</p>
              <p>Educational Websites</p>
            </div>
            <div className="space-y-4">
              <p>Hotel Website</p>
              <p>Hospital Website</p>
              <p>Event Websites</p>
              <p>Booking Websites</p>
              <p>Blogs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-4 md:px-16">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Why Digilynk?</h2>
            <h4 className="text-3xl font-semibold text-zinc-500 mb-6">Creative Web Design Excellence</h4>
            <motion.p
              className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              Our strength lies in delivering creative web designs that captivate visitors and reflect your brand identity.
              Every website we build is crafted with attention to detail, ensuring a unique and engaging user experience
              that sets you apart from the competition.
              <br /> <br />
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h4 className="text-3xl font-semibold text-zinc-500 mb-6">Bug-Free, Smooth, and Secure Websites</h4>
            <motion.p
              className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              We prioritize quality at every step, rigorously testing our websites to ensure they are bug-free, smooth in performance, and protected with the latest security measures. Your peace of mind is our priority.
              <br /> <br />
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h4 className="text-3xl font-semibold text-zinc-500 mb-6">Accelerate Your Business Growth</h4>
            <motion.p
              className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              A great website is a catalyst for business growth. We design websites that not only attract visitors but also convert them into loyal customers, helping you achieve your business goals faster.
              <br /> <br />
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h4 className="text-3xl font-semibold text-zinc-500 mb-6">First Impressions That Build Trust</h4>
            <motion.p
              className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              Your website is often the first point of contact with potential clients. Our visually appealing and professional designs create a strong first impression, building trust and credibility from the moment visitors land on your site.
              <br /> <br />
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h4 className="text-3xl font-semibold text-zinc-500 mb-6">Efficient, Research-Driven Processes</h4>
            <motion.p
              className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              We follow well-researched Standard Operating Procedures (SOPs) and industry best practices, making our development process efficient and time-saving. This allows us to deliver projects on time, every time, without compromising on creativity or quality.
              <br /> <br />
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h4 className="text-3xl font-semibold text-zinc-500 mb-6">On-Time Delivery</h4>
            <motion.p
              className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              We understand the importance of deadlines. Our streamlined workflow ensures there are no delays. Expect your website to be delivered on time, with responsive and amazing web design that exceeds your expectations.
              <br /> <br />
            </motion.p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={web3}
            alt="Services"
            className="w-90 h-90 object-contain rounded-xl shadow-md"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex items-center gap-16">
          <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <img src={web4} alt="Vision" className="w-80 h-80 rounded-xl shadow-md" />
          </motion.div>
          <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
            <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Client-Focused Collaboration</h2>
            <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
              We begin every project by understanding your business, your goals, and your audience. This helps us create a website that’s not only visually appealing but also aligned with your objectives and user needs.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex items-center flex-row-reverse gap-16">
          <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
            <img src={web5} alt="Mission" className="w-80 h-80 rounded-xl shadow-md" />
          </motion.div>
          <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h2 className="text-5xl font-semibold text-zinc-800 mb-6">SEO-Optimization</h2>
            <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
              Every website we build is optimized for search engines, using targeted keywords such as “web development,” “web development company,” “website development services,” and “ecommerce website development” to boost your online presence and drive organic traffic.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex items-center gap-16">
          <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <img src={web6} alt="Vision" className="w-80 h-80 rounded-xl shadow-md" />
          </motion.div>
          <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
            <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Responsive and Mobile-Friendly Designs</h2>
            <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
              With the majority of users browsing on mobile devices, we ensure your website looks and performs flawlessly on all screen sizes.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto py-16 px-6">
        <div className="flex items-center flex-row-reverse gap-16">
          <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
            <img src={web7} alt="Mission" className="w-80 h-80 rounded-xl shadow-md" />
          </motion.div>
          <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Support and Maintenance</h2>
            <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
              Our relationship doesn’t end at launch. We provide ongoing support and maintenance to keep your website running smoothly and securely as your business evolves.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
        <motion.div className="md:w-1/2 mb-8 md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
          <h2 className="text-5xl font-semibold text-zinc-800 mb-6">We believe in Design.</h2>
          <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4" initial="hidden" whileInView="visible" variants={fadeInUp}>
            Web design is a critical factor in shaping your business’s first impression. Visitors form opinions about your brand within seconds of landing on your site, and a visually appealing, user-friendly design can immediately convey trust, professionalism, and credibility1. A modern, clean layout not only attracts attention but also encourages users to explore your offerings, increasing the likelihood of engagement and conversion.
            <br /> <br />
          </motion.p>
          <motion.p className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
            Effective web design goes beyond aesthetic. It ensures intuitive navigation, fast loading times, and mobile responsiveness, all of which enhance the user experience. By investing in high-quality web design, your business stands out in a crowded market, leaving a memorable impression that builds customer confidence and loyalty.
            <br /> <br />
          </motion.p>
        </motion.div>
      </div>
      <div className="w-full px-4 md:px-16 py-16 bg-white text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
            Our Development Approach
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-500">Quality </span>
            <span className="text-green-500">Transparency </span>
            <span className="text-purple-500">& Collaboration</span>
          </h3>
        </div>
        <div className="flex justify-center">
          <img
            src={web8}
            alt="Responsive Website Design"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
          <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
            <h4 className="text-3xl font-semibold text-zinc-500 mb-6">Modern, Aesthetic, Clean, and Appealing Unique Designs</h4>
            <motion.p
              className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              At Digilynk, we specialize in crafting modern, aesthetic, and uniquely appealing web designs that elevate your brand identity. Our creative team blends the latest design trends with your business goals, ensuring every website is visually stunning, clean, and easy to navigate. We prioritize minimalism and clarity, using whitespace, balanced color schemes, and striking visuals to create an engaging and memorable digital experience.
              <br /> <br />
            </motion.p>
            <motion.p
              className="text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              Every project at Digilynk is tailored to your specific needs, resulting in a website that is not only beautiful but also highly functional and responsive across all devices. Our commitment to originality means your site will stand out with a design that’s truly one-of-a-kind reflecting your brand’s personality and values while driving user engagement and conversions.
              <br /> <br />
            </motion.p>
          </motion.div>
        </div>
    </div>
  )
}

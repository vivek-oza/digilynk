import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const blogs = [
  {
    id: 1,
    title: "Website Development Services in Gandhinagar: A Complete Guide",
    excerpt: "Comprehensive guide covering Gandhinagar's digital transformation, technical stack, case studies from Apollo Hospitals and GIDC, performance standards, and local SEO strategies for businesses.",
    keywords: ["website development", "gandhinagar", "web design"],
    readTime: "12 min read",
    date: "2024-08-30"
  },
  {
    id: 2,
    title: "Choosing the Right Web Development Agency: Technical Considerations",
    excerpt: "Complete technical assessment framework covering 6 critical domains, red flags to avoid, interview questions, success metrics, and proven evaluation methodologies for agency selection.",
    keywords: ["web development", "agency", "technical assessment"],
    readTime: "15 min read",
    date: "2024-08-29"
  },
  {
    id: 3,
    title: "Comprehensive Guide to Software Testing Methodologies",
    excerpt: "In-depth exploration of testing pyramid, advanced methodologies (BDD, TDD, property-based testing), performance testing, security frameworks, and CI/CD integration strategies.",
    keywords: ["software testing", "quality assurance", "testing pyramid"],
    readTime: "18 min read",
    date: "2024-08-28"
  },
  {
    id: 4,
    title: "E-commerce Development: Building Scalable Online Stores in Ahmedabad",
    excerpt: "Learn how to build scalable e-commerce platforms in Ahmedabad with modern technologies and local payment integration.",
    keywords: ["ecommerce", "ahmedabad", "online stores"],
    readTime: "9 min read",
    date: "2024-08-27"
  },
  {
    id: 5,
    title: "Progressive Web Apps vs Native: What Gujarat Businesses Should Choose",
    excerpt: "Compare PWA and native apps to determine the best approach for your Gujarat business needs and budget.",
    keywords: ["progressive web apps", "native apps", "gujarat"],
    readTime: "7 min read",
    date: "2024-08-26"
  },
  {
    id: 6,
    title: "SEO Strategies That Actually Work for Local Gujarat Businesses",
    excerpt: "Discover proven SEO strategies specifically tailored for Gujarat businesses to improve local search rankings.",
    keywords: ["SEO", "gujarat", "local search"],
    readTime: "11 min read",
    date: "2024-08-25"
  }
];

export default function BlogListPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Blog | Digilynk - Web Development & Technology Insights"
        description="Stay updated with the latest insights on web development, software testing, and digital solutions for Gujarat businesses."
        path="/blog"
      />
      <div className="pt-16 min-h-screen bg-black">
        <div className="relative mx-auto max-w-7xl px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Blog
            </motion.h1>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Stay updated with the latest insights on web development, software testing,
              and digital solutions for Gujarat businesses.
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/blog/${blog.id}`)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-zinc-400">{blog.readTime}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-sm text-zinc-400">{blog.date}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-4 group-hover:text-zinc-300 transition-colors duration-300">
                    {blog.title}
                  </h2>

                  <p className="text-zinc-300 mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.keywords.slice(0, 3).map((keyword, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/blog/${blog.id}`);
                      }}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
              Get the latest insights on web development and technology delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "Website Development Services in Gandhinagar",
    excerpt: "Discover top-notch website development services tailored for businesses in Gandhinagar. Boost your online presence today.",
    keywords: ["website development", "gandhinagar", "web design"],
    content: "Detailed content will go here..."
  },
  {
    id: 2,
    title: "Choosing the Best Web Development Agency",
    excerpt: "Key factors to consider when selecting a web development partner for your business growth and online success.",
    keywords: ["web development", "agency", "best practices"],
    content: "Detailed content will go here..."
  },
  {
    id: 3,
    title: "Software Testing: Ensuring Quality in Development",
    excerpt: "Learn how proper software testing methodologies can save costs and improve product quality in the long run.",
    keywords: ["software testing", "quality assurance", "development"],
    content: "Detailed content will go here..."
  }
];

export default function BlogSection() {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden border-y border-zinc-800">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-2xl md:text-4xl font-medium text-white font-roboto">
            Latest Insights
          </h3>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto font-roboto">
            Discover our expert articles on web development and digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div 
              key={index}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 hover:border-zinc-700 transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <h4 className="text-xl font-medium text-white mb-3">{blog.title}</h4>
              <p className="text-zinc-300 mb-4">{blog.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.keywords.map((keyword, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => navigate(`/blog/${blog.id}`)}
                className="mt-4 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors duration-300"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/blog')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            View All Blogs →
          </button>
        </div>
      </div>
    </section>
  );
}

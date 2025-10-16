import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogContent({ content }) {
  return (
    <div className="blog-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-12 font-roboto">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 mt-10 font-roboto">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-8 font-roboto">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-3 mt-6 font-roboto">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-lg md:text-xl font-semibold text-white mb-3 mt-6 font-roboto">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base md:text-lg font-semibold text-white mb-2 mt-4 font-roboto">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 text-gray-300 mb-6 ml-4">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-lg text-gray-300 leading-relaxed">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-white pl-6 py-2 my-6 italic text-gray-300 bg-zinc-900/50">
              {children}
            </blockquote>
          ),
          code: ({ inline, children }) =>
            inline ? (
              <code className="bg-zinc-800 text-white px-2 py-1 rounded text-sm font-mono">
                {children}
              </code>
            ) : (
              <code className="block bg-zinc-900 text-white p-4 rounded-lg my-4 overflow-x-auto font-mono text-sm">
                {children}
              </code>
            ),
          pre: ({ children }) => (
            <pre className="bg-zinc-900 rounded-lg p-4 my-6 overflow-x-auto">
              {children}
            </pre>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="rounded-lg my-6 w-full"
              loading="lazy"
            />
          ),
          hr: () => <hr className="border-zinc-800 my-8" />,
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-300">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

import React from "react";
import { Link } from "react-router";

export default function BlogCard({ post, view }) {
  if (view === "list") {
    return (
      <article className="group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/40 transition-all duration-500">
        <Link to={`/blog/${post.id}`} className="block">
          <div className="grid md:grid-cols-2">

            <div className="relative h-72 md:h-[350px] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <span className="absolute top-4 right-4 px-3 py-1.5 bg-[#4b4b5a]/90 text-white text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            <div className="p-8 flex flex-col justify-center">

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full">
                  {post.category}
                </span>

                <span className="text-sm text-neutral-500">
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                {post.title}
              </h2>

              <p className="text-neutral-400 leading-8 line-clamp-3 mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      {post.author.name}
                    </p>

                    <p className="text-xs text-neutral-500">
                      {new Date(post.date).toLocaleDateString("ar-EG")}
                    </p>
                  </div>
                </div>

                <span className="text-orange-500 font-semibold">
                  اقرأ المقال ←
                </span>

              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
 <>
    <article className="group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/40 transition-all duration-500">

      <Link to={`/blog/${post.id}`} className="block">

        <div className="relative h-56 overflow-hidden">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <span className="absolute top-4 right-4 px-3 py-1.5 bg-[#4b4b5a]/90 text-white text-xs font-semibold rounded-full">
            {post.category}
          </span>

        </div>

        <div className="p-5">

          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
            <span>
              {post.readTime}
            </span>

            <span>•</span>

            <span>
              {new Date(post.date).toLocaleDateString("ar-EG")}
            </span>
          </div>

          <h2 className="text-xl font-bold text-white leading-tight mb-3 group-hover:text-orange-500 transition-colors">
            {post.title}
          </h2>

          <p className="text-neutral-400 text-sm leading-7 line-clamp-2 mb-5">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <p className="text-white text-sm font-semibold">
                  {post.author.name}
                </p>

                <p className="text-neutral-500 text-xs">
                  {post.author.role}
                </p>
              </div>

            </div>

            <span className="w-9 h-9 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
              ←
            </span>

          </div>

        </div>

      </Link>

    </article>
 </>
  );
}
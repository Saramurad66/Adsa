import React from "react";
import { Link } from "react-router";
import data from "../../../assets/Data/Data.json";

export default function Home() {
  const featuredPosts = data.posts.slice(0, 3);

  return (
    <>
    
    <main dir="rtl" className="min-h-screen bg-[#0a0a0a] pt-28 pb-16">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

        <div className="text-right mb-10">
          <p className="text-orange-500 text-sm font-semibold mb-3">
            مقالات مميزة
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            مقالات مختارة
          </h1>

          <p className="text-neutral-400">
            محتوى منتقى لبدء رحلة تعلمك
          </p>
        </div>

        <div className="space-y-8">

          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block group"
            >
              <article className="grid md:grid-cols-2 bg-[#161616] border border-[#262626] rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all duration-500">

                <div className="relative h-72 md:h-[380px] overflow-hidden order-1">

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {post.featured && (
                    <span className="absolute top-5 right-5 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      ★ مميز
                    </span>
                  )}

                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center order-2">

                  <div className="flex items-center gap-3 mb-5">

                    <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>

                    <span className="text-neutral-500 text-sm">
                      ◷ {post.readTime}
                    </span>

                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-5 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-neutral-400 leading-8 mb-8">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">

                    <div className="flex items-center gap-3">

                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover"
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

                    <span className="text-orange-500 font-semibold text-sm group-hover:translate-x-[-5px] transition-transform">
                      اقرأ المقال ←
                    </span>

                  </div>

                </div>

              </article>
            </Link>
          ))}

        </div>

        <div className="flex justify-start mt-8">

          <Link
            to="/blog"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-all"
          >
            عرض الكل ←
          </Link>

        </div>

      </section>

    </main>
    </>
  );
}
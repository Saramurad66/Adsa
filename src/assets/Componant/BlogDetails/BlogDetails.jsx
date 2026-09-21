import React from "react";
import { Link, useParams } from "react-router";
import data from "../../../assets/Data/Data.json";

export default function BlogDetails() {
  const { id } = useParams();

  const post = data.posts.find((post) => post.id === Number(id));

  if (!post) {
    return (
      <main
        dir="rtl"
        className="min-h-screen bg-[#0a0a0a] pt-32 flex items-center justify-center text-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">
            المقال غير موجود
          </h1>

          <Link
            to="/blog"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
          >
            العودة للمدونة
          </Link>
        </div>
      </main>
    );
  }

  const content = post.content.split("\n");

  const sections = [];
  let sectionNumber = 0;

  content.forEach((line) => {
    if (line.startsWith("## ")) {
      sectionNumber++;

      sections.push({
        id: `section-${sectionNumber}`,
        title: line.replace("## ", ""),
      });
    }
  });

  return (
<>
    <main
      dir="rtl"
      className="min-h-screen bg-[#0a0a0a] text-white pt-20"
    >
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#0a0a0a]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mr-auto">

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
                {post.category}
              </span>

              <span className="text-neutral-300 text-sm">
                📅 {new Date(post.date).toLocaleDateString("ar-EG")}
              </span>

              <span className="text-neutral-300 text-sm">
                ◷ {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              {post.title}
            </h1>

            <div className="inline-flex items-center gap-4 bg-[#161616]/80 backdrop-blur-md border border-[#363636] rounded-2xl px-5 py-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
              />

              <div>
                <p className="text-white font-bold">
                  {post.author.name}
                </p>

                <p className="text-neutral-400 text-sm">
                  {post.author.role}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">

          <article className="min-w-0">

            <div className="bg-[#24170f] border border-orange-500/30 rounded-2xl p-6 md:p-8 mb-8">
              <p className="text-neutral-200 text-lg md:text-xl leading-9">
                "{post.excerpt}"
              </p>
            </div>

            <div className="text-neutral-300 text-lg leading-10">

              {content.map((line, index) => {

                if (!line.trim()) {
                  return (
                    <div
                      key={index}
                      className="h-4"
                    />
                  );
                }

                if (line.startsWith("## ")) {
                  const title = line.replace("## ", "");

                  const sectionIndex = sections.findIndex(
                    (section) => section.title === title
                  );

                  return (
                    <h2
                      id={`section-${sectionIndex + 1}`}
                      key={index}
                      className="scroll-mt-28 text-2xl md:text-3xl font-bold text-white mt-12 mb-5 border-r-4 border-orange-500 pr-4"
                    >
                      {title}
                    </h2>
                  );
                }

                if (line.startsWith("- ")) {
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 mb-3"
                    >
                      <span className="text-orange-500 mt-2">
                        ●
                      </span>

                      <p>
                        {line.replace("- ", "")}
                      </p>
                    </div>
                  );
                }

                return (
                  <p
                    key={index}
                    className="mb-5"
                  >
                    {line}
                  </p>
                );
              })}

            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#161616] border border-[#262626] text-neutral-400 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-8 bg-[#161616] border border-[#262626] rounded-2xl p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">

                <div>
                  <p className="text-white font-semibold mb-1">
                    شارك المقال
                  </p>

                  <p className="text-neutral-500 text-sm">
                    شارك هذا المقال مع أصدقائك
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl bg-[#262626] hover:bg-orange-500 transition-all">
                    f
                  </button>

                  <button className="w-10 h-10 rounded-xl bg-[#262626] hover:bg-orange-500 transition-all">
                    X
                  </button>

                  <button className="w-10 h-10 rounded-xl bg-[#262626] hover:bg-orange-500 transition-all">
                    ↗
                  </button>
                </div>

              </div>
            </div>

            <div className="mt-8 bg-[#161616] border border-[#262626] rounded-2xl p-6">
              <div className="flex items-center gap-4">

                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                />

                <div>
                  <p className="text-white font-bold text-lg">
                    {post.author.name}
                  </p>

                  <p className="text-neutral-500">
                    {post.author.role}
                  </p>
                </div>

              </div>
            </div>

          </article>

          <aside className="lg:sticky lg:top-28 space-y-6">

            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6">

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  محتويات المقال
                </h2>

                <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center text-xl">
                  ☷
                </div>
              </div>

              <div className="space-y-2">

                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 py-3 text-sm group"
                  >
                    <span className="w-8 h-8 shrink-0 rounded-full bg-[#262626] flex items-center justify-center text-neutral-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      {index + 1}
                    </span>

                    <span className="text-neutral-400 group-hover:text-orange-500 transition-colors">
                      {section.title}
                    </span>
                  </a>
                ))}

              </div>

            </div>

            <div className="grid grid-cols-2 gap-3 bg-[#161616] border border-[#262626] rounded-2xl p-4">

              <div className="bg-[#1d1d1d] rounded-xl p-4 text-center">
                <div className="text-orange-500 text-2xl mb-2">
                  📅
                </div>

                <p className="text-white font-bold text-lg">
                  {new Date(post.date).toLocaleDateString("ar-EG", {
                    day: "numeric",
                    month: "long",
                  })}
                </p>

                <p className="text-neutral-500 text-xs mt-1">
                  تاريخ النشر
                </p>
              </div>

              <div className="bg-[#1d1d1d] rounded-xl p-4 text-center">
                <div className="text-orange-500 text-2xl mb-2">
                  ◷
                </div>

                <p className="text-white font-bold text-lg">
                  {post.readTime.split(" ")[0]} دقائق
                </p>

                <p className="text-neutral-500 text-xs mt-1">
                  وقت القراءة
                </p>
              </div>

            </div>

          </aside>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="flex items-center justify-between mb-8">

          <div>
            <p className="text-orange-500 text-sm font-semibold mb-2">
              قد يعجبك أيضًا
            </p>

            <h2 className="text-3xl font-bold">
              مقالات ذات صلة
            </h2>
          </div>

          <Link
            to="/blog"
            className="text-orange-500 hover:text-orange-400"
          >
            عرض الكل
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {data.posts
            .filter(
              (item) =>
                item.id !== post.id &&
                item.category === post.category
            )
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="group bg-[#161616] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all"
              >

                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">

                  <span className="text-orange-500 text-xs font-semibold">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-500 text-sm mt-3">
                    {item.readTime}
                  </p>

                </div>

              </Link>
            ))}

        </div>

      </section>

    </main>

</>
  );
}
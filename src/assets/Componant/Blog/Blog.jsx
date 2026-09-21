import React, { useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import data from "../../data/data.json";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("الكل");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const posts = data.posts;

  const categories = [
    "الكل",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const filteredPosts = posts.filter((post) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchValue) ||
      post.excerpt.toLowerCase().includes(searchValue);

    const matchesCategory =
      category === "الكل" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  const postsPerPage = 6;

  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  function handleCategoryChange(item) {
    setCategory(item);
    setCurrentPage(1);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
    setCurrentPage(1);
  }

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
  <>
    <main
      dir="rtl"
      className="min-h-screen bg-[#0a0a0a] pt-28 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-semibold mb-3">
            مدونة عدسة
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            اكتشف عالم التصوير
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto">
            مقالات ونصائح وتقنيات تساعدك على تطوير مهاراتك في التصوير الفوتوغرافي
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between mb-8">

          <div className="relative w-full lg:w-80">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="ابحث في المقالات..."
              className="w-full bg-[#161616] border border-[#262626] rounded-2xl px-5 py-4 pr-12 text-white outline-none focus:border-orange-500 transition-all placeholder:text-neutral-500"
            />

            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  category === item
                    ? "bg-orange-500 text-white"
                    : "bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white hover:border-orange-500/30"
                }`}
              >
                {item === "الكل" ? "جميع المقالات" : item}
              </button>
            ))}
          </div>

        </div>

        <div className="flex justify-start mb-8">
          <div className="flex items-center bg-[#161616] border border-[#262626] rounded-2xl p-1.5">

            <button
              type="button"
              onClick={() => setView("list")}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                view === "list"
                  ? "bg-orange-500 text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setView("grid")}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                view === "grid"
                  ? "bg-orange-500 text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
            </button>

          </div>
        </div>

        {currentPosts.length > 0 ? (
          <div
            className={
              view === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-8"
            }
          >
            {currentPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                view={view}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-3">
              لا توجد مقالات
            </h2>

            <p className="text-neutral-500">
              جربي البحث بكلمة أخرى
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex flex-col items-center mt-12">

            <div className="flex items-center gap-2">

              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-11 h-11 rounded-xl bg-[#161616] border border-[#262626] text-white disabled:opacity-30 hover:border-orange-500 transition-all"
              >
                ←
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-11 h-11 rounded-xl font-semibold transition-all ${
                    currentPage === page
                      ? "bg-orange-500 text-white"
                      : "bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white hover:border-orange-500"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-11 h-11 rounded-xl bg-[#161616] border border-[#262626] text-white disabled:opacity-30 hover:border-orange-500 transition-all"
              >
                →
              </button>

            </div>

            <p className="text-neutral-500 text-sm mt-4">
              صفحة {currentPage} من {totalPages}
            </p>

          </div>
        )}

      </div>
    </main>
  </>
  );
}
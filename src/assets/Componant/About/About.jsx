import React from "react";
import { Link } from "react-router";
import data from "../../../assets/Data/Data.json";

export default function About() {
  const team = data.posts
    .map((post) => post.author)
    .filter(
      (author, index, array) =>
        index === array.findIndex((item) => item.name === author.name)
    );

  return (
<>
<main dir="rtl" className="min-h-screen bg-[#0a0a0a] text-white pt-20">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        <p className="text-orange-500 font-semibold mb-4">
          من نحن
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          مجتمعنا في
          <span className="text-orange-500"> عدسة </span>
          يجمعنا الشغف والتصوير
        </h1>

        <p className="text-neutral-400 text-lg leading-8 max-w-3xl mx-auto">
          عدسة هي منصة متخصصة في التصوير الفوتوغرافي، تجمع بين المعرفة
          والإبداع لتساعد المصورين على تطوير مهاراتهم واكتشاف عالم جديد
          من خلال عدساتهم.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">

          <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6">
            <div className="text-orange-500 text-3xl mb-3">✦</div>
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-neutral-500">مقالة متخصصة</p>
          </div>

          <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6">
            <div className="text-orange-500 text-3xl mb-3">◉</div>
            <h3 className="text-3xl font-bold mb-2">
              {team.length}
            </h3>
            <p className="text-neutral-500">مصور محترف</p>
          </div>

          <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6">
            <div className="text-orange-500 text-3xl mb-3">▣</div>
            <h3 className="text-3xl font-bold mb-2">10+</h3>
            <p className="text-neutral-500">مجال للتصوير</p>
          </div>

          <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6">
            <div className="text-orange-500 text-3xl mb-3">★</div>
            <h3 className="text-3xl font-bold mb-2">100%</h3>
            <p className="text-neutral-500">شغف وإبداع</p>
          </div>

        </div>

      </section>

      <section className="border-y border-[#262626] bg-[#0d0d0d]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="text-center mb-12">

            <p className="text-orange-500 text-sm font-semibold mb-3">
              رؤيتنا
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              نؤمن بقوة الصورة
            </h2>

            <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
              نريد أن نجعل التصوير الفوتوغرافي أكثر سهولة ومتعة لكل شخص
              لديه شغف بالتقاط اللحظات وصناعة الصور المميزة.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-5">

            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 text-center hover:border-orange-500/40 transition-all">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl">
                ◈
              </div>
              <h3 className="font-bold text-lg mb-3">الإبداع</h3>
              <p className="text-neutral-500 text-sm leading-7">
                نشجع الأفكار الجديدة والأساليب المختلفة في التصوير.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 text-center hover:border-orange-500/40 transition-all">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl">
                ◆
              </div>
              <h3 className="font-bold text-lg mb-3">الجودة</h3>
              <p className="text-neutral-500 text-sm leading-7">
                نقدم محتوى عملي يساعدك على تحسين مستواك باستمرار.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 text-center hover:border-orange-500/40 transition-all">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl">
                ♢
              </div>
              <h3 className="font-bold text-lg mb-3">المشاركة</h3>
              <p className="text-neutral-500 text-sm leading-7">
                نبني مجتمعًا يشارك المعرفة والخبرات بين المصورين.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 text-center hover:border-orange-500/40 transition-all">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 text-2xl">
                ✦
              </div>
              <h3 className="font-bold text-lg mb-3">الشغف</h3>
              <p className="text-neutral-500 text-sm leading-7">
                التصوير بالنسبة لنا أكثر من مجرد صورة، إنه شغف وحكاية.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="text-center mb-12">

          <p className="text-orange-500 text-sm font-semibold mb-3">
            فريقنا
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            فريق عدسة
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto">
            تعرف على مجموعة من المصورين والمبدعين الذين يشاركون خبراتهم
            وشغفهم مع مجتمع عدسة.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {team.map((member) => (

            <div
              key={member.name}
              className="bg-[#161616] border border-[#262626] rounded-2xl p-6 text-center hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300"
            >

              <div className="relative w-24 h-24 mx-auto mb-5">

                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-[#262626]"
                />

                <span className="absolute bottom-1 right-1 w-4 h-4 bg-orange-500 border-2 border-[#161616] rounded-full"></span>

              </div>

              <h3 className="text-white font-bold text-lg mb-2">
                {member.name}
              </h3>

              <p className="text-orange-500 text-sm mb-5">
                {member.role}
              </p>

              <div className="flex justify-center gap-2">

                <button className="w-9 h-9 rounded-lg bg-[#222] text-neutral-400 hover:bg-orange-500 hover:text-white transition-all">
                  f
                </button>

                <button className="w-9 h-9 rounded-lg bg-[#222] text-neutral-400 hover:bg-orange-500 hover:text-white transition-all">
                  X
                </button>

                <button className="w-9 h-9 rounded-lg bg-[#222] text-neutral-400 hover:bg-orange-500 hover:text-white transition-all">
                  in
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">

        <div className="max-w-4xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            هل أنت مستعد لتطوير مهاراتك؟
          </h2>

          <p className="text-white/80 mb-8">
            اكتشف مقالاتنا وتعلم تقنيات جديدة في عالم التصوير الفوتوغرافي.
          </p>

          <Link
            to="/blog"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-neutral-100 transition-all"
          >
            ابدأ القراءة
          </Link>

        </div>

      </section>

    </main>

</>
  );
}
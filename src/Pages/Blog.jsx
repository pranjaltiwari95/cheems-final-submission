import { useMemo } from "react";

const blogPosts = [
  {
    title: "How Cheems Connects Shelters with Loving Homes",
    date: "October 2, 2025",
    author: "Cheems Adoption Team",
    excerpt:
      "Discover how our swipe-to-adopt experience keeps shelter pups in the spotlight and helps families find their perfect match in minutes.",
  },
  {
    title: "Preparing Your Home for a New Furry Friend",
    date: "September 18, 2025",
    author: "Priya K. · Community Volunteer",
    excerpt:
      "From cozy corners to safe chew toys, here’s the quick checklist Cheems adopters swear by before welcoming home their newest companion.",
  },
  {
    title: "Verified Shelters: What It Means on Cheems",
    date: "August 29, 2025",
    author: "Rohan S. · Shelter Success Lead",
    excerpt:
      "Learn about our multi-step verification process and how it protects animals while making adoption transparent for every Cheems user.",
  },
];

export default function Blog() {
  const posts = useMemo(() => blogPosts, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFEADF] via-[#FFE2D5] to-[#FFE1D6] py-28 px-6 sm:px-12 lg:px-24 font-sans">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FF7E67]/10 px-4 py-1 text-sm font-medium text-[#FF5C7A]">
          Cheems Stories
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#2D1B3D]">
          Blog & Adoption Highlights
        </h1>
        <p className="mt-4 text-lg text-[#4A355A]">
          Fresh updates, real adopter journeys, and expert tips straight from the Cheems community.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-3xl bg-white/80 shadow-lg border border-[#FFE1D6] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="text-sm font-medium text-[#FF5C7A] uppercase tracking-wide">{post.date}</p>
            <h2 className="mt-3 text-2xl font-bold text-[#2D1B3D]">{post.title}</h2>
            <p className="mt-2 text-sm text-[#4A355A]">By {post.author}</p>
            <p className="mt-4 text-base text-[#4A355A] leading-relaxed">{post.excerpt}</p>
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF7E67] hover:text-[#FF5C7A] transition-colors">
              Continue reading
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}


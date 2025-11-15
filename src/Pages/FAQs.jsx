const faqs = [
  {
    question: "How does Cheems match me with a dog?",
    answer:
      "Create an adopter profile, browse verified shelter pups, and swipe right on dogs you love. When there’s a mutual match, you’ll unlock a secure chat with the shelter to take the next step.",
  },
  {
    question: "Can shelters join Cheems?",
    answer:
      "Absolutely! Shelters submit a quick application, verify their rescue credentials, and once approved they can publish limitless dog profiles for adopters across India.",
  },
  {
    question: "Is the adoption process safe?",
    answer:
      "Yes. Every shelter on Cheems is vetted by our team, and all conversations are kept secure within the platform until you’re ready to meet in person.",
  },
  {
    question: "What information do I need to post a dog?",
    answer:
      "Shelters list photos, personality notes, vaccination status, and optional voice notes so adopters get to know each Cheems pup before chatting.",
  },
  {
    question: "How quickly can I adopt?",
    answer:
      "Timeline varies by shelter, but most adopters schedule an initial call within 48 hours of matching. Many Cheems pups find homes in under two weeks.",
  },
];

export default function FAQs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFEADF] via-[#FFE2D5] to-[#FFE1D6] py-28 px-6 sm:px-12 lg:px-24 font-sans">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FF7E67]/10 px-4 py-1 text-sm font-medium text-[#FF5C7A]">
          Need Help?
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#2D1B3D]">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-[#4A355A]">
          Clear answers for adopters, shelters, and volunteers using the Cheems platform.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-3xl bg-white/80 border border-[#FFE1D6] shadow-lg transition-all duration-300 open:shadow-xl open:-translate-y-1"
          >
            <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4">
              <span className="text-lg font-semibold text-left text-[#2D1B3D]">{faq.question}</span>
              <span className="text-[#FF7E67] text-xl transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-[#4A355A] leading-relaxed text-base">
              {faq.answer}
            </div>
          </details>
        ))}
      </section>
    </main>
  );
}


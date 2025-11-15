const supportOptions = [
  {
    title: "Email the Pack",
    description: "Share detailed questions or feedback and we’ll reply within 24 hours.",
    action: "support@cheems.com",
  },
  {
    title: "Call Adoption Hotline",
    description: "Need urgent help with an adoption? Ring us directly.",
    action: "+91 86995 58779",
  },
];

const faqs = [
  {
    question: "How do I report an issue with a shelter listing?",
    answer:
      "Tap the “Report” button inside the dog’s profile or email us at support@cheems.com with screenshots. We review every report within 12 hours.",
  },
  {
    question: "Can Cheems help me update my adopter profile?",
    answer:
      "Yes! Head to your profile settings for quick edits. If something looks off, reach us via chat and we’ll make the change for you.",
  },
  {
    question: "I forgot my password. What should I do?",
    answer:
      "Use the “Forgot Password” link on the login screen. Still stuck? Email us with the phone number tied to your account and we’ll reset it manually.",
  },
];

export default function Support() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFEADF] via-[#FFE2D5] to-[#FFE1D6] py-28 px-6 sm:px-12 lg:px-24 font-sans">
      <section className="max-w-4xl mx-auto text-center mb-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FF7E67]/10 px-4 py-1 text-sm font-medium text-[#FF5C7A]">
          We’re here for you
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#2D1B3D]">Cheems Support Hub</h1>
        <p className="mt-4 text-lg text-[#4A355A]">
          Whether you’re an adopter, shelter, or volunteer, our team is ready to help you keep tails wagging.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 mb-16">
        {supportOptions.map((option) => (
          <article
            key={option.title}
            className="rounded-3xl bg-white/80 border border-[#FFE1D6] shadow-lg p-8 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#2D1B3D]">{option.title}</h2>
            <p className="mt-3 text-[#4A355A] leading-relaxed">{option.description}</p>
            <p className="mt-6 text-sm font-semibold text-[#FF7E67] uppercase tracking-wide">
              {option.action}
            </p>
          </article>
        ))}
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


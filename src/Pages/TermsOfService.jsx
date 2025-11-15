const terms = [
  {
    title: "1. Using Cheems",
    description:
      "By creating an account or browsing Cheems, you agree to follow these terms and the spirit of our community guidelines. Users must be 18+ or have guardian consent.",
  },
  {
    title: "2. Adopter Responsibilities",
    description:
      "Provide accurate profile details, communicate respectfully with shelters, and ensure any dog adopted through Cheems receives appropriate care, training, and medical attention.",
  },
  {
    title: "3. Shelter Responsibilities",
    description:
      "Only verified rescue organizations may publish dog profiles. Shelters must share truthful medical and behavioral notes and respond to adopter inquiries in a timely manner.",
  },
  {
    title: "4. Acceptable Use",
    description:
      "No harassment, fraudulent listings, or attempts to mislead adopters. We reserve the right to remove content or suspend accounts that violate these terms or harm the community.",
  },
  {
    title: "5. Disclaimers & Liability",
    description:
      "Cheems facilitates introductions between verified shelters and adopters but is not responsible for arrangements made off-platform. We are not liable for damages arising from adoption agreements.",
  },
  {
    title: "6. Updates to These Terms",
    description:
      "We may update these terms to reflect product improvements or legal requirements. Significant changes will be communicated via email and highlighted in-app.",
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFEADF] via-[#FFE2D5] to-[#FFE1D6] py-28 px-6 sm:px-12 lg:px-24 font-sans">
      <section className="max-w-4xl mx-auto text-center mb-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FF7E67]/10 px-4 py-1 text-sm font-medium text-[#FF5C7A]">
          Effective October 2025
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#2D1B3D]">Cheems Terms of Service</h1>
        <p className="mt-4 text-lg text-[#4A355A]">
          These guidelines keep adopters, shelters, and dogs safe while using the Cheems adoption platform.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-6">
        {terms.map((term) => (
          <article
            key={term.title}
            className="rounded-3xl bg-white/80 border border-[#FFE1D6] shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#2D1B3D]">{term.title}</h2>
            <p className="mt-3 text-[#4A355A] leading-relaxed">{term.description}</p>
          </article>
        ))}
      </section>

      <section className="max-w-4xl mx-auto mt-12 text-center text-sm text-[#4A355A]">
        <p>
          Have questions about these terms? Email{" "}
          <span className="font-semibold text-[#FF7E67]">legal@cheems.com</span> and our team will assist you.
        </p>
      </section>
    </main>
  );
}


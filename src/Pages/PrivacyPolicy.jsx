const sections = [
  {
    title: "1. Information We Collect",
    bullets: [
      "Account details such as your name, email address, city, and phone number.",
      "Shelter verification data including government IDs and rescue credentials.",
      "Usage analytics like page visits and favorite dog profiles to improve the Cheems experience.",
      "Chat transcripts between adopters and shelters to keep everyone safe and supported.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    bullets: [
      "Match adopters with verified shelters and eligible pups.",
      "Send adoption updates, safety reminders, and platform news.",
      "Review reports and keep the Cheems community free from misuse.",
      "Improve app performance and personalize recommendations.",
    ],
  },
  {
    title: "3. Sharing & Disclosure",
    bullets: [
      "We only share adopter details with shelters after a mutual match.",
      "Verified third-party providers (hosting, analytics, payment) receive data strictly as needed.",
      "We disclose information when legally required or to prevent fraud or harm.",
    ],
  },
  {
    title: "4. Your Choices & Rights",
    bullets: [
      "Update or delete your profile anytime from account settings.",
      "Disable marketing emails via the unsubscribe link at the bottom of each message.",
      "Request a full data export by emailing privacy@cheems.com.",
    ],
  },
  {
    title: "5. Data Security",
    bullets: [
      "Cheems uses encryption, access controls, and regular audits to protect your information.",
      "Report suspected security issues to security@cheems.com; we act within 48 hours.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFEADF] via-[#FFE2D5] to-[#FFE1D6] py-28 px-6 sm:px-12 lg:px-24 font-sans">
      <section className="max-w-4xl mx-auto text-center mb-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#FF7E67]/10 px-4 py-1 text-sm font-medium text-[#FF5C7A]">
          Updated October 2025
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#2D1B3D]">Cheems Privacy Policy</h1>
        <p className="mt-4 text-lg text-[#4A355A]">
          We safeguard every adopter, shelter, and volunteer who trusts Cheems to connect dogs with loving homes.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-8">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-3xl bg-white/80 border border-[#FFE1D6] shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#2D1B3D]">{section.title}</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-[#4A355A] leading-relaxed">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="max-w-4xl mx-auto mt-12 text-center text-sm text-[#4A355A]">
        <p>
          Questions about this policy? Email <span className="font-semibold text-[#FF7E67]">privacy@cheems.com</span>.
          We respond within 48 hours because your trust powers the Cheems community.
        </p>
      </section>
    </main>
  );
}


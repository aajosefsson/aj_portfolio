/* ===========================================================================
   CONTENT — this is the only file you need to edit to update the site.

   Everything below is plain text and image paths. No layout, no styling.
   Add a project by copying one block inside `projects` and changing the text.
   Images go in the /assets folder; reference them as 'assets/your-file.png'.
   =========================================================================== */

const CONTENT = {
  /* Skill pills in the About section ------------------------------------- */
  skills: [
    "User-Centered Design",
    "UX Research",
    "Wireframing & Prototyping",
    "UI Design",
    "Information Architecture",
    "Agile Methodologies",
    "Branding",
    "Figma",
    "Framer",
  ],
  /* Resume — work experience --------------------------------------------- */
  experience: [
    {
      dates: "Jan 2019 – ongoing",
      role: "Personal Trainer / Coach / Educator",
      org: "Strandhälsan, Falkenberg",
      desc: "Designing structured training programs for a broad variety of clients, such as individuals, teams and companies. Leading educational sessions across health and fitness.",
    },
    {
      dates: "Jan 2026 – Jun 2026",
      role: "UX Designer Intern",
      org: "doCuro Systems",
      desc: "Redesigned an e-signing and document management platform, focused on workflow clarity. Ran interviews, wireframes and prototypes in Figma.",
    },
    {
      dates: "Aug 2025 – Oct 2025",
      role: "UX Designer Intern",
      org: "Your Company Sweden",
      desc: "Conducted user interviews to understand low engagement among early-majority users; turned insights into design proposals.",
    },
  ],

  /* Resume — education --------------------------------------------------- */
  education: [
    {
      dates: "Aug 2024 – ongoing",
      role: "UX Designer",
      org: "IT-Högskolan",
      desc: "Coursework in user-centered systems, agile methodology, web design, prototyping and branding.",
    },
    {
      dates: "Aug 2013 – Jun 2016",
      role: "BSc in Biomedicine, Physical Training",
      org: "Halmstad University",
      desc: "Anatomy, physiology, biomechanics, psychology and health sciences.",
    },
  ],

  /* Projects ------------------------------------------------------------- */
  /* `id` must be unique — it becomes the URL hash (#project=helpy).
     `cover` and `gallery[].src` are image paths; leave '' for an empty slot. */
  projects: [
    {
      id: "helpy",
      title: "Helpy",
      category: "Product design",
      year: "2025",
      cover: "assets/helpy-cover.jpg",
      tagline:
        "A neighborhood platform that turns Facebook-group friction into structured, trustworthy peer-to-peer help.",
      facts: {
        Role: "UX Designer",
        Timeline: "8 weeks",
        Team: "8 designer classmates",
        Tools: "Figma, Miro",
      },
      challenge: [
        "People without a car often struggle to transport furniture or reach recycling centers. Existing Facebook groups for this are disorganized and can turn negative.",
        "We set out to design a platform that makes it easy and safe for neighbors to request and offer help — without the noise of an open forum.",
      ],
      insights: [
        "Trust and identity verification are the biggest barrier to adoption.",
        "The experience has to feel approachable even for non-technical users.",
        "Simple, guided flows outperform open-ended posting.",
      ],
      process:
        'I led design on the "Services" flow, where members of a housing cooperative post requests or offers. I ran the flow through three rounds of wireframes before landing on a guided request builder instead of a free-text post.',
      gallery: [
        { src: "", alt: "App screen — home" },
        { src: "", alt: "App screen — listings" },
        { src: "", alt: "App screen — post a service" },
      ],
      outcome:
        "The final prototype tested well with early-majority users who previously avoided similar apps, validating the guided-flow approach for a future MVP.",
    },

    {
      id: "strandhalsan",
      title: "Strandhälsan",
      category: "Web & booking design",
      year: "2025",
      cover: "assets/strandhalsan-cover.jpg",
      tagline:
        "A booking experience for an accessible health and rehab center — built around clarity for a wide range of users.",
      facts: {
        Role: "UX/UI Designer",
        Timeline: "6 weeks",
        Team: "3 designer classmates",
        Tools: "Figma",
      },
      challenge: [
        "Strandhälsan serves clients with varying mobility and comfort with technology, so the booking flow needed to be dead simple.",
        "The brief also asked for a warm, human visual identity that felt approachable rather than clinical.",
      ],
      insights: [
        "Users wanted to see availability before choosing a service, not after.",
        "A four-step flow was the ceiling for comfortable completion.",
        "Confirmation clarity mattered more than visual polish.",
      ],
      process:
        "I mapped the full service catalogue, then simplified the main flow to four steps: service, time, payment, confirmation — tested with two rounds of paper prototypes.",
      gallery: [
        { src: "", alt: "Flow diagram" },
        { src: "", alt: "Booking screen" },
        { src: "", alt: "Confirmation screen" },
      ],
      outcome:
        "Currently refining high-fidelity screens; a full case study with usability testing results is coming soon.",
    },

    {
      id: "thndr",
      title: "THNDR",
      category: "Branding & visual identity",
      year: "2025",
      cover: "assets/thndr-cover.jpg",
      tagline:
        "A rebrand for a motorcycle apparel label — bold type and high-contrast photography built for a niche riding community.",
      facts: {
        Role: "Graphic Designer",
        Timeline: "4 weeks",
        Team: "Solo",
        Tools: "Figma, Adobe Illustrator",
      },
      challenge: [
        "Custom Hoj needed a new sub-brand identity for its clothing line that felt distinct from the parent brand while sharing its DNA.",
        "The identity needed to work across packaging, social content and future e-commerce.",
      ],
      insights: [
        "The riding community responds to bold, condensed type and dark, moody photography.",
        "A flexible wordmark had to hold up cropped, stacked and single-line.",
        "Consistency mattered more than novelty across touchpoints.",
      ],
      process:
        "I explored ten logo directions, narrowed to three, then built a small system — type, color and photography direction — ready for upcoming collections.",
      gallery: [
        { src: "", alt: "Logo exploration" },
        { src: "", alt: "Packaging mockup" },
        { src: "", alt: "Campaign photo" },
      ],
      outcome:
        "The identity is now being applied to the brand’s first product drop and social presence.",
    },
  ],
};

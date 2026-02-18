import { LegalSection } from "@/components/sections/Legal/LegalPage";

export const legalTabs = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Policy", href: "/policy" },
];

export const privacyIntro = [
  "TGIPAY offers an online payment platform and support service that allows customers to make seamless, stress-free payments for desired goods and services online.",
  "This Privacy Policy describes how we collect, use, store, share, and protect personal data from Website Visitors, Customers, and Vendors who engage with our services.",
  "Our Services are primarily intended for and provided to businesses and organizations (Merchants), and we generally process personal data at the direction of and on behalf of those Merchants.",
  "By using or accessing our Services, you agree to the collection, use, and disclosure of your personal data as described in this Privacy Policy. Your use of our Services is also subject to TGIPAY’s Terms.",
];

export const privacySections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "The Information We Collect",
    paragraphs: [
      "The personal data we collect depends on how you interact with us, the services you use, and the choices you make.",
      "We collect data from information you provide directly, data collected automatically, third-party data sources, and data inferred from other information.",
    ],
  },
  {
    id: "data-you-provide",
    title: "Personal Data You Provide Directly",
    bullets: [
      "Contact information including your name, telephone numbers, and address.",
      "Payment information such as payment card numbers, financial account information, and related payment details when you transact via TGIPAY.",
      "Communications data including your email and support inquiry content when you contact us.",
    ],
  },
  {
    id: "data-collected-automatically",
    title: "Personal Data We Collect Automatically",
    bullets: [
      "Device information such as IP address, browser type, operating system version, and device identifiers.",
      "Usage information such as transaction records, session dates and times, viewed pages, links, and time spent on pages.",
      "Location information inferred from technical data like IP address.",
    ],
  },
  {
    id: "data-from-others",
    title: "Personal Data We Receive From Others",
    bullets: [
      "Partners and verification providers including financial institutions and payment processors.",
      "Publicly available sources such as open government databases.",
      "Inferences based on browsing behavior, such as likely user interests.",
    ],
    paragraphs: [
      "You may decline to provide certain personal data, and you may control some automatic collection through browser or operating system settings. Some services may not function fully without required information.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Personal Information",
    bullets: [
      "Provide requested services and respond to inquiries.",
      "Improve features, website content, and related services.",
      "Prevent, detect, and manage fraud and illegal activities.",
      "Verify identity and meet statutory obligations.",
      "Maintain records, resolve disputes, and support regulatory investigations.",
      "Send marketing and service updates only with explicit consent.",
    ],
  },
  {
    id: "how-we-share",
    title: "How We Share Personal Data",
    paragraphs: [
      "TGIPAY does not sell, trade, or rent personal data.",
      "We only share personal data with consent, as needed to provide services, or where required by law.",
    ],
    bullets: [
      "Merchants: We may share contact information needed for purchase records but do not share your card information with merchants.",
      "Service providers: Vendors supporting customer service, system security, sanctions screening, and identity verification under contractual safeguards.",
      "Financial services and payment processing: Banks and related entities for processing, fraud prevention, and risk management.",
      "Affiliates: Access across related entities where required to operate services.",
      "Corporate transactions: During merger, acquisition, financing, bankruptcy, dissolution, or sale of business assets.",
      "Legal compliance and safety: To comply with legal process, protect customers, maintain platform security, and enforce policies.",
      "Analytics and advertising partners: Including Google Analytics for website interaction analysis (https://policies.google.com/technologies/partner-sites).",
      "De-identified data may be shared where allowed by law.",
    ],
  },
];

export const policyIntro = [
  "This policy section explains how cookies are used, how we protect personal data, how long we retain data, and your rights under applicable data protection laws.",
];

export const policySections: LegalSection[] = [
  {
    id: "cookies-policy",
    title: "Cookies Policy",
    paragraphs: [
      "We and our partners use cookies and similar technologies to help collect information and operate the site.",
      "Cookies help us remember users, customize services, improve security, reduce fraud risk, and promote trust and safety.",
      "Most browsers accept cookies by default. You can update your browser settings to delete or reject cookies, but this may affect website experience.",
    ],
  },
  {
    id: "protect-information",
    title: "How We Protect Your Information",
    paragraphs: [
      "TGIPAY applies physical, technical, and administrative controls to protect personal data confidentiality and integrity.",
      "Security controls include encryption, firewalls, access controls, and role-based internal access restrictions.",
      "We align our controls with PCI DSS requirements and maintain periodic updates to keep security measures in line with industry standards.",
      "Two-factor authentication (2FA) is available as an extra checkout protection layer through OTP verification.",
      "TGIPAY maintains a breach response process and reports qualifying breaches to the relevant authority within 72 hours of discovery.",
    ],
  },
  {
    id: "storage-limitation",
    title: "Storage Limitation",
    bullets: [
      "As long as reasonably necessary to provide services.",
      "For the duration your account remains active and consent remains valid.",
      "For periods required to meet legal and statutory obligations.",
      "As needed for verification and transaction processing, settlements, refunds, and fraud prevention.",
    ],
  },
  {
    id: "transfer-of-data",
    title: "Transfer of Data",
    paragraphs: [
      "We may rely on third-party infrastructure located in foreign jurisdictions, which may involve cross-border data transfer.",
      "Where personal data is transferred outside Nigeria, TGIPAY implements safeguards in line with applicable regulations.",
      "Safeguards may include contractual protections or transfer to jurisdictions with recognized adequate protections, including lists recognized by NITDA or GDPR adequacy frameworks.",
      "Where transfer destinations have inadequate laws, we obtain informed consent and communicate associated risks.",
    ],
  },
  {
    id: "grounds-processing",
    title: "Grounds for Processing of Personal Data",
    bullets: [
      "Consent from the Data Subject.",
      "Necessity for performance of a contract or pre-contractual steps.",
      "Compliance with legal obligations applicable to TGIPAY.",
      "Protection of vital interests of the Data Subject or another person.",
      "Performance of a task in the public interest or under official authority.",
    ],
  },
  {
    id: "rights",
    title: "Data Subject Rights",
    bullets: [
      "Access personal information collected and stored by TGIPAY.",
      "Receive information on how personal data is processed.",
      "Know safeguards used for international data transfers.",
      "Object to automated decision-making and certain processing activities.",
      "Request correction, deletion, restriction, portability, and revocation of consent.",
      "Object to direct marketing and lodge a complaint with NITDA.",
    ],
    paragraphs: [
      "Requests are reviewed and answered by TGIPAY’s Data Protection Officer within 30 days.",
    ],
  },
  {
    id: "policy-changes",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this policy as technology evolves or legal requirements change.",
      "Where material changes affect how previously collected data is used or shared, we provide notice or obtain consent as required by law.",
      "Updated terms apply from the effective date published on our website.",
    ],
  },
  {
    id: "policy-violations",
    title: "Policy Violations",
    paragraphs: [
      "Any violation of this Privacy Policy should be reported to the Data Protection Officer for review and appropriate action.",
    ],
  },
  {
    id: "contact-dpo",
    title: "Contact TGIPAY’s Data Protection Officer (DPO)",
    paragraphs: [
      "If you have questions about this Privacy Policy or want to exercise your data protection rights, contact us at enquiry@tgipay.com.",
    ],
  },
];

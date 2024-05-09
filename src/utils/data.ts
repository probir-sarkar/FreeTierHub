import { TbBeta, TbBrandOpenSource } from "react-icons/tb";
import { IoMdGift, IoMdTime } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";

export const FREE_MODELS = [
  {
    name: "Freemium",
    slug: "freemium",
    icon: GiSettingsKnobs,
    subtitle: "Basic version of the product for free",
    details: "Freemium model offers a basic version of the product for free, with limited features. Users can upgrade to paid plans for more advanced features.",
    pros: [
      "Allows users to experience the product with no financial commitment.",
      "Attracts a wide user base, potentially converting free users into paying customers.",
      "Provides a scalable revenue model for the company."
    ],
    cons: [
      "Limited features may not meet the needs of all users.",
      "Conversion rate from free to paid plans can vary.",
      "Requires ongoing investment in product development to differentiate paid plans."
    ]
  },
  {
    name: "Free Trials",
    slug: "free-trials",
    icon: IoMdTime,
    subtitle: "Full access to the product for a limited time",
    details: "Free trials offer full access to the product for a limited time. Users must subscribe to a paid plan after the trial period ends.",
    pros: [
      "Allows users to fully experience the product's capabilities.",
      "Encourages prompt decision-making by setting a deadline for purchase consideration.",
      "Effectively onboard new customers by showcasing the product's value."
    ],
    cons: [
      "Users may feel rushed to evaluate the product within the trial period.",
      "Requires a clear strategy to convert trial users into paying customers.",
      "Risk of user churn if perceived value doesn't meet expectations during the trial."
    ]
  },
  {
    name: "Open Source",
    slug: "open-source",
    icon: TbBrandOpenSource,
    subtitle: "Built on open-source software",
    details:
      "Open-source products are built on freely available software and provided for free. They often rely on community support and contributions for development and maintenance.",
    pros: [
      "Fosters collaboration and innovation within the developer community.",
      "Attracts a dedicated user base committed to open-source principles.",
      "Offers transparency and flexibility for users to customize and extend the product."
    ],
    cons: [
      "May lack dedicated support and documentation compared to commercial products.",
      "Relies on community contributions for ongoing development and maintenance.",
      "Monetization options may be limited, posing sustainability challenges for the project."
    ]
  },
  {
    name: "Ad-Supported",
    slug: "ad-supported",
    icon: IoMdGift,
    subtitle: "Free version supported by advertisements",
    details: "Ad-supported products offer a free version supported by advertisements.",
    pros: [
      "Allows users to access the product without financial commitment.",
      "Generates revenue through advertising, potentially making the product profitable.",
      "Attracts users who prefer not to pay for a subscription."
    ],
    cons: [
      "Ads may disrupt the user experience and be perceived as intrusive.",
      "User engagement may decrease if ads distract from product usage.",
      "Revenue can fluctuate depending on ad inventory and user engagement."
    ]
  },
  {
    name: "Beta Versions",
    slug: "beta-versions",
    icon: TbBeta,
    subtitle: "Pre-release versions of the product for testing",
    details: "Beta versions of products are released for free to gather feedback from users before the official launch.",
    pros: [
      "Gathers valuable feedback and identifies bugs before the official launch.",
      "Engages early adopters who provide feedback and help shape the product.",
      "Builds anticipation and buzz for the official release."
    ],
    cons: [
      "Product stability and feature completeness may vary during the beta phase.",
      "Limited availability may frustrate eager users.",
      "Requires resources to manage and respond to feedback during beta testing."
    ]
  }
];

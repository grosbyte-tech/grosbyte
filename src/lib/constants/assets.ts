/**
 * Rewrites public paths to a CDN URL when NEXT_PUBLIC_CDN_URL is configured.
 */
function withCdn<T>(assets: T): T {
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
  if (!cdnUrl) return assets;

  const rewrite = (val: unknown): unknown => {
    if (typeof val === "string" && val.startsWith("/")) {
      return `${cdnUrl.replace(/\/$/, "")}${val}`;
    }
    if (val && typeof val === "object") {
      const out: Record<string, unknown> | unknown[] = Array.isArray(val) ? [] : {};
      for (const k of Object.keys(val)) {
        (out as Record<string, unknown>)[k] = rewrite((val as Record<string, unknown>)[k]);
      }
      return out;
    }
    return val;
  };

  return rewrite(assets) as T;
}

/**
 * Every media path the site references, one canonical map.
 *
 * Authored as root-relative `public/` paths. `withCdn` rewrites them to the CDN
 * origin at module load when `NEXT_PUBLIC_CDN_URL` is set; otherwise they pass
 * through unchanged. Consumers (and `<Image src>`) see final URLs and never need
 * to know which mode is active.
 */
const RAW_ASSETS = {
  brand: {
    logo: "/inflancer-logo.svg",
  },
  hero: {
    bg: "/bg/hero-bg.webp",
    leftSidepanel: "/bg/left-sidepanel.webp",
    rightSidepanel: "/bg/right-sidepanel.webp",
    icon: "/about/icon.webp",
  },
  showcase: {
    engagingLanding: "/about/engaging-landing-page-inflancer-technology.webp",
    ecommerce: "/about/e-commerce-inflancer-technology.webp",
    aiDevelopment: "/about/ai-development-inflancer-technology.webp",
    saas: "/about/SAAS--inflancer-technology.webp",
    businessPortal: "/about/busienss-portal-inflancer-technology.webp",
    landingPage: "/about/landing-page--inflancer-technology.webp",
    mobileApp: "/about/mobile-app--inflancer-technology.webp",
    flightBooking: "/about/flightbooking-inflancer-technology.webp",
    automate: "/about/showcase-automate.webp",
    builder: "/about/showcase-builder.webp",
    crypto: "/about/showcase-crypto.webp",
  },
  howWeWork: {
    containerBg: "/bg/Container (1).webp",
    vector: "/about/Vector.webp",
    mockup2: "/bg/how-we-work-2-2.webp",
    cards: {
      card1: "/how-we-work/card-1.webp",
      card2: "/how-we-work/card-2.webp",
      card3: "/how-we-work/card-3.webp",
      card4: "/how-we-work/card-4.webp",
      card5: "/how-we-work/card-5.webp",
      card6: "/how-we-work/card-6.webp",
      card7: "/how-we-work/card-7.webp",
      card8: "/how-we-work/card-8.webp",
      card9: "/how-we-work/card-9.webp",
    },
  },
  pricingHeader: {
    bg: "/glow-bg/main/bg.webp",
    cont2: "/glow-bg/main/cont-2.webp",
    line: "/glow-bg/main/line.webp",
    dot: "/glow-bg/main/dot.webp",
    bottom: "/glow-bg/main/bottom.webp",
  },
  pricing: {
    ellipseBg: "/bg/Ellipse-bg.webp",
    circleBox: "/bg/circle-box.webp",
    circleText: "/bg/circle-text.webp",
    bgBox: "/bg/bg-box.webp",
    bgMainbox: "/bg/bg-mainbox.webp",
  },
  recentWork: {
    explore: "/about/let's-explore.webp",
    explore1: "/about/let's-explore-1.webp",
    explore2: "/about/let's-explore-2.webp",
  },
  teamworkBenefits: {
    icon1: "/icons/icon-1.webp",
    icon2: "/icons/icon-2.webp",
    icon3: "/icons/icon-3.webp",
    icon4: "/icons/icon-4.webp",
    icon5: "/icons/icon-5.webp",
    icon6: "/icons/icon-6.webp",
  },
  techStack: {
    tailwind: "/icons/tailwind.svg",
    next: "/icons/next.svg",
    github: "/icons/github.svg",
    vscode: "/icons/vscode.svg",
    react: "/icons/react.svg",
    flutter: "/icons/flutter.svg",
    vue: "/icons/vue.svg",
    figma: "/icons/figma.svg",
    python: "/icons/python.svg",
    django: "/icons/django.svg",
    firebase: "/icons/firebase.svg",
    postgres: "/icons/postgres.svg",
    aws: "/icons/aws.svg",
    docker: "/icons/docker.svg",
    vercel: "/icons/vercel.svg",
    node: "/icons/node.svg",
  },
  testimonials: {
    magicEdit: "/bg/magic-edit.webp",
  },
  featuredVideo: {
    // Self-hosted on DigitalOcean Spaces (replaces the old YouTube embed) so
    // the browser can cache the actual file and autoplay-with-sound works
    // reliably. Already a full CDN URL — passed through unchanged by
    // withCdn/cdnAsset (only root-relative paths get rewritten).
    video:
      "https://iservers.blr1.cdn.digitaloceanspaces.com/inflancer/about/inflancer%20Technology%20Overview.mp4",
  },
  whoAreWe: {
    starIcon: "/whowework/star-icon-1.gif",
    // Re-encoded from a 1.2 MB / 240-frame GIF to a 74 KB animated WebP.
    industryIcon: "/whowework/industry-icon-2.webp",
    expIcon: "/whowework/exp-icon-3.webp",
    projectIcon: "/whowework/project-icon-4.webp",
    techIcon: "/whowework/tech-icon-5.webp",
    clientIcon: "/whowework/client-icon-6.webp",
    averageIcon: "/whowework/average-icon-7.webp",
    devImage: "/whowework/experienceddev.webp",
    video: "/whowework/who_We_are_video.mp4",
    videoPoster: "/whowework/who-we-are-poster.webp",
    ellipse5: "/bg/Ellipse 5.webp",
  },
  whyChooseUs: {
    bg1: "/why-choose/picture-1/bg.webp",
    productDesignMindset:
      "/why-choose/picture-1/5 years of product design mindset.webp",
    text1: "",
    floatingLaptop: "",
    bg2: "/why-choose/picture-2/bg.webp",
    text2: "",
    popUpImage: "/why-choose/picture-2/pop-up-image.webp",
    bg3: "/why-choose/picture-3/bg.webp",
    text3: "/why-choose/picture-3/text.webp",
    scrollWebsite: "/why-choose/picture-3/milestone-based-deliverables-01.webp",
    milestoneDeliverables1:
      "/why-choose/picture-3/milestone-based-deliverables-01.webp",
    milestoneDeliverables2:
      "/why-choose/picture-3/milestone-based-deliverables-02.webp",
    milestoneDeliverables3:
      "/why-choose/picture-3/milestone-based-deliverables-03.webp",
    floatingArrow: "/why-choose/picture-3/floating-arrow.webp",
    glowLightCircle: "/why-choose/picture-3/glow-light-circle.webp",
    bg4: "/why-choose/picture-4/bg 2.webp",
    consultingPhone: "/why-choose/picture-4/business tech consulting-01.webp",
    consultingDesktop: "/why-choose/picture-4/business tech consulting-02.webp",
    text4: "",
    bg5: "/why-choose/picture-5/bg.webp",
    scalableArchitecture01:
      "/why-choose/picture-5/scalable-architecture-01.webp",
    scalableArchitecture02:
      "/why-choose/picture-5/scalable-architecture-02.webp",
    scalableArchitecture03:
      "/why-choose/picture-5/scalable-architecture-03.webp",
    text5: "",
    tripleWebsite: "",
    bg6: "/why-choose/picture-6/24*7 support -bg.webp",
    supportIllustration: "/why-choose/picture-6/24*7 support.webp",
    text6: "",
    website: "",
    aIcon: "",
  },
  whatWeDo: {
    productDesign: "/what we do/product design inflancer technology.webp",
    saasDevelopment: "/what we do/SAAS development inflancer technology.webp",
    mobileAppDevelopment:
      "/what we do/mobile app development inflancer technology.webp",
    webDevelopment: "/what we do/web development inflancer technology.webp",
    aiAutomation: "/what we do/AI automation inflancer technology.webp",
  },
  aboutUs: {
    bgMain: "/about-us/main-bg.webp",
    bg1: "/about-us/bg-1.webp",
    frontImage1: "/about-us/frontimage-1.webp",
    frontImage3: "/about-us/frontimage-3.webp",
    frontImage4: "/about-us/frontimage-4.webp",
    frontImage6: "/about-us/frontimage-6.webp",
    frontImage8: "/about-us/frontimage-8.webp",
    frontImage9: "/about-us/frontimage-9.webp",
    frontImage11: "/about-us/frontimage-11.webp",
    frontImage12: "/about-us/frontimage-12.webp",
    frontImage13: "/about-us/frontimage-13.webp",
    containerBg: "/bg/Container.webp",
    mobileMockup: "/about-us/section-3/mobile.webp",
    earth: "/about-us/section-3/earth.webp",
    circularEclipse: "/about-us/man-behind/circular-eclipse.webp",
    circularEclipse1: "/about-us/man-behind/circular-eclipse-1.webp",
    circularEclipse2: "/about-us/man-behind/circular-eclipse-2.webp",
    bgCircle: "/about-us/man-behind/bg-circle.webp",
    greenBg: "/about-us/green-bg.webp",
    discussBg: "/about-us/dicusss-bg.webp",
    person1: "/about-us/section-4/person-1.webp",
    person2: "/about-us/section-4/person-2.webp",
    person3: "/about-us/section-4/person-3.webp",
    person4: "/about-us/section-4/person-4.webp",
    person5: "/about-us/section-4/person-5.webp",
    allTeam: "/about-us/section-4/all.webp",
    innovation1: "/about-us/inovation-1.webp",
    innovation2: "/about-us/inovation-2.webp",
    innovation3: "/about-us/inovation-3.webp",
    rightSidePanel: "/about-us/right-side-panel.webp",
    mobileAppsShowcase: "/about-us/mobile-apps-showcase.webp",
  },
  career: {
    githubPng: "/icons/github.webp",
    awsPng: "/icons/awss.webp",
    figmaPng: "/icons/figma.webp",
    dockerPng: "/icons/docker.webp",
    bgHiring: "/bg/bg-hiring.webp",
    isometricPlatform: "/bg/Image.webp",
    robot: "/bg/robot.webp",
    smallCareer2: "/bg/small-career-2.webp",
    leftSideCareer: "/bg/left-side-career.webp",
    circular: "/bg/circular.webp",
  },
  contactUs: {
    contact1: "/contact-us/contact-1.webp",
  },
  serviceCapabilities: {
    productDesignBg: "/our service/product-design/Product Design bg.webp",
    productDesignWireframe: "/our service/product-design/image-01.webp",
    productDesignScreens:
      "/our service/product-design/product-design-showcase.webp",
    productDesignShowcase:
      "/our service/product-design/product-design-showcase.webp",
    productDesignScreen02: "/our service/product-design/image-02.webp",
    productDesignScreen03: "/our service/product-design/image-03.webp",
    productDesignScreen04: "/our service/product-design/image-04.webp",
    productDesignScreen05: "/our service/product-design/image-05.webp",
    webDevBg: "/our service/web-development/Web Development bg.webp",
    webDevServices:
      "/our service/web-development/web-development-services.webp",
    mobileAppBg: "/our service/mobile apps/mobile app development bg.webp",
    mobileAppPhone: "/our service/mobile apps/mobile app development .webp",
    saasDevBg: "/our service/saas development/saas deevlopment bg.webp",
    saasDevDashboard:
      "/our service/saas development/saas development-images.webp",
    aiMlBg: "/our service/ai-automation/ai-automation-bg.webp",
    aiMlAvatar: "/our service/ai-automation/ai-automation.webp",
    devopsBg: "/our service/devops-cybersecurity/devops-cybersecurity-bg.webp",
    devopsGraphic: "/our service/devops-cybersecurity/devops.webp",
  },
} as const;

export const ASSETS = withCdn(RAW_ASSETS);

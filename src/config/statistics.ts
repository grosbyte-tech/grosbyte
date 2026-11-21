export interface StatisticItemConfig {
  value: string;
  translationKey: string;
}

export const HOME_STATISTICS: StatisticItemConfig[] = [
  { value: "3", translationKey: "about.stats.services" },
  { value: "7", translationKey: "about.stats.stages" },
  { value: "18+", translationKey: "about.stats.technologies" },
];

export const SERVICE_KEYS: Record<string, string> = {
  "Custom Software Development": "customSoftware",
  "Web, Mobile Application Development": "webMobileApp",
  "Digital Marketing and Brand Growth": "digitalMarketing",
};

export const SERVICE_ROUTES: Record<string, string> = {
  "Custom Software Development": "/custom-software-development",
  "Web, Mobile Application Development": "/web-mobile-applications",
  "Digital Marketing and Brand Growth": "/digital-marketing",
};

export const DEFAULT_HIGHLIGHT_WORDS: string[] = [
  "technology",
  "partner",
  "outcomes",
];

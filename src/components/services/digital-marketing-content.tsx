"use client";

import { ServiceTemplate } from "./service-template";
import { DIGITAL_MARKETING_CONFIG } from "@/config/services/digital-marketing";

export function DigitalMarketingContent() {
  return <ServiceTemplate config={DIGITAL_MARKETING_CONFIG} />;
}

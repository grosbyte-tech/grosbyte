"use client";

import { ServiceTemplate } from "./service-template";
import { WEB_MOBILE_CONFIG } from "@/config/services/web-mobile";

export function WebMobileContent() {
  return <ServiceTemplate config={WEB_MOBILE_CONFIG} />;
}

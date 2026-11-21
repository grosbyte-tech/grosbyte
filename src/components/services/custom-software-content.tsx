"use client";

import { ServiceTemplate } from "./service-template";
import { CUSTOM_SOFTWARE_CONFIG } from "@/config/services/custom-software";

export function CustomSoftwareContent() {
  return <ServiceTemplate config={CUSTOM_SOFTWARE_CONFIG} />;
}

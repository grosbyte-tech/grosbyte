import { PageShell } from "@/components/editorial/page-shell";
import { serviceMetadata } from "@/components/services/service-ui";
import { ContactPageContent } from "@/components/contact/contact-page-content";

export const metadata = serviceMetadata(
  "Contact Us",
  "Talk to Grosbyte about software, websites, business automation, or digital marketing. Share your project requirements with our team in Kathmandu, Nepal.",
  "/contact",
);

export default function ContactPage() {
  return (
    <PageShell>
      <ContactPageContent />
    </PageShell>
  );
}

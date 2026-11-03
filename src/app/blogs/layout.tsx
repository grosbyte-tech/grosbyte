import { PageShell } from "@/components/editorial/page-shell";
export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageShell>{children}</PageShell>;
}

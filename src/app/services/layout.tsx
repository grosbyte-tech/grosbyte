import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./services.css";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="services-page" id="main-content" tabIndex={-1} lang="en">
        {children}
      </main>
      <Footer />
    </>
  );
}

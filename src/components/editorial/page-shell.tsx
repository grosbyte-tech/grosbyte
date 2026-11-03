import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./editorial.css";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="editorial-page"
        lang="en"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
export function Breadcrumbs({
  current,
  blog = false,
}: {
  current: string;
  blog?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="editorial-breadcrumbs">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {blog && (
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        )}
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}

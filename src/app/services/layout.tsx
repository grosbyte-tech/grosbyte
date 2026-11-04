import "./services.css";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="services-page" id="main-content" tabIndex={-1}>
      {children}
    </main>
  );
}

export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 select-none"
      aria-label="Loading content"
    >
      <div className="relative flex items-center justify-center">
        {/* Ambient brand glow */}
        <div
          className="absolute -inset-4 rounded-full bg-[var(--brand-blue)]/20 blur-xl animate-pulse"
          aria-hidden="true"
        />

        {/* Outer rotating ring */}
        <div
          className="w-12 h-12 rounded-full border-2 border-[var(--brand-blue)]/20 border-t-[var(--brand-blue)] animate-spin"
          aria-hidden="true"
        />

        {/* Inner pulsing core */}
        <div
          className="absolute w-4 h-4 rounded-full bg-[var(--brand-blue)] animate-ping opacity-60"
          aria-hidden="true"
        />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)] font-mono">
        Loading...
      </p>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-glass-border)] flex items-center justify-center mx-auto mb-8">
          <span className="text-5xl font-bold bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)] bg-clip-text text-transparent">
            404
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us help you find your way back.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-medium hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

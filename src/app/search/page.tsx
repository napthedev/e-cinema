import { Suspense } from "react";
import SearchContent from "./search-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search - e-cinema",
  description: "Search for your favorite movies and TV shows",
  openGraph: {
    images: ["/preview.png"],
  },
};

export default function SearchPage() {
  return (
    <div className="min-h-screen pt-24">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  );
}

import React, { Suspense } from "react";
import SearchResults from "./SearchResults";

export default function SearchPage() {
  return (
    <main className="px-4 py-8 mx-auto max-w-[90rem]">
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
}

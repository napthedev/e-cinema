"use client";

import { FormEvent, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import MovieGrid from "../../components/movie/movie-grid";
import { SearchResult } from "../../utils/types";
import { search } from "../../utils/api";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const q = searchParams.get("q");
  const page = searchParams.get("page");

  useEffect(() => {
    if (q) {
      setIsLoading(true);
      search(q, page ? parseInt(page) : 1)
        .then(setResult)
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }
  }, [q, page]);

  const handleSearchFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchInputValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInputValue)}`);
    }
  };

  if (!q) {
    return (
      <form
        className="flex flex-col items-center justify-center md:mt-12 mx-8"
        onSubmit={handleSearchFormSubmit}
      >
        <h1 className="text-center text-3xl mb-6">
          Find your favorite movies and TV shows
        </h1>
        <div className="w-full max-w-xl relative">
          <button
            type="submit"
            className="absolute top-1/2 left-4 -translate-y-1/2"
          >
            <FaSearch size={25} />
          </button>
          <input
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            className="w-full h-full p-3 pl-14 text-2xl outline-none bg-dark-darken text-gray-100 placeholder-gray-500 rounded"
            type="text"
            placeholder="Search..."
          />
        </div>
      </form>
    );
  }

  if (isLoading) {
    return <div className="text-center mt-12">Loading...</div>;
  }

  if (!result) {
    return <div className="text-center mt-12">No results found</div>;
  }

  return (
    <div className="md:mx-20 mx-10">
      <h1 className="text-2xl mb-8">
        Search result for &quot;{q}&quot; ({result.total_results}{" "}
        {result.total_results <= 1 ? "result" : "results"} found)
      </h1>
      <MovieGrid
        data={result.results}
        currentPage={result.page}
        maximumPage={result.total_pages}
        resolveLink={(page) =>
          `/search?q=${encodeURIComponent(q)}&page=${page}`
        }
      />
    </div>
  );
}
